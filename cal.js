let but = document.querySelectorAll(".but");
let screen = document.getElementById("screen");

let ans = document.getElementById("ans");
let clear = document.getElementById("clear");

but.forEach(function(button){
  button.onclick = () => {
    screen.innerText += `${button.innerHTML}`;
  }
})
ans.onclick = () => {
  screen.innerText = eval(screen.innerText);
  
}
clear.onclick = () => {
  screen.innerText = "";
}
