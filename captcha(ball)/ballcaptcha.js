var d=document
var score
var rnd
var t
const filter=["invert(50%) sepia(73%) saturate(4396%) hue-rotate(333deg) brightness(107%) contrast(97%)","invert(97%) sepia(78%) saturate(4335%) hue-rotate(167deg) brightness(107%) contrast(92%)","invert(34%) sepia(65%) saturate(3360%) hue-rotate(247deg) brightness(102%) contrast(98%)","invert(71%) sepia(67%) saturate(3274%) hue-rotate(263deg) brightness(91%) contrast(84%)","invert(84%) sepia(94%) saturate(4384%) hue-rotate(343deg) brightness(112%) contrast(97%)"]

    var body=document.getElementsByTagName("body")[0]
var css=document.createElement("link")
css.rel="stylesheet"
css.href="/captpa.css"
body.appendChild(css)
d.getElementById("err").style.display="none"
document.getElementById("captcha-window").style.display="none"
d.getElementById("checkbox").onclick=setup

function setup(){
    d.getElementById("captcha-window").style.display=""
    d.getElementById("err").style.display="none"
    d.getElementById("operate").onclick=apnd
    d.getElementById("captchaprev").style.display="none"
    apnd()
}

async function apnd(){
    const data=fetchDataBase()
    var image=data['img']
    document.getElementById("capt-q").style.backgroundImage="url('"+image+"')"
    document.getElementById("capt-q").style.height="200px"
    gameStart()
}

function gameStart(){
    score=0
    d.getElementById("capt-q").innerHTML=""
    rnd=Math.floor(Math.random()*5)+10
    for(var i=1;i<rnd;i++){
        var filt=filter[Math.floor(Math.random()*5)]
        var b=d.getElementById("capt-q")
        var img=d.createElement("div")
        img.style.backgroundImage="url(/ball.svg)"
        var nos=Math.floor(Math.random()*25)+25
        const ne=String(nos)+"px"
        img.style.height=ne
        img.style.width=ne
        const nsf=nos-5
        img.style.filter=filt
        img.style.backgroundSize=nos+"px"+" "+nsf+"px"
        img.style.backgroundPosition="center"
        img.style.backgroundRepeat="no-repeat"
        img.style.zIndex="99"
        img.style.userSelect="none"
        img.style.position="absolute"
        img.style.left=Math.random()*246+20+"px"
        img.style.top=Math.random()*110+70+"px"
        setprop(img,i)
        img.id="ball-"+i
        b.appendChild(img)
    }
    t=setTimeout(errormsg,30000)
}
function setprop(a,k){
    a.onclick=function(){
        success(k)
    }
}
async function success(s){
    d.getElementById("ball-"+s).remove()
    score+=1
    if(score===rnd-1){
        var input=fetchDataBase()
        document.getElementById("cap").value=input["promise"]
        d.getElementById("capt-q").remove()
        d.getElementById("operate").remove()
        d.getElementsByClassName("question")[0].style.border="none"
        document.getElementById("tle").style="background:#08FF00;"
        document.getElementById("tle").innerHTML="Success"
        c()
    }
}
function errormsg(){
    d.getElementById("captchaprev").style.display="none"
    d.getElementById("captcha-window").style.display="none"
    d.getElementById("err").style.display=""
    c()
}
function c(){
    clearTimeout(t)
}
