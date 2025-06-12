
var today=20;
var day;


switch(today)
{
    case 0:
         day="Sunday";
         break;
    case 1:
        day="Monday";
        break;  
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wendsday";
        break;    
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday"; 
        break;
    default:
        day="Your Value Not Found" ;

}



document.write("Today is : " +day);
