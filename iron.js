class Iron{
    constructor(x,y,width,height){
    
        var Options={
            restitution:0.5,
            friction:0.1,
            density:1
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
   fill("grey");
   rect(0, 0, this.width, this.height);
   pop()

    }
}