"use client";
import React, { useEffect } from "react"
import vertexShaderSource from './vs'
import fragmentShaderSource from './fs'

export default function Background() {
    const canvasRef = React.createRef<HTMLCanvasElement>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return
        const gl = canvas?.getContext("webgl2");
        if (!gl)
            return

        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        if (!vertexShader)
            return
        if (!fragmentShader)
            return

        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);

        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);

        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = canvas.clientWidth * devicePixelRatio;
        canvas.height = canvas.clientHeight * devicePixelRatio;
        gl.viewport(0, 0, canvas.width, canvas.height);

        const program = gl.createProgram();
        if (!program)
            return
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = [
            -1.0, -1.0, 0.0,
            1.0, -1.0, 0.0,
            -1.0, 1.0, 0.0,
            1.0, 1.0, 0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

        const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
        gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

        const timeUniformLocation = gl.getUniformLocation(program, 'iTime');
        const startTime = Date.now();

        function render() {
            if(!gl)
                return
            let elapsedTime = (Date.now() - startTime) / 1000;
            gl.uniform1f(timeUniformLocation, elapsedTime);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className='absolute bottom-0 right-0 z-0 w-full h-full bg-bgCanvas'
        />
    )

}