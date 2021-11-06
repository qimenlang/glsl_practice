#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float rect_shape(vec2 position,vec2 scale){
    scale = vec2(0.5) - scale*0.5;
    
    vec2 t = vec2(step(scale.x,position.x),step(scale.y,position.y));
    t*= vec2(step(scale.x,1.0-position.x),step(scale.y,1.0-position.y));    
    return t.x*t.y; 
}

void main(){
    vec2 position = gl_FragCoord.xy/u_resolution;
    float rect = rect_shape(position,vec2(0.4,0.4));

    vec3 color=vec3(rect);
    gl_FragColor=vec4(color,1.0);

}