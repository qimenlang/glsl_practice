#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;


float circle_shape(vec2 position,float radius){
    position = position*2.0-1.0;
    return step(radius,length(position));
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution;
    vec2 translate= vec2(sin(u_time),cos(u_time)); 
    coord+=translate*0.5;
    float circle = circle_shape(coord,0.2);
    vec3 color=vec3(circle);
    gl_FragColor=vec4(color,1.0);
}