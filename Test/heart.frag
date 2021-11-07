#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

//u_resolution 屏幕尺寸
//u_time 绘制时间
//u_mouse 鼠标当前位置
//step(a, x) :  if x<a return 0;else return 1;
//length(vec2):向量长度
float heart_shape(vec2 position){
    position = position*2.0-1.5;
    //return step(radius,length(position));
    return step(pow((pow(position.x,2.0)+2.25*pow(position.y,2.0)-1.0),3.0),pow(position.x,2.0)*pow(position.y,3.0));
}

mat2 scale(vec2 scale){
    return mat2(scale.x,0.0,0.0,scale.y);
}

void main(){
    vec3 color= vec3(1.0);
    vec2 position=gl_FragCoord.xy/u_resolution;
    position *= scale(vec2(1.5));
    float heart=heart_shape(position);
    color=vec3(heart,0.0,0.0);
    gl_FragColor=vec4(color,1.0);
}