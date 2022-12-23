

//https://www.thecolorapi.com/
//scheme?hex=@&mode=@
//red = #ff0000
//data.colors[0].hex.value
//sugestion: for(let element of data.colors) {const color = element.hex.value}

const getColorBtn = document.getElementById('get-color-btn');
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
    console.log(colorArray);
}