class groundClass {
    constructor(x, y, width, height) {
        var options = {
            'isStatic': true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(Pworld, this.body);
    }
    display(){
        var x = this.body.position.x;
        var y = this.body.position.y;
        rectMode(CENTER);
        push();
        fill(255,248,220)
        rect(x, y, this.width, this.height);
        pop();
    }
}

//--------------------------------------------------- ROPE CLASS --------------------------------------------------------
class Rope{
    constructor(bA, pB){
        var options = {
            'stiffness': 0.5,
            'length': 650,
            'bodyA': bA,    
            'pointB': pB
        }
        this.rope = constraint.create(options);
        this.pointB = pB;
        World.add( Pworld, this.rope);
    }
    display(){
        var A = this.rope.bodyA.position;
        stroke(224, 224, 224);
        push()
        strokeWeight(10);
        stroke('black')
        line(A.x, A.y, this.pointB.x, this.pointB.y);
        pop()
    }
    remove(){
        this.rope.body = null;
    }
}
//-------------------------------------- ball class ----------------------------------------------
class ballClass{
    constructor(x, y, radius) {
        var options = {
            'restitution': 0.4,
            'density': 100
        }
        this.radius = radius;        
        this.body = Bodies.circle(x, y, radius, options);
        World.add(Pworld, this.body);
        // console.log(Matter.body);
    }
    display(){
        var x = this.body.position.x;
        var y = this.body.position.y;
        
        push();
        ellipseMode(RADIUS);
        this.depth = 100;
        strokeWeight(4)
        stroke('black')
        fill("silver ")
        ellipse(x, y, this.radius, this.radius);
        pop();
        
    }
    
}
//-------------------------------------- BLOCK CLASS ----------------------------------------------
class blocksClass{
    constructor(x, y) {
        var options = {
            'restitution': 0,
            'density': 5,
            'friction': 8
        }
        this.width = 90;
        this.height = 95;        
        this.body = Bodies.rectangle(x, y, 90, 95, options);
        World.add(Pworld, this.body);
    }
    display(){
        var x = this.body.position.x;
        var y = this.body.position.y;
        
        push();
        rectMode(CENTER);
        var color;
        if(frameCount%1  === 0){
            color = Math.round(random(1, 10));

        }

        

        
        if(color === 1){
            fill('lighyellow')
        }
        if(color === 2){
            fill('blue')
        }
        if(color === 3){
            fill('red');
        }
        if(color === 4){
            fill('grey');
        }
        if(color === 5){
            fill('yellow')
        }
        if(color === 6){
            fill(128, 255, 0)
        }
        if(color === 7){
            fill('purple')
        }
        if(color === 8){
            fill(255, 0, 127);
        }
        if(color === 9){
            fill(51, 255, 255)
        }
        if(color === 10){
            fill('brown')
        }
        strokeWeight(4);

    rect(x, y, this.width, this.height);
        pop();
        // console.log(color);
    }
}
class invisGroundClass {
    constructor(x, y, width, height) {
        var options = {
            'isStatic': true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(Pworld, this.body);
    }
    display(){
        var x = this.body.position.x;
        var y = this.body.position.y;
        rectMode(CENTER);
        push();
        strokeWeight(0)
        fill(242,172,185)
        rect(x, y, this.width, this.height);
        pop();
    }
}

