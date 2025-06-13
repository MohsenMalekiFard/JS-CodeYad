
function createCircle(radius){

   return {
        radius:radius,
        draw:function(){
            console.log('draw');
        }
    }

}


const circle=createCircle(1);

const circle2=createCircle(2);

circle.draw();
