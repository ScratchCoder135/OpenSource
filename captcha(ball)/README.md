# Captcha(Ball)
## Please this document before you use this project:

1.`ball.ejs` is for serverside rendering,the bs variable is for you to block any browsers that may occur errors.

```js
res.render("ballcaptcha",{bs:browser==="BadBrowSER"})
```

2.you can either use the css inside `ball.ejs` or download `stylish.css` to use.

3.See `ballcaptcha.js`

```js
...
async function apnd(){


    const data=fetchDataBase()//PLEASE LOOK HERE
    
    
    
    var image=data['img']
    document.getElementById("capt-q").style.backgroundImage="url('"+image+"')"
    document.getElementById("capt-q").style.height="200px"
    gameStart()
}

function gameStart(){
    score=0
    ...
```

the `fetchDataBase()` function is broke,please make one use your own database instead.

Tip：
- You should make json data for this script,including a field called `"promise"`


4.See `block.js`

This is the serverside code.
