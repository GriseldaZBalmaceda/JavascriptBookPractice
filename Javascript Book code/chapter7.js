//different way to create arrays

var empty=[];
var notEmpty=[1,2,3,4,5]
var misc=[1.1,true,"a"]

//array literal may be arbitrary 
var base=1024;

var table=[base+1,base+2]


//array literals can contain object literals or other array literals 

var b =[[1,{x:1,y:2}],[2,{x:3,y:4}]];


//how to invoke an array with the Array() constructor 

//call with no arguments
var a = new Array();

//call it with a single numeric argument,which specifies a length

var a = new Array(10);

//explicitly specify two or more array elements 

var a = new Array(4,5,6,3,"testing")

//7.5 Adding and Deleting Array Elements 

a=[];
a[0]="zero";
a[1]="zero";

b=[];
b.push("zero");//add value at the end with the push method
b.push("one","two")
console.log("B using push: "+ b)

b.unshift("negative one");
console.log("b using unshift: "+ b)
b.shift("zero")


// deleting aray with the delete operator
// console.log("\n")
// console.log("using the delete operator")
// c=[1,2,3]
// delete c[1];
// 1 in c 
// console.log(c.length);//delete does not affect array length

console.log('\n')
console.log("b before pop method: "+ b)
b.pop("two");
console.log("b after pop method: " + b)//reduces the length of an array by 1 but also returns the value of the deleted element 


//7.6 Iterating Arrays