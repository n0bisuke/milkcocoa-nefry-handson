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
 * step2で以下を追加 + step4で変更
 */
//Milkcocoaのドット絵 https://mlkcca.com/sample.html との接続
//ドット絵側のアプリ&データストア
let milkcocoa = new MilkCocoa(`dogi9jz8c16.mlkcca.com`);
const dot_ds = milkcocoa.dataStore('dots');
//Nefry側のアプリ&データストア
milkcocoa = new MilkCocoa(`woodilrg1cz3.mlkcca.com`);
const nefry_ds = milkcocoa.dataStore('nefry');

let flag = 0, red = 0, green = 0, blue = 0;
dot_ds.on('push',(pushed) => {
    //ドット絵から送られてくるカラーコードをRGBに変換
    let color = pushed.value.color;
    red = parseInt(color.substr(1,2), 16);
    green = parseInt(color.substr(3,2), 16);
    blue = parseInt(color.substr(5,2), 16);

    addClass(color);
    flag = 1;

    //ドット絵から受け取ったデータをNefryに流す
    nefry_ds.send({r:red,g:green,b:blue},(err,pushed) => {
        console.log(pushed);
    });
});

setInterval(()=>{
    removeClass();
    flag = 0;
},5000);