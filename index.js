let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
 let turnO = true;
 const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
]; 

const resetGame = ()=>{
  turnO=true;
  enalbeBoxes();
  msgContainer.classList.add("hide");

}
boxes.forEach((box) =>{
  box.addEventListener("click",() =>{
    if(turnO){
      box.innerText ="O";
      turnO = false;
    }else{
      box.innerText ="X";
      turnO = true;
    }
    turnO.disable = true;
    checkWinner();
  });
});
const disableboxes = ( )=>{
  for (let box of boxes){
    box.disable - true;
  }
};
const enalbeBoxes = ( )=>{
  for (let box of boxes){
    box.disable - flase;
    box.innerText = "";
  }
}
const showWinner =(Winner) =>{
  msg.innerText = `congratulation, Winner is ${Winner}`;
  msgContainer.classList.remove("hide");
}
const checkWinner = ()=>{
  for (let pattern of winPatterns){
let pos1val = boxes[pattern[0]].innerText;
let pos2val =boxes[pattern[1]].innerText;
let pos3val = boxes[pattern[2]].innerText;

if(pos1val != "" && pos2val != "" && pos3val !=""){
  if(pos1val === pos2val && pos2val===pos3val);{
  console.log("winner");
  showWinner(pos1val);
}
  }
}
};

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
