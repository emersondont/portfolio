import React, { useEffect, useRef } from "react"
import vertexShaderSource from './vs'
import fragmentShaderSource from './fs'

export default function Background() {
    const canvasRef = React.createRef<HTMLCanvasElement>();
    const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

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

        const timeUniformLocation = gl.getUniformLocation(program, 'u_time');
        const u_mouseCoords = gl.getUniformLocation(program, 'u_mouseCoords');
        const startTime = Date.now();
        var zCam = 10
        var mouseNormX = 0.0
        var mouseNormY = 0.0

        document.addEventListener('mousemove', function (e) {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - (rect.width / 2);
            const mouseY = e.clientY - (rect.bottom / 2);
            mouseNormX = mouseX / (canvas.width / ((canvas.width / canvas.height) * zCam)) + 1
            mouseNormY = -1 * mouseY / (canvas.height / zCam)
        });

        var desiredFPS = 30;
        var lastFrame = 0;
        var range = 1000 / desiredFPS;

        function render(now: number) {
            if (!gl)
                return
            if (canvasIsVisible()) {
                var elapsed = now - lastFrame;

                if (elapsed > range) {
                    lastFrame = now - (elapsed % range);

                    let elapsedTime = (Date.now() - startTime) / 5000;
                    gl.uniform1f(timeUniformLocation, elapsedTime);
                    gl.uniform2f(u_mouseCoords, mouseNormX, mouseNormY);
                    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                }
                requestAnimationFrame(render);
            }
        }

        function canvasIsVisible() {
            if (!canvas || !intersectionObserverRef.current) return false;
            const { top, bottom } = canvas.getBoundingClientRect();
            return top < window.innerHeight && bottom > 0;
        }

        intersectionObserverRef.current = new IntersectionObserver(
            (entries) => {
                const isVisible = entries.some((entry) => entry.isIntersecting);
                if (isVisible) {
                    requestAnimationFrame(render);
                }
            },
            { rootMargin: "0px" }
        );

        intersectionObserverRef.current.observe(canvas);

        return () => {
            if (intersectionObserverRef.current) {
                intersectionObserverRef.current.disconnect();
            }
        };

    }, []);

    return (
        <canvas
            ref={canvasRef}
            className='absolute bottom-0 right-0 z-0 w-full h-full bg-bgCanvas'
        />
    )

}