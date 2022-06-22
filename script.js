let first = prompt("Enter first number: ")

let second = prompt("Enter second number: ")

let operation = prompt("Type the opration to undergo: + - * /", []);

if (operation=="+")  {
    alert(`${first}${operation}${second}= ${Number(first)+Number(second)}`)
}else if(operation == "-"){
    alert(`${first}${operation}${second}=${Number(first)-Number(second)}`)
}else if(operation == "*"){
    alert(`${first}${operation}${second}=${Number(first)*Number(second)}`)
}else{
    alert(`${first}${operation}${second}=${Number(first)/Number(second)}`)
}

