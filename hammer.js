class Hammer{
    constructor(x,y){
        var Options={
            restitution:1,
            density:0.1,
            friction:0.3          
        }

        this.body=Bodies.rectangle(x,y,100,30,Options)
        this.width=100;
        this.height=30;
     
        World.add(world,this.body)

    }
    display(){
        
        push()  
        
        var position=this.body.position;
        position.x = mouseX;
        position.y = mouseY;
        translate(position.x,position.y)
        angleMode(RADIANS)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("skyblue")
        rect(0,0,this.width,this.height)
        pop()
    }
}
