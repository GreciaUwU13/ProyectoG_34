class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("monster1.png"); //se añade la imagen del mounstruo al cuerpo
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)//se le da forma al cuerpo
		World.add(world, this.body);//el cuerpo es añadido al mundo 

	}
	display()
	{
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER);
			fill(255,0,255);
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r);
			pop() 
	}
}
