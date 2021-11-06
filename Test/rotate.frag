#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const float PI = 3.1415926;

float rect_shape(vec2 position,vec2 scale){
    scale = vec2(0.5) - scale*0.5;
    
    vec2 t = vec2(step(scale.x,position.x),step(scale.y,position.y));
    t*= vec2(step(scale.x,1.0-position.x),step(scale.y,1.0-position.y));    
    return t.x*t.y; 
}
float polygon_shape(vec2 position,float radius,float sides){
    position = position*2.0-1.0;
    float angle =atan(position.x, position.y);
    float slice = 2.0*PI/sides;

    return step(radius,cos(floor(0.5+angle/slice)*slice-angle)*length(position));
}


mat2 rotate(float angle){
    return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

void main(){
    vec2 coord = gl_FragCoord.xy/u_resolution;
    coord-=vec2(0.5);
    coord =rotate(sin(u_time)*PI)*coord;
    coord+=vec2(0.5);
    float rect = polygon_shape(coord,0.3,6.0);

    vec3 color=vec3(rect);
    gl_FragColor=vec4(color,1.0);

}