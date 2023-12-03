document.write("<h3> Q:-1 </h3>")


var a = Math.round(3.45214)
document.write(a);

document.write("<br>")

var a = Math.ceil(3.45214)
document.write(a);


document.write("<br>")
document.write("<h3> Q:-2 </h3>")


//  var b = prompt("Enter the negative value");
//  document.write("<h3> Number </h3>" +"<br>"+ b);


// document.write("<br> <h4> Round </h4>")
//  document.write(Math.round(b));

 
// document.write("<br> <h4> floor </h4>")
// document.write(Math.floor(b));

// document.write("<br> <h4> floor </h4>")
// document.write(Math.ceil(b));



document.write("<h3> Q:-3 </h3>")


var c = Math.abs(-4)
document.write("The absolute value of " )
document.write(c);


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
var chek = prompt("this is a game \n plase Enter a number");

if( rnd === chek){
    alert("<h5> Congratulation<h5>")
    document.write(" <h5> Congratulation<h5>")

}else{
    alert("try agen")
}











