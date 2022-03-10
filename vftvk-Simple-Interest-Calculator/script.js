function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = interest;
    document.getElementById("result").innerHTML="If you deposit <mark>$" + principal + "</mark>, at an interest rate of <mark>"+ rate + 
        "%</mark>. You will receive an amount of <mark>$" + amount + "</mark>, in the year <mark>" + year + "</mark>.";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function validateAmount() {
    var principal = document.getElementById("principal").value;
    var positive = parseInt(principal) > 1;
    if (!positive) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
}
}