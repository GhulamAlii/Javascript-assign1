// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 

var num1 = 3;
var num2 = 16;

var add = num1 + num2;

document.write('<h1> Sum of ' + num1 + ' and ' + num2 + ' is:  ' + add + '</h1>');

// 2. Repeat task1 for subtraction, multiplication, division & modulus.//

var Sub = num1 - num2;

document.write('<h3> Subtract of ' + num1 + ' and ' + num2 + ' is:  ' + Sub + '</h3>');

var multiply = num1 * num2;

document.write('<h3> Multilpy of ' + num1 + ' and ' + num2 + ' is:  ' + multiply + '</h3>');

var Division = num1 / num2;

document.write('<h3> Division of ' + num1 + ' and ' + num2 + ' is:  ' + Division + '</h3>');

var Modulus = num1 % num2;

document.write('<h3> Remainder of ' + num1 + ' and ' + num2 + ' is:  ' + Modulus + '</h3>');

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: //

var price = 600;
var ticketQty = 7;

document.write('<h1>Movie Ticket Counter </h1> <br/>')
document.write('<h3>Total cost to buy ' + ticketQty + ' tickets to a movie is ' + price * ticketQty + ' PKR</h3> <br/>')

//5. Write a script to display multiplication table of any number in your browser. E.g //

var tableNum = 7;

document.write('<h1> Table Of ' + tableNum + ' </h1> <br/>');
document.write('<h3>' + tableNum + ' x 1 = ' + tableNum * 1 + ' </h3>');
document.write('<h3>' + tableNum + ' x 2 = ' + tableNum * 2 + ' </h3>');
document.write('<h3>' + tableNum + ' x 3 = ' + tableNum * 3 + ' </h3>');
document.write('<h3>' + tableNum + ' x 4 = ' + tableNum * 4 + ' </h3>');
document.write('<h3>' + tableNum + ' x 5 = ' + tableNum * 5 + ' </h3>');
document.write('<h3>' + tableNum + ' x 6 = ' + tableNum * 6 + ' </h3>');
document.write('<h3>' + tableNum + ' x 7 = ' + tableNum * 7 + ' </h3>');
document.write('<h3>' + tableNum + ' x 8 = ' + tableNum * 8 + ' </h3>');
document.write('<h3>' + tableNum + ' x 9 = ' + tableNum * 9 + ' </h3>');
document.write('<h3>' + tableNum + ' x 10 = ' + tableNum * 10 + ' </h3> <br/>');

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. //

var celsius = 30;
var fharenhiet = 64;
var C_to_F = (fharenhiet - 32) * 5 / 9;
var F_to_C = (celsius * 9 / 5) + 32;

document.write('<h1>The Temperature Converter</h1><br/>');
document.write('<h3>' + celsius + '<sup>0</sup>C is ' + C_to_F + '<sup>0</sup>F</h3>');
document.write('<h3>' + fharenhiet + '<sup>0</sup>F is ' + F_to_C + '<sup>0</sup>C</h3><br/>');

// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variable//

var itm1_price = 350;
var itm2_price = 500;
var itm1_qty = 3;
var itm2_qty = 1;
var shipCharge = 50;

document.write('<h1>Shopping Cart</h1> <br/>')
document.write('<h3>Price Of item 1 is '+itm1_price+'<br/>'+'Quantity Of item 1 is '+itm1_qty+'<br/>'+' Price of item 2 is '+itm2_price+'<br/>'+' Quantity of item 2 is '+ itm2_qty+'<br/>'+' Shipping Charges '+shipCharge+'<br/><br/>'+ 'Total cost of your order is '+(itm1_price*itm1_qty+itm2_price*itm2_qty+shipCharge)+'</h3> <br/>');

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser//

var tot_marks = 1100;
var obt_marks = 800;

document.write('<h1>Marksheet</h1><br/>');

document.write('<h3>Total marks: '+tot_marks+'<br/>'+'Marks Obtained: '+obt_marks+'<br/>'+'Percentage: '+(obt_marks/tot_marks*100)+'%</h3><br/>');

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.//

var Usd_rate = 104;
var Sr_rate = 28;
var Pkr_tot = (Usd_rate*10)+(Sr_rate*25);

document.write('<h1>Currency in PKR</h1><br/>')
document.write('<h3>Total Currency in PKR: '+Pkr_tot+'<h3><br/>')

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: //

var sm_num= 30;

var calcu = (sm_num+5)*10/2

document.write('<h1>Perform all calculations in a single expression  </h1><br/>');
document.write('<h3>This is the  answer '+ calcu+ '</h3><br/>');

// 11. The Age Calculator: Forgot how old someone is? Calculate it! //

var current_date = 2020;
var Birth_date = 2001;
var current_age = current_date-Birth_date;

document.write('<h1> The Age Calculator </h1><br/>');
document.write('<h3> Current Year: '+current_date+'<br/> Birth Year: '+Birth_date+'<br/> Your Age is: '+current_age+'</h3><br/>');

// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. //

var radius = 30;
var circumfer = 2*3.142*radius;
var circle_area = 3.142*radius*2;

document.write('<h1> The Geometrizer</h1><br/>');
document.write('<h3> Radius of a Circle: '+radius+'<br/> The circumference is: '+circumfer+'<br/> The area is: '+circle_area+'</h3><br/>');

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 

var snack ='chocolate';
var curr_age = 18;
var max_age = 70;
var est_amount = 5;

document.write('<h1>The Lifetime Supply Calculator</h1><br/>');
document.write('<h3> Favourite Snack: '+snack+'<br/> Current Age: '+curr_age+'<br/>Estimated Maximum Age: '+max_age+'<br/>Amount of Snack per day: '+est_amount+'<br/>You will need '+((max_age-curr_age)*est_amount)+' '+snack+' to last you until the ripe old age of '+max_age+'</h3><br/>');