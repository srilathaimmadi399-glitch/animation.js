//functions:It is a reusable block of code
//which performs some actions

//python example
//def function_name(parameters):
//      statements

//function_name(arguments)
//js function example
//define the function

function greet(){
    //code to execute
    console.log("welcome students")
}
//calling the function

greet()
greet()
greet()
greet()

function greeting(name){
    console.log("hello" + name)
}
//call the function
greeting("Venkatesh")


//multiple params
function add(a,b){
    console.log(a+b);

}
add(2,3);
//return:send backs the value where the
//function is called
//function sub(a,b){
//    console.log(a-b)
//}

function sub(a,b){
    return(a-b);
}
let result=sub(10,5)
console.log(result)
//Task:write a function for a 
//square of a num
function square(num){
    return num*num
    console.log("finished")
}
let squarel=square(5)
console.log(squarel)

function test(){
    return "hello";
    console.log("this code wil never executes")
}
let test1=test();
console.log(test1)

//variable scopes
let college="CITY"
function showCollaege(){
    console.log(college)
}
showCollaege();

//Local variable
function showAge(){
    let age=20;
    console.log(age);
}
showAge();

//Hoisting:
//Js moves declarations to the top
//before the execution
//name1()
//console.log(name1)

//name1="venkatesh";
//HOw js sees exactly:
//var name;
//console.log(name1);
//name1="venkatesh"
//console.log(age1)

//let age1=20;

//Hoisting with const
//console.log(city)
//const city="KMM"


//hoisting with functions
//greeting1()
//function greeting(){
  //  console.log("hello")
//}
//functions are completly hoisted
//function expression:
//store inside a variable
//let result1=greeting1()

//let display=function(){
 //   console.log("HEllo Students")
//}
//calling the variable
//display()
//hoisting with function expression
//test2()

//let test2=function(){
 //   console.log("hi")
//}
//Example 2
let calculate_area = function(length, width) {
    return length * width;
}

console.log(calculate_area(3,5));
//create a function that returns largest of two numbers
//create a function expression to clacualte area of circle

//Arrays:collection of elements of (similar dt)
//single variable
//student="poorvansh"
//student1,student2,student3.......n
//arr=["poorvansh",3.14,true]

//let newArray=[Value1,Value2,Value3]
let arr=["Apple","Banana","Custard",3.14,true]
       //   0        1        2      
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

let numbers=[10,20,30,40]
console.log(numbers[numbers.length-1])
//return length
console.log(numbers.length)

//modity the element
numbers[0]=9
console.log(numbers)

//Traversing
//for i in list:
//print(i)
//Traversal:visiting each and every element

let fruits=["apple","banana","orange"]
//Using for loop
for(i=0;i<fruits.length;i++){
    console.log(fruits[i])
}


//for  ....of loop
for(let fruit of fruits){
    console.log(fruit)
    //fruit is storing yhe current element
    console.log(fruit)


}
//create sum array
//let arr=[10,20,30,40]
//let total=0
//for(i=0;i<arr.length;i++){
  //  total+=num[i]
//}
//console.log(arr)

//find largest element
arr=[10,50,60,80,90]
let largest=arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
}
console.log(largest)
//push--adding element
arr.push(5)
console.log(arr)

//multiple push at a time
arr.push(10,40)
console.log(arr)

//remove the last element 
arr.pop()
console.log(arr)

//restore the rem0ved element
let removed=arr.pop();
console.log(removed)
//remove the first element

//remove the first element
let firstremoved=arr.shift();
console.log(firstremoved);

//add element at the beginning
arr.unshift(10);
console.log(arr);

//python--slicing
//arr[start:end:step]
//splice()--js
//used for--1.adding,
//2.del, 3.replacing elements

//Syntax:
//Array.splice(startIndex,delete_index,new_value)

let veggies=["carrot","beans","potato"]
veggies.splice(1,1)
//1-->startindex
//1-->deleteindex
console.log(veggies)
//adding element
veggies.splice(1,0,"bitter gaurd")
console.log(veggies)

//replacing element
veggies.splice(1,1,"bottele gaurd")
console.log(veggies)


//slice-->creates a copy of a portion of array
//array.slice(start,end)

let nums=[10,20,30,40,50]

let result1=nums.slice(0,3)
console.log(result1)


//Task:arr=[10,20,30,40,50,60]
//create a new array containing element
//from index 2-4

//string is a sequence of charecters
//closed '',"",``

//let name="venkatesh";
//let name1='venkatesh';
//let name2=`venkatesh`;

//indexing in string:
let str="hello"
    //   01234

console.log(str[0])  
console.log(str[1])  
console.log(str[2]) 
console.log(str[3])  
console.log(str[4])       
//string length
console.log(str.length)
str[0]="m";
console.log(str)

//Traverse over the string
for(i=0;i<str.length;i++){
    console.log(str[i])
}
//for..of
for(let ch of str){
    console.log(ch);

}

//string methopds
let firstName="poorvansh"
console.log(firstName.toUpperCase());

console.log(firstName.toUpperCase());
let hello="Bye";
console.log(hello.trim());


//includes
let course="JavaScript";
console.log(course.includes("Script"))

//startwith
console.log(firstName.startsWith("p"))
//endswith
console.log(firstName.endsWith("o"))
//indexOf
console.log(firstName.indexOf("P"))
//lastindexOf
console.log(firstName.lastIndexOf("s"))
//replace()
let str2="I LOVE JAVASCRIPT"
console.log(str2.replace("JAVASCRIPT","python"))
console.log(str2)
//replaceAll
let str3="cat dog cat"
console.log(str3.replaceAll("cat","lion"))
//slice
console.log(course.slice(0,3))

//substring
 let str4="Programming"
console.log(str4.substring(3,8))

//split
let str5="HTML, CSS ,JS ,REACT"
console.log(str5.split(","))
//charAt
console.log(str4.charAt(3))

//concat()
let first="srilatha"
let last="immadi"
console.log(first.concat(" ",last));
//object:collection of key:value
let student={
    //complex nested object
    personal:{
    name:"poorvansh",
    rollno:5,
    course:"MERN",
    is_permenent:true,
    greet:function(){
        console.log("welcome")
    },
    //nested object
    address:{
    city:"hyd",
    state:"TG",
    pincode:234567
    }
}
};
console.log(student)
console.log(student.rollno)
console.log(student["course"])
//add a new property:
student.city="KHAMMAM"
console.log(student.city)

//update the value
student.rollno=9;
console.log(student.rollno)
//delete property
delete student.city;
console.log(student)

//Task:create an object
//named:employee
//store the details of employee
//update the salarynto 45000
//remove his city
//write a function expression inside
//the object and call outside
//add birth details in a nested object
let Employee = {
    name:"Saranya",
    id:23245,
    salary:40000,
    city:"HYd"
};
console.log(Employee)
//salary update
Employee.salary = 45000;
console.log(Employee.salary)
//remove city
delete Employee.city;
console.log(Employee)


//Traversing over the objects
let employee={
    name:"venkatesh",
    em_id:12,
    city:"hyd"

};
//for.. in loop
for(let key in employee){
    console.log(key,employee[key])
}
//only keys
console.log(Object.keys(employee))
//only values
console.log(Object.values(employee))
//in a list format
console.log(Object.entries(employee))
//for..of
for(let[key,value]of Object.entries(employee)){
    console.log(key,value);
}
