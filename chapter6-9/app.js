// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:  //

var a = 10;

document.write('<h1>Result</h1><br>');
document.write('<p>The value of a is: '+a+'</p>');
document.write('<p>-----------------------------------</p><br>');
document.write('<p>the value of ++a is: '+(++a)+'</p>');
document.write('<p>Now the value of a is: '+(a)+'</p><br>');
document.write('<p>the value of a++ is: '+(a++)+'</p>');
document.write('<p>Now the value of a is: '+(a)+'</p><br>');
document.write('<p>the value of --a is: '+(--a)+'</p>');
document.write('<p>Now the value of a is: '+(a)+'</p><br>');
document.write('<p>Now the value of a-- is: '+(a--)+'</p>');
document.write('<p>Now the value of a is: '+(a)+'</p><br>');

// 2. What will be the output in variables a, b & result after execution of the following script//

var a = 2;
var b = 1;

--a; // first we decrement the value of a and then print now the value is a 1 
--a - --b; // first we decrement the value of a then printed and minus with decrement of b and then plus in increment of b 
--a - --b + ++b;// first we decrement the value of a then subtract with decreement of b then add with increment of b
--a - --b + ++b + b--; // first we decrement of a then subtract of decrement of b then add with increment of b then add with decrement of b 

// 3. Write a program that takes input a name from user & greet the user. //

var name = prompt("whats your name");
alert('Hello how are you '+name);

// Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.//

var user1= prompt("enter the number ");


document.write('<h1> Table Of ' + user1 + ' </h1> <br/>');
document.write('<h3>' + Number(user1) + ' x 1 = ' + Number(user1) * 1 + ' </h3>');
document.write('<h3>' + Number(user1) + ' x 2 = ' + Number(user1) * 2 + ' </h3>');
document.write('<h3>' + Number(user1) + ' x 4 = ' + Number(user1) * 4 + ' </h3>');
document.write('<h3>' + Number(user1) + ' x 5 = ' + Number(user1) * 5 + ' </h3>');
document.write('<h3>' + Number(user1) + ' x 6 = ' + Number(user1) * 6 + ' </h3>');
document.write('<h3>' + Number(user1) + ' x 7 = ' + Number(user1) * 7 + ' </h3>');
document.write('<h3>' + Number(user1) + ' x 8 = ' + Number(user1) * 8 + ' </h3>');
document.write('<h3>' + Number(user1) + ' x 9 = ' + Number(user1) * 9 + ' </h3>');
document.write('<h3>' + Number(user1) + ' x 10 = ' + Number(user1) * 10 + ' </h3> <br/>');

