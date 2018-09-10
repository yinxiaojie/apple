window.onload=function () {
    let icon=document.querySelector(".icon-yunsuan-dengyu");
    let screen=document.querySelector(".screen");
    let screenTop=document.querySelector(".screen-top");
    let symbol=document.querySelector(".symbol");
    let symbol1=document.querySelector(".symbol .symbol1");
    console.log(screenTop);
    icon.onclick=function () {
        screen.style.height="615px";
    };
    symbol1.onclick=function () {
        screen.style.height="0";
    }
};