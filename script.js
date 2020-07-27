// Generating Random 4 digit pin numbers
    function pinGenerator(){
    var number = (Math.floor(1000 + Math.random() * 9000));
    document.getElementById("generate-input").value=number;
}

// Normal Keyword buttons value added on submit input 
function number(num) {
    document.getElementById("display-number").value= document.getElementById("display-number").value+num;
}

// Backspace button works
function backSpace(){
    var clearBack = document.getElementById("display-number").value;
    document.getElementById("display-number").value = clearBack.substring(0,clearBack.length - 1);
}

// Clear button works
function clearAllNumber(){
    document.getElementById("display-number").value = "";
}

// Submit button works
function testing(){
    var randomNumber = document.getElementById("generate-input").value;
    var submitNumber = document.getElementById("display-number").value;

    if (randomNumber == "" || submitNumber == "") {
        alert("Please fist generate the pin & then input the pin on the submit section");
    } else if (randomNumber == submitNumber) {
        document.getElementById("right-pin").style.display="block";
        document.getElementById("open-door").style.display="block";
        document.getElementById("pin-section").style.display="none";
        document.getElementById("wrong-pin").style.display="none";
    } else {
        document.getElementById("wrong-pin").style.display="block";
        document.getElementById("close-door").style.display="block";
        document.getElementById("pin-section").style.display="none";
        document.getElementById("right-pin").style.display="none";
    }   
}
