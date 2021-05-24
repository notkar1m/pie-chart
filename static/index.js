let lastNum = 0
function addInput(){
    let newBr = document.createElement("br")
    let newInp = document.createElement("input")
    newInp.required = true
    newInp.className = "form-control"
    newInp.name = lastNum + 1
    newInp.placeholder = "Title..."
    let newInp2 = document.createElement("input")
    newInp2.required = true
    newInp2.className = "form-control"
    newInp2.type = "number"
    newInp2.name = lastNum + 1 + "-val"
    newInp2.placeholder = "Value"
    let newHr = document.createElement("hr")
    document.getElementById("inputs").appendChild(newBr)
    document.getElementById("inputs").appendChild(newInp)
    document.getElementById("inputs").appendChild(newBr)
    document.getElementById("inputs").appendChild(document.createElement("br"))
    document.getElementById("inputs").appendChild(newInp2)
    document.getElementById("inputs").appendChild(newHr)
    lastNum = lastNum + 1
}
