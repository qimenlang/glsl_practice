#ifdef GL_ES
precision mediump float;
#endif

//GL_ES ：如果当前实在Open ES环境中运行，则GL_ES被设置成1，
//一般用来检查当前环境是不是OpenGL ES;

void main(){
    gl_FragColor=vec4(0.1529,0.9,0.5725,1.0);
}