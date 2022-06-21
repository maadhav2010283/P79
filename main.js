var student_names = []

function sorting(){

student_names.sort();

document.getElementById("names").innerHTML = student_names

} 
function submitting(){

var  name1 = document.getElementById("input_1").value
var  name2 = document.getElementById("input_2").value
var  name3 = document.getElementById("input_3").value
var  name4 = document.getElementById("input_4").value

student_names.push(name1)
student_names.push(name2)
student_names.push(name3)
student_names.push(name4)

document.getElementById("names").innerHTML = student_names

document.getElementById("sort").style.display = "inline-block"

document.getElementById("submit").style.display = "none"


}

