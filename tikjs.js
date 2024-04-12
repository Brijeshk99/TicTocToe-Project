let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    ];
    const resetGame=() =>{
        turno=true;
        enableBoxes();
        msgcontainer.classList.add("hide");
    };

    boxes.forEach((box) =>{
box.addEventListener("click",() =>{
    console.log("click box");
   if(turno){
    box.innerText="o";
    turno=false;
   }
   else{
    box.innerText="x";
    turno=true;
   }
   box.disabled=true;
   checkWinner();
});

});
const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner) =>{
    msg.innerText='Congratulations, Winner is ${winner}';
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=() =>{
   for(pattern of winpatterns){
    let pas1val=boxes[pattern[0]].innerText;
    let pas2val=boxes[pattern[1]].innerText;
    let pas3val=boxes[pattern[2]].innerText;

    if( pas1val !="" && pas2val !="" && pas3val != ""){
        if(pas1val===pas2val && pas2val=== pas3val){
            console.log("winner" ,pas1val);
            showWinner(pas1val);
        }
    }
   }
};
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);