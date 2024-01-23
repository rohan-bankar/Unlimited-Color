const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let validId;
const changeColor = function(){
    if(!validId){
        validId = setInterval(changBgColor,1000);
    }

    function changBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function(){
    clearInterval(validId);
    validId = null;
}

document.querySelector('#start').addEventListener('click',changeColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
