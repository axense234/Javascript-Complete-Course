 
function age_in_days() {
    let birthYear = prompt('What year were you born in?');
    let result = (2021 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textanswear = document.createTextNode("You are " + result + ' days old!');
    h1.setAttribute('id', 'result');
    h1.appendChild(textanswear);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(result)
}

function reset() {
    document.getElementById('result').remove()
}