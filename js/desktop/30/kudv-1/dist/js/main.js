function addNumbers()
{
    var firstNumber = document.getElementById("txtFirstNumber").value;
    var secondNumber = document.getElementById("txtSecondNumber").value;

    if ((firstNumber == "") || (secondNumber == ""))
    {
        alert("First Number is required");
        return;
    }

    firstNumber = parseFloat(firstNumber);
    if (isNaN(firstNumber))
    {
        alert("Please enter a valid number in the first number textbox");
        return;
    }

    secondNumber = parseFloat(secondNumber);
    if (isNaN(secondNumber))
    {
        alert("Please enter a valid number in the second number textbox");
        return;
    }

    document.getElementById("wynik").value = firstNumber + secondNumber;
}

var x = prompt();
document.write(x);