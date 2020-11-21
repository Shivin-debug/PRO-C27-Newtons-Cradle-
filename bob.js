class Bob{
    constructor(x, y, r){
      var bob_options = {
          isStatic: true,
          restitution: 0.3,
          friction: 0.5,
          density: 0.8
      }

      this.bob = Bodies.circle(x, y, r, bob_options);
      this.r = r; 

      World.add(world, this.bob);
    }

    display(){
    var b = this.bob.position;
    fill("white");
    push()
    translate(b.x, b.y);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r, this.r);
    pop()
    }
}