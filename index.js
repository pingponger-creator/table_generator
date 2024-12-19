const max =Math.pow(10, 2);

const output = document.getElementById("output");

const button = document.getElementById("btn")

const reset = document.getElementById("resetBtn")

let initialValue = "";

button.onclick = function getTable(){
    let txt = document.getElementById("txtNumber").value;
    const getNum = Number(txt);

    for(let i=1; i<=max; i++){

        if(getNum===0)
        {
            output.innerHTML = "Error! Invalid input"
        }
        else
        {
            initialValue +=`${getNum} x ${i} = ${getNum * i}<br>`
            output.innerHTML = initialValue;
        }
        }
}

reset.onclick = function(){
    initialValue = ""
    output.innerHTML = initialValue;
    document.getElementById("txtNumber").value = 0;

}
