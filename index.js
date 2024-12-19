const max =Math.pow(10, 2);

const output = document.getElementById("output");

const button = document.getElementById("btn")

const reset = document.getElementById("resetBtn")


button.onclick = function getTable(){
    debugger;
    let txt = document.getElementById("txtNumber").value;
    let getNum = Number(txt);

    
    initialValue = ""; //reset the value of initial value to  empty string. 
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
