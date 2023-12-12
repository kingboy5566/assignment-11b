// document.write("<h3> Q:-1 </h3>")
// var number = prompt("Enter a number","3.45214");
// document.write("number "+number +" "+ "<br>")
// //round 
// var a = Math.round(3.45214)
// document.write("round off value :"+a);
// document.write("<br>")
// // floor
// var a = Math.floor(3.45214)
// document.write("floor value : "+a+"<br>");

// //ceil
// var a = Math.ceil(3.45214)
// document.write("Ceil value :"+ a);


document.write("<br>")
document.write("<h3> Q:-2 </h3>")


 var b = prompt("Enter the negative value"," -2.673");
 document.write("Number" +" "+ b +"<br>");
// roun
 document.write("round off value :"+Math.round(b)+"<br>");
//floor
document.write("floor value"+Math.floor(b)+"<br>");
//ceil
document.write("ceil value :"+Math.ceil(b)+"<br>");



document.write("<h3> Q:-3 </h3>")

var num1 = -4
var c = Math.abs(num1)
document.write("The absolute value of :" + c)



document.write("<h3> Q:-4 </h3>")


var d = Math.floor(Math.random () *10)+1;
document.write(" random dice value : "+d)
document.write("<br>");

var e = Math.floor(Math.random () *10)+1;
document.write(" random dice value : "+e);

// Q:- 5

document.write("<br>");
document.write("<h3> Q:-5 </h3>")


var rnd = Math.floor(Math.random()*2)



if ( rnd === 1){
      document.write( "<h4> HEADS </h4>")
    document.write( "you win")

}else{
     document.write( "<h4> TAILS </h4>")
    document.write("you loos")
};

// Q:- 6

document.write("<br>");
document.write("<h3> Q:-6 </h3>")

var e = Math.floor(Math.random () *100)+1;
document.write(" random number between 1 and 100 : " + e);

// Q:- 7

document.write("<br>");
document.write("<h3> Q:-7 </h3>")

// var weight = prompt(" Enter your waight");

// for ( var i=0; i<=weight.length; i++){
//     if ( weight.slice(i,i+weight.length)=== weight){
//         document.write( "The weight is user"+" "+ weight+" "+"Kilograms")
//     }
// }


// Q:- 8
document.write("<br>");
document.write("<h3> Q:-8 </h3>");


var rnd = Math.floor(Math.random()*10)+1;
document.write(rnd)
var chek = prompt("this is a game \n plase Enter a number");

if( rnd === chek){
    alert("<h5> Congratulation<h5>")
    document.write(" <h5> Congratulation<h5>")

}else{
    alert("try agen")
}











