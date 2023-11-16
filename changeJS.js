


var changeBGColor = document.getElementById("inner-div");
var changeColorBtn = document.getElementById("btn-change-color");
var changeShapeBtn = document.getElementById("btn-change-Shape");
console.log(changeColorBtn);
function changeColorOnClick(){

    changeBGColor.style.backgroundColor = "green";
}

function changeShapeOnClick(){
    var changeShape = document.getElementById("change-shape");
//   (changeShape.className === "change-triangle") ? changeShape.className ="change-triangle" : changeShape.className = "change-before";
       changeShape.className = "change-triangle";
}
changeColorBtn.addEventListener('click', changeColorOnClick);
changeShapeBtn.addEventListener('click', changeShapeOnClick );
  
