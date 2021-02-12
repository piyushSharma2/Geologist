class Sand{
    constructor(x,y){
        var Options={
            restitution:1.3,
            friction:3.5,
            density:1
        }
        this.body=Bodies.circle(x,y,5,Options)

       
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        angleMode(RADIANS)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill("yellow")
        ellipse(0,0,5)
        pop()
    }
}