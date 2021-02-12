class Rubber{
    constructor(x,y){
        var Options={
            restitution:1,
            friction:0.3,
            density:1.0
        }
        this.body=Bodies.circle(x,y,30,Options)

       
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        angleMode(RADIANS)
        rotate(this.body.angle)
        ellipseMode(RADIUS) 
        fill("red")
        ellipse(0,0,30)
        pop()
    }

}