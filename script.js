let color_pick = document.getElementById("color_pick");
let submit_btn = document.getElementById("submit_btn");
let random_btn = document.getElementById("random_btn")
let message = document.getElementById("message");
submit_btn.addEventListener("click",change_color);
random_btn.addEventListener("click",random_color);
color_pick.addEventListener("keydown",function(event1){
    if(event1.key === "Enter"){
        change_color();
    }
})
function change_color(){
    let changed_color = color_pick.value;
    if(isValidColor(changed_color)){
        document.body.style.backgroundColor=changed_color;
        message.innerText = `Color: ${changed_color} picked!`
    }
    else{
        document.body.style.backgroundColor="white";
        message.innerText = `${changed_color} is not a valid color`;
    }
    color_pick.value = "";
    color_pick.focus();
}
function isValidColor(changed_color){
    let col = new Option().style;
    col.color = changed_color;
    return col.color !== '';
}
function random_color() {
  // Generate a random color
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  // Set it as background
    document.body.style.backgroundColor = randomColor;
    message.innerText = `Color: ${randomColor} picked!`
}
