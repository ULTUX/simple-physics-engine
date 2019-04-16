function setup(){
    createCanvas(1200, 600);
}
let circles = [];
function draw(){
    clear();
    background(100, 100, 100);
    for (let i = 0; i < circles.length; i++){
        fill(56, 100, 170);
        circle(circles[i].x, circles[i].y, circles[i].d);
        circles[i].draw();
    }
}

function mouseClicked(){
    // circles.push(new Circle(random(0, width), random(0, height/3), random(20, 70)));
    circles.push(new Circle(mouseX, mouseY, 60));
}

class Circle {
    constructor (x, y, d){
        this.x = x;
        this.y = y;
        this.d = d;
        this.velocity = 0;
        this.accel = 0.1;
        this.strona = 1;
        this.height = y;
        this.isMovement = true;
        this.lastUp = null;
        this.lastDown = null;
        this.lastMaxHeight = null;
    }

    draw() {
        if (this.isMovement){
        if (this.strona == 1){
            this.velocity += this.accel;
            this.y += this.velocity;
            this.lastUp = this.velocity;
            console.log("1:               "+this.velocity);
        }
        if (this.y >= height){
            this.strona *= -1;
        }
        if (this.strona == -1) {
            this.velocity -= 0.98*this.accel;
            this.y -= this.velocity;
            this.lastDown = this.velocity;
            console.log("2:               "+this.velocity)
            if (this.velocity <= 0){ 
                this.strona *= -1;
                this.lastMaxHeight = this.y;
            }
        }
        if (Math.round(this.lastUp*100)/100 == Math.round((this.lastDown+this.accel)*100)/100 && this.y >= height){
            if (this.lastMaxHeight >= height-20) this.isMovement = false;
            else {
                this.strona = 1;
            }
        }
    }
}

}