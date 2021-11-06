#ifdef GL_ES
precision mediump float;
#endif

const float PI=3.1415926;

uniform vec2 u_resolution;

// atan(x,y) 求角度
// floor(x)  对x进行向下取整

float polygon_shape(vec2 position,float radius,float sides){
    position = position*2.0-1.0;
    float angle =atan(position.x, position.y);
    float slice = 2.0*PI/sides;

    return step(radius,cos(floor(0.5+angle/slice)*slice-angle)*length(position));
}

void main(){
    vec3 color=vec3(1.0);
    vec2 position= gl_FragCoord.xy/u_resolution;
    float polygon=polygon_shape(position,0.4,6.0);
    color=vec3(polygon);
    gl_FragColor = vec4(color, 1.0);
}