

function GenerateCats() {
    cat_number = Math.floor(Math.random() * 10)
    for(let i = 0 ; i <= cat_number; i++) {
        let image = document.createElement('img');
        image.setAttribute('src', 'tenor.gif');
        image.setAttribute('id', 'result')
        document.getElementById('flex-box-result').appendChild(image)
        console.log('test')
    }
}

function RemoveAllCats() {
     let i = document.getElementById('flex-box-result').childElementCount
     for(let m = i; m > 0; m-- ) {
         document.getElementById('result').remove()
     }
}

function RemoveOneCat() {
    document.getElementById('result').remove()
}