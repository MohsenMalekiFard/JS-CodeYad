


function createCircle(radius) {
    return {
        radius : radius,
        draw() {console.log(draw)}
    }
}

let Circle1 = createCircle(2);

console.log(Circle1);
