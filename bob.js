class Bob{
    constructor(x,y){
        var options= {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
          
        }
      this.body = Bodies.circle(x,y,40,options)
      this.radius = 40;

      

      World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    push(); 
    translate(pos.x,pos.y);
    
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(0,0,40,40);
    pop();
}
}