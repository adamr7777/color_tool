

//https://www.thecolorapi.com/
//scheme?hex=@&mode=@
//red = #ff0000
//data.colors[0].hex.value
//sugestion: for(let element of data.colors) {const color = element.hex.value}

//`${i}${i}${i}${i}${i}${i}`

const getColorBtn = document.getElementById('get-color-btn');
const colorDiv = document.getElementById('color-div');
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
    //console.log(colorArray);
    //let string = '';
    for (let i=0; i<5; i++) {
        let hex = `${i}`.repeat(6);
        console.log(hex);
        colorDiv.innerHTML+= `<div style=background:#${hex} class="special-div"></div>`
    }
    //console.log(string);
     //= string;
}




