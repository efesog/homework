const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "blue", "green", "pink", "tomato", "#58f474"];

let sira = 0;
button.addEventListener("click", changeBackground);
function changeBackground (){
    if(sira == 6) sira = 0
    const secilenRenk = colors[sira];
    sira++;
    body.style.backgroundColor = secilenRenk;
}