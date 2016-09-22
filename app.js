function toggelClass(){
    $bulb.classList.toggle("light_up");
}

function removeClass(){
    if(flag === 0)return;
    $bulb.style.background = '#bbb';
    $bulb.style.boxShadow = '';
    $bulb.classList.remove("light_up");
}

function addClass(color){
    $bulb.style.background = color;
    $bulb.style.boxShadow = `0 -10px 100px ${color}`;
    $bulb.classList.add("light_up");
}

let $light = document.querySelector('#light');
let $bulb = document.querySelector('.bulb');
$light.addEventListener("click", toggelClass, false);

/**
 * step2で以下を追加
 */
//Milkcocoaのドット絵 https://mlkcca.com/sample.html との接続
const milkcocoa = new MilkCocoa(`dogi9jz8c16.mlkcca.com`);
const dot_ds = milkcocoa.dataStore('dots');

let flag = 0;
dot_ds.on('push',(pushed) => {
    addClass(pushed.value.color);
    flag = 1;
});

setInterval(()=>{
    removeClass();
    flag = 0;
},5000);