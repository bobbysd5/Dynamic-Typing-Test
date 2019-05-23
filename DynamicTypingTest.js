const wording = ["Do you like JavaScript as much as I do?", "Hope you are having fun this is a simple game you can make.", "Source code is included so you can create your own version of this challenge."];
const button = document.querySelector("button");
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
let startTime, endTime;

button.addEventListener("click", function (){
    if (this.innerText == "Start"){
        playText.disabled = false;
      
        playGame();
    }
    else if (this.innerText == "Done"){
        playText.disabled = true;
        button.innerText = "Start";
        endGame ();
    }

})

function endGame() {
    let date = new Date ();
    endTime = date.getTime();
    let totalTime = Math.floor((endTime-startTime)/1000);
    console.log(totalTime);
    let str = playText.value;
    let wordCount = wordCounter(str);
    let speed = Math.round((wordCount/totalTime)*60);
    let finalMessage = `You typed at ${speed} words per minute.`
    finalMessage += "<br>" + compareWords(message.innerText,str);
    message.innerHTML = finalMessage;
}

function wordCounter (numWords){
    let response = numWords.split(" ").length;
    return response;
}

function compareWords(str1, str2){
    let gameOutput = str1.split(" ");
    let playerInput = str2.split(" ");
    let cnt = 0;
    
    gameOutput.forEach(function(item, index){
        if (item == playerInput[index]){
            cnt++;
        }
    })
    return (cnt+ " words out of " + gameOutput.length + " were typed correctly.");
}

function playGame () {
    let randomNumber = Math.floor(Math.random() * wording.length);
    message.innerText = wording[randomNumber];
    let date = new Date()
    startTime = date.getTime();
    button.innerText = "Done";
};