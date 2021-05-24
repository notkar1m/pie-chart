let lastNum = 0
function addInput(){
    document.getElementById("inputs").innerHTML += `<br><input required class="form-control" type="text" name="${lastNum+1}" placeholder="Title..."><br><br><input required class="form-control" type="number" name="${lastNum+1}-val" placeholder="Value"><hr>`
    lastNum = lastNum + 1
}