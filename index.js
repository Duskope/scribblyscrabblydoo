const colorBtn = document.getElementById('color')
const shadeBtn = document.getElementById('shade')
const eraseBtn = document.getElementById('erase')
const clearBtn = document.getElementById('clear')
const gridCont = document.getElementById('grid')
let currentMode = ''

// creates grid on pageload
function makeGrid() {
    for (i=0; i<1600; i++) {
        let gridSquare = document.createElement('div')
        gridCont.appendChild(gridSquare)
        gridSquare.classList.add('gridSquare')

    }
}


window.onload = makeGrid()
//

colorBtn.addEventListener('click', () => {
    currentMode = 'color'
})

shadeBtn.addEventListener('click', () => {
    currentMode = 'shade'
})

eraseBtn.addEventListener('click', () => {
    currentMode = 'erase'
})

clearBtn.addEventListener('click', () => {
    
})

function play() {
   document.querySelectorAll('.gridSquare').forEach((item) => {
       addEventListener('mouseover', (e) => {
           e.target.style.BackgroundColor = 'black'
       })
   })
}

window.onload = play()