var Variable1="Variable1"; //Globally Variable
function myfunction()
{
    var Variable2="Variable2"; //Locally Variable
}
var Result="Mohammad";
Result=213;
const Result2=213;



function logScope()
 {

    let localVar=2;

    if(localVar=2)
    {
        let localVar="different Variable";
        console.log("nested localVar"+localVar);
 
    }



    console.log("LogScope localVar :"+localVar);
}


  logScope();
