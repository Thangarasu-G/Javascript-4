

//Array Manipulation Methods
// 1. push()
let fruits = ["Apple","Orange","Mango","Banana","Grapes"];
fruits.push("Pineapple","Papaya","Kiwi");
console.log("Fruits : ",fruits );

// 2. pop()
let number = [13,34,76,84,99,88];
number.pop();
console.log("Numbers :",number);

// 3. shift()
let name = ["Thangarasu","Gowtham","Suriya","Kavipriya","Geetha"];
name.shift();
console.log("Name :",name);

// 4.unshift()
let num = [10,34,66,99];
num.unshift(54,98);
console.log("Num :",num);

// 5.splice()
let arr1 = [10,20,30,40,50];
arr1.splice(1,2);
console.log("Arr1 :",arr1);

// 6.splice()
let arr2 = [1,2,3,4,5];
arr2.splice(2,1,100);
console.log("Arr2: ",arr2);

// 7. fill()
let num1 = [13,54,46,88,8];
num1.fill("Hello",2,4);
console.log("Fill :",num1);

//Array Merge and Search Methods
// 8. concat()
let a = [23,35,76,99];
let b = [87,90,65];
let marge = a.concat(b);
console.log("Concat :",marge);

// 9. slice()
let arr3 = [10,20,30,40,50,60];
let c = arr3.slice(1,4);
console.log("Slice :",c);

// 10. flat(Infinity)
let nested = [1,2,[3,4,[5,6,[7]]]];
console.log("flat :",nested.flat(Infinity));

// 11. includes()
let arr4 = [10,20,30,40,50];
console.log("Includes : ",arr4.includes(30));

// 12. indexOf()
let arr5 = [5, 10, 15, 20, 25];
console.log("IndexOf : ",arr5.indexOf(20));

// 13. lastIndexOf()
let arr6 = [1, 2, 3, 2, 1, 2];
console.log("LastIndexOf : ",arr6.lastIndexOf(2));

// 14. sort()
let arr7 = [50,60,30,20,10,40];
console.log("Sort : ",arr7.sort());

// 15. reverse()
let arr8 = [10,20,30,40,50,60,70,80];
arr8.reverse();
console.log("Reverse :",arr8);

//Spread and Rest Operators
// 16. Spread operator - Merge arrays
let d = [23,35,76,99];
let e = [87,90,65,70];
let result = [...d, ...e];
console.log("Result :",result);

// 17. Merge objects using spread
let studentDetails = {
    name : "Thangarasu G",
    age : 25,
    course : "Javascript"
};
let jobDetails = {
    role : "java developer",
    salary : 35000
};
let details = {...studentDetails, ...jobDetails};
console.log("Details : ",details);

// 18. Rest operator
function display(f,g,...remaining) {
    console.log("F :",f);
    console.log("G :",g);
    console.log("Remaining :",remaining);
}
display(10,20,30,40,50,60);

// 19. Sum using rest operator
function one(h,i, ...j) {
    console.log("Result :", h+i+j[0]+j[1]);
}
one(10,20,30,40);

// 20. Copy an array using spread
let original = [23,74,98,400,87];
let copy = [...original];
console.log("Copy : ",copy);

//Array Destructuring
// 21. Array destructuring
let arr9 = [10, 20, 30, 40];
let [k,l,m,n] = arr9;
console.log("Result :", k, l, m, n);

// 22. Nested array destructuring
let nested1 = [1, 2, [3, 4, [5, 6]]];
let [o1,o2,[o3,o4,[o5,o6]]] = nested1;
console.log("Nested :", o1,o2,o3,o4,o5,o6);

// 23. Student details
let studentInfo = ["Thangarasu G", 25, 8.7];
let [studentName, age, cgpa] = studentInfo;
console.log("Student Name :",studentName);
console.log("Student Age :", age);
console.log("CGPA :", cgpa);

//Object Destructuring
// 24. Object destructuring
let person = {
    name1 : "Gowtham",
    role1 : "Java Developer",
    location1 : "Chennai"
};
let {name1, role1, location1} = person;
console.log("Name :", name1);
console.log("Role :", role1);
console.log("Location :", location1);

// 25. Nested object destructuring
let person1 = {
    name2 : "Suriya",
    role2 : "Tester",
    location2 : {
        city: "Rasipuram",
        state: "Tamil Nadu"
    }
};
let {name2, role2, location2 :{city, state}} = person1;

console.log("City :", city);
console.log("State :", state);

// 26. Rename properties during destructuring
let employee = {
    name3 : "Thangarasu G",
    role3 : "Java Developer",
    location3 : {
        mainlocation : "Salem",
        currentlocation : "Bengaluru"
    }
};
let {name3, role3, location3 :{mainlocation, currentlocation}} = employee;

console.log("Employee Name :", name3);
console.log("Employee Role :", role3);
console.log("Main Location :", mainlocation);
console.log("Current Location :", currentlocation);

// 27. Remove first and last, add two at beginning
let arr10 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

arr10.shift();
arr10.pop();
arr10.unshift(5,10);
console.log("Result :", arr10);

// 28. Duplicate numbers with search methods
let arr11 = [10, 20, 30, 20, 40, 20, 50];
let selected = 20;

console.log("Exists:", arr11.includes(selected));
console.log("First index:", arr11.indexOf(selected));
console.log("Last index:", arr11.lastIndexOf(selected));

// 29. Merge employee objects and destructure
let employee1 = {
    name4 : "Kavi Priya",
    age1 : 23
};
let employee2 = {
    role4 : "Developer",
    salary1 : 35000
};
let add = {...employee1, ...employee2};

let {name4 : empname, role4 : emprole} = add;

console.log("Name :", empname);
console.log("Role :", emprole);

// 30. Flatten and reverse
let nested2 = [1, [2, 3], [4, [5, 6]], 7];

let finalArray = nested2.flat(Infinity);
let finalArray1 = finalArray.reverse();
console.log("Final Array :", finalArray1);
