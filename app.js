




const getColorBtn = document.getElementById('get-color-btn');
const colorDiv = document.getElementById('color-div');
const hexDiv = document.getElementById('hex-div');
const colorSelector = document.getElementById('color-selector');
const typeSelector = document.getElementById('type-selector');
let colorArray = [];
setToZero();




//Eventlisteners

getColorBtn.addEventListener('click', renderColors);


typeSelector.addEventListener('input', getColor);


colorSelector.addEventListener('click', setToZero);




//Functions

function getColor() {
    colorArray = [];
    const color = colorSelector.value.slice(1);
    const type = typeSelector.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${type}`)
        .then((response) => response.json())
        .then((data) => {
            for (let element of data.colors) {
                colorArray.push(element.hex.value);
            }
        });
}



function renderColors() {
    if (typeSelector.value === 'none') {
        alert('Please select the color type!')
    }
    colorDiv.innerHTML = '<div></div>';
    let colorString = '';
    for (let element of colorArray) {
        const hex = element;
        colorString += `<div style=background:${hex} class="special-div"></div>`
    }
    createHexPara();
    colorDiv.innerHTML = colorString;
}




function createHexPara() {
    hexDiv.innerHTML = '';
    for (let element of colorArray) {
        hexDiv.innerHTML += `<p>${element}</p>`
    }
}



function setToZero() {
    typeSelector.value = 'none'
}