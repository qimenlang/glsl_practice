#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;


float circle_shape(vec2 position,float radius){
    position = position*2.0-1.0;
    return step(radius,length(position));
}

mat2 scale(vec2 scale){
    return mat2(scale.x,0.0,0.0,scale.y);
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution;
    coord-=vec2(0.5);
    coord=scale(vec2(sin(u_time)+2.0))*coord;
    coord+=vec2(0.5);
    
    float circle = circle_shape(coord,0.5);
    vec3 color=vec3(circle);
    gl_FragColor=vec4(color,1.0);
}