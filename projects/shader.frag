// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random (in vec2 _st) {
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // vec2 u = f * f * (3.0 - 2.0 * f);
    vec2 u = smoothstep(0.,1.,f * f * (3.0 - 2.0 * f));

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define NUM_OCTAVES 5

float fbm ( in vec2 _st, in vec2 off) {
    float v = 0.0;
    float a = 0.55;
    vec2 shift = vec2(200.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.5));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(_st);
        _st = rot * _st * 2.0 + shift + off;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy*3.;
    // st += st * abs(sin(u_time*0.1)*3.0);
    vec3 color = vec3(0.0);

    vec2 q = vec2(0.);
    q.x = fbm( st + 0.00*u_time, vec2(0.01));
    q.y = fbm( st + vec2(1.0), vec2(0.));

    vec2 r = vec2(0.);
    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time, vec2(0.) );
    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time, vec2(0.));

    float fr = fbm(st+r, vec2(-0.1*sin(u_time)));
    float fg = fbm(st+r, vec2(0.2*abs(cos(u_time))+.2));
    float fb = fbm(st+r, vec2(0.35*abs(cos(u_time))+.2));

    // float colorR = length(f);
    // float colorG = length(f+0.01);
    // float colorB = length(f+0.02);


    color = mix(vec3(0.500,0.110,0.257),
                vec3(0.520,0.562,0.667),
                clamp((fr*fr)*4.0,0.0,1.0));

    color = mix(color,
                vec3(0.096,0.122,0.625),
                clamp(length(q),0.0,1.0));
    
    color = mix(color,
                vec3(0.865,0.426,0.137),
                clamp(length(q),0.0,1.0));

    color = mix(color,
                vec3(0.666667,1,1),
                clamp(length(r.x),0.0,1.0));
    
    color *= vec3(fr,fg,fb);

	gl_FragColor = vec4((fr*fr*fr+.6*fr*fr+.5)*color,1.);
    // gl_FragColor = vec4((f*f*f+.6*f*f+.5*f)*color,1.);
}
