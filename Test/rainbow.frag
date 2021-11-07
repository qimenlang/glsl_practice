#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord = gl_FragCoord.xy/u_resolution;
    vec3 color=vec3(0.0);

    float angle = atan(-coord.y+0.5,coord.x-0.5)*0.1;
    float len = length(coord - vec2(0.5,0.5));

    color.r+=sin(len*30.0+angle*30.0-u_time);
    color.g+=sin(len*20.0+angle*30.0-u_time);
    color.b+=sin(len*10.0+angle*30.0-u_time);


    gl_FragColor=vec4(color,1.0);   
}