class Stone{
    constructor(x,y,width,height){
    
        var Options={
            restitution:0.8,
            friction:1.3,
            density:0.1   
        }
        this.body=Bodies.rectangle(x,y,width,height,Options)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
   push()
   translate(this.body.position.x,this.body.position.y);
   rotate(this.body.angle);
   rectMode(CENTER);
   strokeWeight(4)
   stroke("green")
   fill("yellow");
   rect(0, 0, this.width, this.height);
   pop()

    }
}