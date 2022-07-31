const colorBtn = document.getElementById('color')
const eraseBtn = document.getElementById('erase')
const clearBtn = document.getElementById('clear')
const gridCont = document.getElementById('grid')
let  mode = 'black'
// creates grid on pageload
function makeGrid() {
    for (i=0; i<1600; i++) {
        let gridSquare = document.createElement('div')
        gridCont.appendChild(gridSquare)
        gridSquare.classList.add('gridSquare')
    }
    var gridBlock = gridCont.querySelectorAll('div')
    gridBlock.forEach(gridBlock => gridBlock.addEventListener('mouseover', colorGrid))
}


window.onload = makeGrid()
//

function colorGrid() {
    var gridBlock = gridCont.querySelectorAll('div')
    gridBlock.forEach(gridBlock => {
        if (mode === 'black') {
            this.style.backgroundColor = 'black'
        }
        else if (mode === 'erase') {
            this.style.backgroundColor = 'white'
        }
        else if (mode === 'clear') {
                
        }
       
    })
}

colorBtn.addEventListener('click', () => {
    mode = 'black'
    
})

eraseBtn.addEventListener('click', () => {
    mode = 'erase'
})

clearBtn.addEventListener('click', () => {
    var gridBlock = gridCont.querySelectorAll('div').forEach(gridBlock => gridBlock.style.backgroundColor = 'white')
})

