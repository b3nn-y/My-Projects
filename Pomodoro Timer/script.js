let a;

function timer(min){
    sec=min*60
    a=setInterval(function(){
        if(sec==0){
            clearTimer()
            return "done"
        }
        else{
            sec--
            console.log(sec)
        }
        timeFormatter(sec)
    },1000)


}

function clearTimer(){
    clearInterval(a)
    console.log("Over")
    timeSwitcher()
}



function timeFormatter(sec){
    minutes=Math.floor(sec/60)
    t=""
    if(minutes<10){
        t+="0"
        t+=minutes
    }
    else{
        t+=minutes
    }
    t+=":"
    seconds=sec-(minutes*60)

    if(seconds<10){
        t+="0"
        t+=seconds
    }
    else{
        t+=seconds
    }
    console.log(t)
    _("clock").textContent=t


}


function startTimer(){
    clearTimer()
    _("m").style.opacity=0;
    pomodoro()
}

function _(id){
    return document.getElementById(id);
}
_("wtVal").textContent= _("wt").value;

function changeVal(sli,h){
    _(h).textContent= _(sli).value;
}

shortB=0
longB=false
work=true
timeRunning=false
function pomodoro(){
    document.getElementsByClassName('f2')[0].style.backgroundImage = "url('https://static.vecteezy.com/system/resources/thumbnails/021/657/604/small/yellow-sun-light-up-free-png.png')";
document.getElementById('f').style.backgroundImage = "url('https://wallpapers.com/images/featured/beach-eoxvk1itsaibfbo1.jpg')";

    console.log("wt")
    _("typeT").textContent="Work Time"
    _("m").style.opacity=0;
    workTime=_("wt").value;
    sBreakTime=_("sb").value;
    lBreakTime=_("lb").value;
    d=timer(workTime)
    // while( d=="done"){
    //     if(shortB<=4){
    //         shortB++
    //         tempD=timer(sBreakTime)
    //         while(tempD=="done"){
    //             pomodoro()
    //         }
    //     }
    //     else{
    //         tempD=timer(lBreakTime)
    //         while(tempD=="done"){
    //             pomodoro()
    //         }
    //     }
    // }


}
sb=true;

function timeSwitcher(){
    if(shortB<4){
        if(sb){
            shortB++
            
            tempD=timer(sBreakTime)
            sb=false;
            console.log("sb" + shortB)
            _("typeT").textContent="Short Break"
            document.getElementsByClassName('f2')[0].style.backgroundImage = "url('https://i.pinimg.com/originals/a1/01/e2/a101e22fc458c1110d418ee309f240c8.png')";
            document.getElementById('f').style.backgroundImage = "url('https://media.istockphoto.com/id/1159330547/photo/beach-in-night-skies-and-full-moon.webp?b=1&s=170667a&w=0&k=20&c=RsaY5bg0tsKY4kYvxbxq0m9QwSSgb0CUaPfdoLvcJxg=')";
            
        }
        else{
            
            sb=true
            pomodoro()
        }
    }
    else{
        if(!longB){
            lBreakTime=_("lb").value;
            timer(lBreakTime);
            console.log("lb")
            _("typeT").textContent="Extended Break"

        }
        shortB=0
    }


    

}

function closeM(){
    _("m").style.opacity="0%";
}
function mOpen(){
    _("m").style.opacity="97%";
}



