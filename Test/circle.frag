#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

//u_resolution 屏幕尺寸
//u_time 绘制时间
//u_mouse 鼠标当前位置
//step(a, x) :  if x<a return 0;else return 1;
//length(vec2):向量长度
float circle_shape(vec2 position,float radius){
    position = position*2.0-1.0;
    return step(radius,length(position));
}

void main(){
    vec3 color= vec3(1.0);
    vec2 position=gl_FragCoord.xy/u_resolution;
    float radius =0.5;
    float circle=circle_shape(position,radius);
    color=vec3(circle);
    gl_FragColor=vec4(color,1.0);
}