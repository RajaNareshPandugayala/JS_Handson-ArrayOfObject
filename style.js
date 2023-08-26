// Student records data
let studentRecords = [
    { name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'yaga', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 }
];
document.write("<h3>" + JSON.stringify(`let studentRecords = [    <br>{ name: 'John', id: 123, marks: 98 },    <br>{ name: 'Baba', id: 101, marks: 23 },    <br>{ name: 'yaga', id: 200, marks: 45 },    <br>{ name: 'Wick', id: 115, marks: 75 }];`) + "</h3>");


// Q1: Retrieve student names in uppercase
const studentNamesInCaps = studentRecords.map(student => student.name.toUpperCase());
console.log("Q1:", studentNamesInCaps);
document.write(`<h4>Q1 : "We are interested in retrieving only the students' names; all the names should be in caps.<br>['JOHN', 'BABA', 'YAGA', 'WICK']"<br><i style="color: darkred;">Code : const studentNamesInCaps = studentRecords.map(student => student.name.toUpperCase());<br>console.log("Q1:", studentNamesInCaps);</i><br><i style="color: darkblue;"> Output: ${JSON.stringify(studentNamesInCaps)}</i></h4>`);


// Q2: Students who scored more than 50 marks
const studentsAbove50Marks = studentRecords.filter(student => student.marks > 50);
console.log("Q2:", studentsAbove50Marks);
document.write(`<h4>Q2 : "Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.<br>[{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]"<br><i style="color: darkred;">Code : const studentsAbove50Marks = studentRecords.filter(student => student.marks > 50);<br>console.log("Q2:", studentsAbove50Marks);</i><br><i style="color: darkblue;"> Output: ${JSON.stringify(studentsAbove50Marks)}</i></h4>`);


// Q3: Students with more than 50 marks and ID > 120
const studentsAbove50MarksAndID = studentRecords.filter(student => student.marks > 50 && student.id > 120);
console.log("Q3:", studentsAbove50MarksAndID);
document.write(`<h4>Q3 : Retrieve the details of students who scored more than 50 marks and have IDs greater than 120.<br><i style="color: darkred;">Code : const studentsAbove50MarksAndID = studentRecords.filter(student => student.marks > 50 && student.id > 120);<br>console.log("Q3:", studentsAbove50MarksAndID);</i><br><i style="color: darkblue;"> Output: ${JSON.stringify(studentsAbove50MarksAndID)}</i></h4>`);


// Q4: Total sum of marks
const totalMarks = studentRecords.reduce((total, student) => total + student.marks, 0);
console.log("Q4:", totalMarks);
document.write(`<h4>Q4 : Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.<br><i style="color: darkred;">Code : const totalMarks = studentRecords.reduce((total, student) => total + student.marks, 0);<br>console.log("Q4:", totalMarks);</i><br><i style="color: darkblue;"> Output: ${JSON.stringify(totalMarks)}</i></h4>`);


// Q5: Names of students with more than 50 marks
const studentNamesAbove50Marks = studentsAbove50Marks.map(student => student.name);
console.log("Q5:", studentNamesAbove50Marks);
document.write(`<h4>Q5 : This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.<br><i style="color: darkred;">Code : const studentNamesAbove50Marks = studentsAbove50Marks.map(student => student.name);<br>console.log("Q5:", studentNamesAbove50Marks);</i><br><i style="color: darkblue;"> Output: ${JSON.stringify(studentNamesAbove50Marks)}</i></h4>`);


// Q6: Sum of marks of students with ID > 120
const totalMarksAbove120ID = studentRecords.filter(student => student.id > 120).reduce((total, student) => total + student.marks, 0);
console.log("Q6:", totalMarksAbove120ID);
document.write(`<h4>Q6 : This time we are required to print the sum of marks of the students with id > 120.<br><i style="color: darkred;">Code : const totalMarksAbove120ID = studentRecords.filter(student => student.id > 120).reduce((total, student) => total + student.marks, 0);<br>console.log("Q6:", totalMarksAbove120ID);</i><br><i style="color: darkblue;"> Output: ${JSON.stringify(totalMarksAbove120ID)}</i></h4>`);


// Q7: Total marks after adding grace
const totalMarksWithGrace = studentRecords.map(student => {
    if (student.marks < 50) {
        student.marks += 15;
    }
    return student;
}).filter(student => student.marks > 50).reduce((total, student) => total + student.marks, 0);
console.log("Q7:", totalMarksWithGrace);
document.write(`<h4>Q7 : This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.<br><i style="color: darkred;">Code : const totalMarksWithGrace = studentRecords.map(student => {<br>    if (student.marks < 50) {<br>        student.marks += 15;<br>    }<br>    return student;<br>}).filter(student => student.marks > 50).reduce((total, student) => total + student.marks, 0);<br>console.log("Q7:", totalMarksWithGrace);</i><br><i style="color: darkblue;"> Output: ${JSON.stringify(totalMarksWithGrace)}</i></h4>`);


// Q8: Array of student objects
let studentsArray = [
    { name: 'Alice', class: 'A', rollNo: 101 },
    { name: 'Bob', class: 'B', rollNo: 102 },
    { name: 'Carol', class: 'A', rollNo: 103 },
    { name: 'David', class: 'C', rollNo: 104 },
    { name: 'Eve', class: 'B', rollNo: 105 },
    { name: 'Frank', class: 'C', rollNo: 106 }
];
console.log("Q8:", studentsArray);
document.write(`<h4>Q8 : Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.<br><i style="color: darkred;">Code : let studentsArray = [<br>    { name: 'Alice', class: 'A', rollNo: 101 },<br>    { name: 'Bob', class: 'B', rollNo: 102 },<br>    { name: 'Carol', class: 'A', rollNo: 103 },<br>    { name: 'David', class: 'C', rollNo: 104 },<br>    { name: 'Eve', class: 'B', rollNo: 105 },<br>    { name: 'Frank', class: 'C', rollNo: 106 }<br>];<br>console.log("Q8:", studentsArray);</i><br><i style="color: darkblue;"> Output: ${JSON.stringify(studentsArray)}</i></h4>`);
