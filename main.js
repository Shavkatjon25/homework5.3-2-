let har=document.querySelector(".qosh");
let harf=document.querySelector(".x");
let arr=harf.textContent;
const vaqt=document.querySelector(".min");
let rasm=document.getElementById("ras");
console.log(har.textContent);
let i=0;
let inter=0;
let mar=24;
document.addEventListener("keypress", Event=>{
    if(i==0 && arr[i]==Event.key){
       inter=setInterval(function(){
            vaqt.textContent=+vaqt.textContent+1

        }, 1000)    
    }
    if(arr[i]==Event.key){
        console.log(harf.textContent[i]);
        har.textContent=har.textContent+harf.textContent[i];
        i++
    }else{let p=new Audio; p.src="./808_S.wav"; p.play();}
    if(i==arr.length){
        clearInterval(inter);
        vaqt.textContent= "Siz tugattingiz sarflangan vaqat: "+vaqt.textContent+" sekund :)";
    }
})
alert("salm");
