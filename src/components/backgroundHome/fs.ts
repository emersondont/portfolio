export default `
precision mediump float;
        
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform vec2 u_mouseCoords;

        vec3 lightPosition = vec3(u_mouseCoords, 6.0);
        const float lightIntensity = 10.0;
        const float lightAttenuation = 0.5;
        
        float sphereSDF(vec3 p, vec3 c, float r) {
            return length(p - c) - r;
        }       
        float sphereSDFoptimized(vec3 p, float r) {
            return length(p) - r;
        }       
        
        float smoothMax(float a, float b, float k) {
            return log(exp(k * a) + exp(k * b)) / k;
        }
        
        float smoothMin(float a, float b, float k) {
            return -smoothMax(-a, -b, k);
        }

        vec4 scene(vec3 p) {
            const int len = 10;

            float d1 = 1000.0;
            vec3 color = vec3(0.0);

            vec3 colors[len];
            colors[0] = vec3(1.0000, 0.2353, 0.0000);
            colors[1] = vec3(1.0000, 0.7333, 0.0000);
            colors[2] = vec3(1.0000, 0.9176, 0.0000);
            colors[3] = vec3(0.2980, 0.6824, 0.3098);
            colors[4] = vec3(0.0118, 0.5961, 0.8863);
            colors[5] = vec3(1.0000, 0.0000, 1.0000);
            colors[6] = vec3(0.0000, 1.0000, 1.0000);
            colors[7] = vec3(1.0000, 1.0000, 0.0000);
            colors[8] = vec3(1.0000, 0.0000, 0.5020);
            colors[9] = vec3(0.0000, 1.0000, 0.0000);

            for(int i = 0; i < len; i++) {
                float fi = float(i);
                /*
                float time = u_time * (fract(fi * 412.531 + 0.513) - 0.5) * 2.0;
                float d2 = sphereSDF(
                    p + sin(time + fi * vec3(52.5126, 64.62744, 632.25)) * vec3(7.0, 3.0, 0.5), 
                    vec3(0.0),
                    mix(0.6, 1.4, fract(fi * 412.531 + 0.5124))
                );
                */
                float d2 = sphereSDFoptimized(
                    p + sin(u_time + fi * vec3(52.5126, 64.62744, 632.25)) * vec3(7.0, 2.0, 0.5),
                    mix(0.6, 1.4, fract(fi * 412.531 + 0.5124))
                );

                float mix_factor = d1 / (d2 + d1);

                color = mix(
                    color,
                    colors[i],
                    mix_factor
                );

                d1 = smoothMin(d1, d2, 1.5);
            }

            return vec4(color, d1); 
        }

        vec3 estimateNormal(vec3 p) {
            float eps = 0.001;
            float dx = scene(vec3(p.x + eps, p.y, p.z)).w - scene(vec3(p.x - eps, p.y, p.z)).w;
            float dy = scene(vec3(p.x, p.y + eps, p.z)).w - scene(vec3(p.x, p.y - eps, p.z)).w;
            float dz = scene(vec3(p.x, p.y, p.z + eps)).w - scene(vec3(p.x, p.y, p.z - eps)).w;
            return normalize(vec3(dx, dy, dz));
        }
        
        float calculateLight(vec3 pointPos) {
            // Calcula a normal
            vec3 pointNormal = estimateNormal(pointPos);
            // Calcula a direção da luz em relação ao ponto
            vec3 lightDirection = normalize(lightPosition - pointPos);
          
            // Calcula o produto escalar entre a direção da luz e a normal do ponto
            float diff = max(dot(pointNormal, lightDirection), 0.02);
          
            // Calcula a atenuação da luz em função da distância
            float distance = length(lightPosition - pointPos);
            float attenuation = 1.0 / (1.0 + lightAttenuation * distance * distance);
            
            //calcula a intencidade da specular
            vec3 reflectedDirection = reflect(-lightDirection, pointNormal);
            float cosAngle = max(dot(reflectedDirection, pointNormal), 0.5);
            float specularIntensity = pow(cosAngle, 10.0);

            // Retorna a quantidade de luz que atinge o ponto
            return lightIntensity * attenuation * (diff + specularIntensity);
        }

        vec3 raymarch(vec3 ro, vec3 rd) {
            float t = 0.0;
            float d = 0.0;
            vec3 color = vec3(vec3(0.2314, 0.0275, 0.3922) * (1.0-rd.y)*1.5);

            for (int i = 0; i < 25; i++) {
                vec3 p = ro + rd * t;
                vec4 sc = scene(p);
                d = sc.w;
                
                if (d < 0.01) {
                    float lightAmount = calculateLight(p);
                    color = sc.xyz;
                    return color * lightAmount;
                }

                t += d;

                if (t > 50.0) {
                    break;
                }
            }
            
            return color;
        }

        void main() {
            vec2 uv;
            if(u_resolution.x > u_resolution.y) {
                uv.x = gl_FragCoord.x*(u_resolution.x / u_resolution.y) / u_resolution.x;
                uv.y = gl_FragCoord.y / u_resolution.y;
            } else {
                uv.x = gl_FragCoord.x / u_resolution.x;
                uv.y = gl_FragCoord.y / u_resolution.y;
            }
            const vec3 pointToLookAt = vec3(1.0, 0.5, 1.0);
            const vec3 ro = vec3(0.0, 0.0, 10.0);
            vec3 rd = normalize(vec3(uv, 0.0) - pointToLookAt);
            vec3 color = raymarch(ro, rd);
            gl_FragColor = vec4(color, 1.0);
        }
`