// function abc(a){
//     console.log(a);
// }
// var textInput = document.getElementById("Inp");

// var arr= [""]


// function addValue(){
//     arr.push(textInput)
//     console.log(arr)
// }



// var textInput = document.getElementById("Inp");
// var errorInput = document.getElementById("error");

// var a= [];


// function addValue(){
// var b = textInput.Value;
// if (b == ""){
//     errorInput.Value = "Enter Value";
// }
// else{
//     a.push(b);
//     console.log(a);
// }
// }  

Text
// var inp = document.getElementById("inp")
// var error = document.getElementById("error")
// var error2 = document.getElementById("error2")
// function submit() {
//     var a = inp.value;
//     if (a == "") {
//         error.value = "Please Enter Text"
//     }
// }

var input = document.getElementById("display");
function getVal(a) {
    input.value += a;
    // console.log(a)
}

function calculate (){
    input.value = eval(input.value)
}

function Clear () {
    input.value = ""
}

 











