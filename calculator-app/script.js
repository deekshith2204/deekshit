function calculate()
{
    const number1=Number(document.getElementById("number1").value);
    const number2=Number(document.getElementById("number2").value);
    const sum =number1 + number2;
    document.getElementById("result").textContent=
    "result:" + sum;
}