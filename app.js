

//https://www.thecolorapi.com/
//scheme?hex=@&mode=@
//red = #ff0000


const getColorBtn = document.getElementById('get-color-btn');
const colorDiv = document.getElementById('color-div');
const hexDiv = document.getElementById('hex-div');
let colorArray = [];


getColorBtn.addEventListener('click', renderColors);



function getColor() {
    fetch('https://www.thecolorapi.com/scheme?hex=ff0000&mode=analogic')
        .then((response) => response.json())
        .then((data) => {
            for (let element of data.colors) {
                colorArray.push(element.hex.value);
            }
        });
}



function renderColors() {
    getColor();
    for (let i=0; i<6; i++) {
        let hex = `${i}`.repeat(6);
        colorDiv.innerHTML+= `<div style=background:#${hex} class="special-div"></div>`
    }
    createHexPara();
}




function createHexPara() {
    hexDiv.innerHTML = `<p>test</p>`.repeat(6);
}