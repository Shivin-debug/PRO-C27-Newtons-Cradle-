class Chain{
    constructor(body1, body2, offsetX){
        this.offsetX = offsetX
        var options = {
          bodyA: body1,
          bodyB: body2,
      }

      this.chain = Matter.Constraint.create(options);

      World.add(world, this.chain);
    }

    display(){
      var pointA = this.chain.bodyA.position;
      var pointB = this.chain.bodyB.position;

      strokeWeight(2);

      line(pointA.x + this.offsetX, pointA.y, pointB.x, pointB.y); 
    }
}