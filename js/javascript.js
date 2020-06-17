//set the pics with random
var one="",two="";
var Box=document.getElementById('imgs');
let randWordNum=Math.floor( Math.random()*10);
var c=0;
while(c<20)
{
    var DivImg=document.createElement('div');
    DivImg.setAttribute('class','img');
    var imgRand=document.createElement('img'),imgQ=document.createElement('img');
    imgQ.setAttribute('src','images/q.png');
    randWordNum=Math.floor( Math.random()*10);
    while(one.indexOf(randWordNum)>-1&&two.indexOf(randWordNum)>-1) //exist in one and two
    {
        randWordNum=Math.floor( Math.random()*10);
    }
    imgRand.setAttribute('src','images/'+randWordNum+'.png');
    
    imgRand.setAttribute('class','hide');
    if(one.indexOf(randWordNum)==-1)
        one+=randWordNum;
    else if(two.indexOf(randWordNum)==-1)
        two+=randWordNum;
    
    DivImg.appendChild(imgRand);
    DivImg.appendChild(imgQ);
    DivImg.classList.add(randWordNum);
    Box.appendChild(DivImg);
    c++;
}


function playAudio(url) {
    new Audio(url).play();
}
var win=document.getElementById('win'),
    body=document.getElementById('body');
function WIN()
{
    win.classList.remove('hide');
    body.classList.add('game-over');
    W=true;
}
//make the logic
var numWrong=document.getElementById('wrong');
var dosa=0,currentImg=-1,ok=0;
var arrDivBox=Array.from(document.querySelectorAll('.imgs .img'));
var clickNot=true;
for(var i=0;i<arrDivBox.length;i++)
{
    arrDivBox[i].onclick=function()
    {
        if(clickNot&&!this.classList.contains('clicked'))//for not clicked when wrong
        {
            if(dosa==0)
            {
                
                this.children[0].classList.remove('hide');
                this.children[1].classList.add('hide');
                this.children[0].parentElement.classList.add('click');
                currentImg=this;
                dosa++;
            }
            else if(dosa==1)
            {
                
                this.children[0].classList.remove('hide');
                this.children[1].classList.add('hide');
                this.children[0].parentElement.classList.add('click');
                if(this.classList[1]==currentImg.classList[1]&&this!=currentImg)//write
                    {   
                        ok++;
                        this.classList.add('clicked');
                        currentImg.classList.add('clicked');
                        playAudio('audio/sc.wav');
                    }
                else
                {
                    playAudio('audio/fail.mp3');
                    var e=this;
                    clickNot=0;
                    numWrong.textContent=parseInt(numWrong.textContent)+1;
                    setTimeout(function(){
                    e.children[0].parentElement.classList.remove('click');
                    currentImg.children[0].parentElement.classList.remove('click');
                    e.children[0].classList.add('hide');
                    e.children[1].classList.remove('hide');
                    currentImg.children[0].classList.add('hide');
                    currentImg.children[1].classList.remove('hide');
                    clickNot=1;
                    },500);
                    
                }
                dosa=0;
            }
            if(ok==10)
            {
                WIN();
                dosa=-1;
            }
        }
    }
}
//WIN();
var tryAgian1=document.getElementById('try1');
function Resset()
{
    location.reload();
}
tryAgian1.onclick=Resset;
