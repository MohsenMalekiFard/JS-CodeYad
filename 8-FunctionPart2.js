

//Named Function
function findBiggestFraction(a,b)
{
    var result;
    a>b ? result=["firstFraction",a] : result=["secondFraction",b];
    return result;
}
//var newResult = findBiggestFraction(7/16,13/25);
//console.log(findBiggestFraction(7/16,13/25));
var fractionResult=findBiggestFraction(7/16,13/25);

//console.log("Fraction "+fractionResult[0]+" With a Value " +fractionResult[1]+" is The Biggest");


//Anonymous Functions
var theBiggest=function (a,b) {

    var result;
    a>b ? result=["a",a] : result=["b",b];
    return result;

  }


  //console.log(theBiggest(7/9,13/25));
  //console.log(theBiggest());


  //immediately invoked function

  var theBiggest=(function (a,b) {

    var result;
    a>b ? result=["a",a] : result=["b",b];
    return result;

  })(7/9,13/25);

  console.log(theBiggest);
