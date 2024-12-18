const max =Math.pow(10, 3);

const output = document.getElementById("output");

const button = document.getElementById("btn")

const reset = document.getElementById("resetBtn")

let initialValue = "";

button.onclick = function getTable(){
    let txt = document.getElementById("txtNumber").value;
    const getNum = txt;
    for(let i=1; i<=max; i++){
        initialValue +=`${getNum} x ${i} = ${getNum * i}<br>`
    }
    output.innerHTML = initialValue;    
}

reset.onclick = function(){
    initialValue = ""
    output.innerHTML = initialValue;
}
