let userscore=0;
let compscore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const gencompChoice=()=>{
    const options=["Rock","paper","scissors"];
    const radidx=Math.floor(Math.random()*3);
    return options[radidx];
};

const drawGame=()=>{
    msg.innerText="game was draw. play again.";
    msg.style.backgroundColor="#081b31";
    
};

const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText=`you win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorePara.innerText=compscore;
        msg.innerText=`you lost.${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userchoice)=>{
    const compChoice=gencompChoice();

    if(userchoice==compChoice){
        drawGame();
    }else{
        let userwin=true;
        if(userchoice=="Rock"){
            userwin= compChoice==="paper"?false:true; 
        }else if(userchoice=="paper"){
            userwin= compChoice==="scissors"?false:true;
        }else if(userchoice=="scissors"){
            userwin= compChoice==="Rock"?false:true;
        }
        showWinner(userwin,userchoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice)
    });
});