class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this. sling1= loadImage("sprites/sling1.png")
        this. sling2= loadImage("sprites/sling2.png")
        this. sling3= loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,22,8)
            if (pointA.x<150){
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+35, pointB.y)
            image(this.sling3,pointA.x-25,pointA.y-10,10,30)
            }
            else if (pointA.x<250 && pointA.x>160){
                strokeWeight(5);
                line(pointA.x-20, pointA.y, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+35, pointB.y)
                image(this.sling3,pointA.x-25,pointA.y-10,10,30)
                }
            else{strokeWeight(3);
                line(pointA.x-20, pointA.y, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+35, pointB.y)
                image(this.sling3,pointA.x-25,pointA.y-10,10,30)}
            pop()
        }
         image(this.sling1,200,23)
         image(this.sling2,170,21)
    }

    
}