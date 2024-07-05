//Question 2
//write a code which can give grade to 
// students accroding to thier scores:
// 90-100,A
// 70-89,B
// 60-69,C
//50-59,D
//0-49,F

let score = prompt("enter your marks (0-100):");
let grade;

if(score >= 90 && score <= 100) {
    grade = "A";
} else if(score >= 70 && score <= 89) {
    grade = "B";
} else if(score >= 60 && score <= 69) {
    grade = "c";
} else if(score >= 50 && score <= 59) {
    grade = "d";
} else if (score >= 0 && score <= 49) {
   grade = "f";
}
console.log("Accroding to your score your grade was: ". grade)