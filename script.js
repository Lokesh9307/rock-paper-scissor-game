let userScore =0;
let compScore =0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userSelect = document.querySelector('#UserSelect');
const CompSelect = document.querySelector('#compSelect');
const loseImg =  document.querySelector('#loseImg');
const winImg =  document.querySelector('#winImg');
const userScorepara = document.querySelector("#user-score") ;
const compScorepara = document.querySelector("#comp-score") ;

const drawGame = ()=>{
    console.log("draw game");
    msg.innerText = "Match Draw";
    msg.style.backgroundColor = 'gray';
    // msg.style.color = 'black';
}

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win");
        msg.innerText = "You Win";
        msg.style.backgroundColor = 'green';
        winImg.style.visibility = 'visible'; 
        setTimeout(()=>{
            winImg.style.visibility = 'hidden'; 
        },2000)     
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("you loose")
        msg.innerText = "You Lose";
        msg.style.backgroundColor = 'red';
        loseImg.style.visibility = 'visible';
        setTimeout(()=>{
            loseImg.style.visibility = 'hidden'; 
        },2000) 
        
    }
}

const genCompChoice = (compChoice)=>{
    const options = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}
const playGame = (userChoice)=>{
    console.log("user choice",userChoice);
    userSelect.innerText = userChoice;
    //Generate computer choice
    const compChoice = genCompChoice();
    CompSelect.innerText = compChoice;
    console.log("comp choice",compChoice);


    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            // scisssor,paper
            userWin = compChoice==='paper'?false : true;
        }else if(userChoice==='paper'){
            // rock,scissor
            userWin = compChoice === 'scissor'?false:true;
        }else{
            // rock,paper
            userWin = compChoice === 'rock'?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})