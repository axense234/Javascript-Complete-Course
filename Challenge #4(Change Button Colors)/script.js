var allButtons = document.getElementsByTagName('button')
console.log(allButtons)

var CopyAllButtons = [];
for(let i = 0; i < allButtons.length; i++)[
    CopyAllButtons.push(allButtons[i])
]

console.log(CopyAllButtons)


function buttonColorChange(buttonThingy) {
    if(buttonThingy.value === 'red') {
        buttonsRed();
    } else if(buttonThingy.value === 'green') {
        buttonsGreen();
    } else if(buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if(buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add('btn-danger')
    }
}



function buttonsGreen() {
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add('btn-success')
    }
}


function buttonColorReset() {
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add(CopyAllButtons[i])

    }
}


function randomColors() {
    var choices=['btn-primary', 'btn-danger', 'btn-success','btn-warning']
    for(let i = 0; i < allButtons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4)
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add(choices[randomNumber])
    }

}