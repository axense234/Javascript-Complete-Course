// Rock Paper Scissors Game
function rpsGame(yourChoice){
    console.log(yourChoice);

    var humanChoice, botChoice;
    humanChoice = yourChoice.id
    botChoice = numberToChoice(randToRpsInt())
    console.log('Computer choice: ' + botChoice + '!')
    results = decideWinner(humanChoice, botChoice); // [0,1] -human lost,bot lost
    console.log(results)
    message = finalMessage(results)
    console.log(message)
    rpsFrontEnd(humanChoice, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3)
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number]

}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0},
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0) {
        return {'message': 'You lost!', 'color':'red'}
    } else if(yourScore === 0.5){
        return {'message': 'Tie!', 'color':'yellow'}
    } else {
        return {'message': 'You won!', 'color':'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDataBase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }


    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();



    // Creating Divs with their corespondive id's
    let humanDiv = document.createElement('div');
    humanDiv.setAttribute('id', 'first')
    let botDiv = document.createElement('div');
    botDiv.setAttribute('id', 'last')
    let messageDiv = document.createElement('div');


    //Human Div Image Attributes
    let humanDivImage = document.createElement('img');
    humanDivImage.setAttribute('src', imagesDataBase[humanImageChoice])
    humanDivImage.setAttribute('id', 'humanDivImageCSS')

    //Bot Div Image Attributes
    let botDivImage = document.createElement('img');
    botDivImage.setAttribute('src', imagesDataBase[botImageChoice])
    botDivImage.setAttribute('id', 'botDivImageCSS')



    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"

    // Loading
    document.getElementById('flex-box-container-rps').appendChild(humanDiv);
    document.getElementById('first').appendChild(humanDivImage)
    document.getElementById('flex-box-container-rps').appendChild(messageDiv);
    document.getElementById('flex-box-container-rps').appendChild(botDiv);
    document.getElementById('last').appendChild(botDivImage)
    
}