const computerChoiceDisplay=document.getElementById("computer-choice")
const userChoiceDisplay=document.getElementById("user-choice")
const resultDisplay=document.getElementById("result")
const possibleChoices=document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice()
{
    const randomNumber=Math.floor(Math.random()*3)+1
    if(randomNumber===1)
    {
        computerChoice='rock'
    }
    if(randomNumber===2)
    {
        computerChoice='paper'
    }
    if(randomNumber===3)
    {
        computerChoice='scissors'
    }
    computerChoiceDisplay.innerHTML=computerChoice
}
function getResult()
{
    if(computerChoice===userChoice)
    {
        result="it's draw"
    }
    if(userChoice==='rock' && computerChoice=='paper')
    {
        result="you lose"
    }
    if(userChoice==='rock' && computerChoice=='scissors')
    {
        result="you win"
    }
    if(userChoice==='paper' && computerChoice=='rock')
    {
        result="you win"
    }
    if(userChoice==='paper' && computerChoice=='scissors')
    {
        result="you lose"
    }
    if(userChoice==='scissors' && computerChoice=='rock')
    {
        result="you lose"
    }
    if(userChoice==='scissors' && computerChoice=='paper')
    {
        result="you win"
    }
    resultDisplay.innerHTML=result
}

