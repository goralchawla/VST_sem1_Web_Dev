//printing
// console.log("hellooooo");

//datatypes
// Number
// String
// Boolean
// null
// undefined
// BigInt
// Symbol


//declaration of variable
// var , let , const
//by default value of a variable   --> undefined
// just adding a and printing it gives an error of variable not defined


// var a      //-->declaring
// var a=5    //-->assigning
// var a=20    //--> can be redeclared only if var is used

// let b=10
// let b=30   //--> not allowed of redeclaration
// b=30     //--> reassigning is possible

// const c=10
// const c=30    //--> not allowed to redeclare
// c=80   //--> not allowed to reassign



// console.log(a);
// console.log(typeof(a));
// console.log(c);


//console.log(5==5);
//console.log(5=='5');    //== does not checks their datatypes but it only checks their values
//console.log(5==='5');    // === checks both their values and datatypes
//console.log(5+5);
//console.log("5"+5);      // concats string to number so output is a string.  --> number to string
//console.log("5"-5);      // it converts the string value to number.        --> string to number
// console.log(undefined+undefined);      
// console.log("hello"-5);
// console.log(true+1);
// console.log(true-1);





// if(true){
//     console.log("hellooooo");
    
// }else if(true){
//     console.log("hiiiiiiiiiiii");
    
// }else{
//     console.log("hieeeee");
// }





//To take input we use prompt
// let a=prompt();
// console.log(a);





// let marks=prompt("Enter your marks")
// let a=prompt("Enter Your Attendance")
// if(marks>80 && a>80){
//     console.log("A");  
// }else if(marks>70 && a>70){
//     console.log("B");
// }else if(marks>60 && a>60){
//     console.log("C");
// }else if(marks>50 && a>50){
//     console.log("D");
// }else if(marks>40 && a>40){
//     console.log("E");
// }else{
//     console.log("FAIL");
// }





//ternary operator
// let a=10
// console.log((a>7)?"hellooooo":"hiiiiiiii");









//Arrays
// let arr=["om","jain",5]
// console.log(arr);

//--->indexing
// console.log(arr[0]);
// console.log(arr[arr.length-1]);



// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);   
// }










//primitve v/s non primitive------>

//1.Array: --> square brackets
// let arr=[1,2,"hello"]

// let a=[]
// let b=[]
// console.log(a==b);        //false-->different addresses

//indexing is same as java







//2.Object: -->curly braces.  -->key value pair.       -->kind of dictionary in python       -->value is always extracted through keys
// let student={
//     name:"Goral",
//     lastname:"chawla",
//     age:18,
// }
// console.log(student.name);        //to access the value in object using it's key








// let arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }



//reducing the arguements inside for loop
//for in loop. --> i is index of array in loop
// for(let i in arr){
//     console.log(arr[i]);
// }



//for of loop. --> i is value of array in loop 
// for(let i of arr){
//     console.log(i);
// }






//even odd
// for(let i of arr){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// for(let i of arr){
//     if(i%2!=0){
//         console.log(i);
//     }
// }





//prime
// let a=prompt()
// let count=0
// for(let i=1;i*i<a;i++){
//     if(i*i==a){
//         count++;
//     }
//     else if(a%i==0){
//         count+=2
//     }
// }
// if(count==2){
//     console.log("prime");
// }else{
//     console.log("not prime");
// }















//null v/s undefined

//undefined
// let a
// console.log(a);
//not defining value in a variable




//nesting array
// let arr=[1,2,3,[5,6]]
// console.log(arr[3][1]);





//nesting object
// let obj={
//     name:"om",
//     details:{
//         age:1
//     }
// }
// console.log(obj.details.age);








// for(let i=1;i<=4;i++){
//     let str=''
//     for(let j=1;j<=i;j++){
//         str=str+'*'
//     }
//     console.log(str);
// }





