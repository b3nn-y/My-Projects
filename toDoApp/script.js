let tasks=[
    
]
tNo=2

function addTask(name,deadl,descrip,pri){
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1; 
    let year = today.getFullYear();

    tDate=(`${day}-${month}-${year}`);
    let temp={
        task:name,
        deadline:deadl,
        taskStatus:"in prog",
        desc:descrip,
        priority:pri,
        taskNo:++tNo,
        curDate:tDate,
        rendered:false,
        

    }

    tasks.push(temp)
    
}

addTask("Finish the ToDo App","20-03-2453","Do the stuff and have fun, so much fun that this laptop bursts","h")


addTask("Submit Infinite Scrolling","20-03-2453","Do the stuff and have fun, so much fun that this laptop bursts","l")


addTask("Medium test","20-03-2453","Do the stuff and have fun, so much fun that this laptop bursts","m")
// addTask("Medium test","20-03-2453","Do the stuff and have fun, so much fun that this laptop bursts","h")


hp=0
lp=0
mp=0

dustbin="https://ugokawaii.com/wp-content/uploads/2023/06/trash-can.gif"

document.getElementsByClassName("hpNT")[0].style.display="block"
document.getElementsByClassName("mpNT")[0].style.display="block"
document.getElementsByClassName("lpNT")[0].style.display="block"
delId=1
function renderTasks(){
    tasks.forEach(function(ele){
        console.log(ele)
        if(!ele.rendered){
            const para1 = document.createElement("p");
        para1.innerText=ele.task

        const para2 = document.createElement("p");
        para2.innerText=ele.desc
        let prog=""
        let pc=""
        if(ele.taskStatus==="in prog"){
            prog="In Progress"
            pc="y"

        }
        else if(ele.taskStatus==="comp"){
            prog="Completed"
            pc="g"
        }

        else if(ele.taskStatus==="pend"){
            prog="Pending"
            pc="r"
        }
        

        a=`<div id="task${delId}">
                <div class="table t2" id="d${delId}">
                    <div id="p${delId}">
                        <p id"para${delId}">${ele.task}</p>
                    </div>
                    <div class="secHalfTask">
                        <p>${ele.deadline}</p>
                        <p class="status ${pc}">${prog}</p>
                        <p><img src="./e1.png" alt=""></p>
                        <img src="${dustbin}" class="dust" id="dust${delId}" alt="">

                    </div>
                </div>
                <div class="table t3 hide" id="des${delId}">
                    <div class="des1" id="des2${delId}">
                        <p>Description</p>
                        <p>Created on: ${ele.curDate}</p>
                    </div>
                    <div  id="d_${tNo}">
                    <p>${ele.desc}</p>
                    </div>

                    </div>
            </div>`
            console.log("df");
            
            console.log(ele.priority+" hi   ")
            if(ele.priority==="h"){
                hp++;
                _("high").innerHTML+=a
            }
            else if(ele.priority==="m"){
                mp++
                _("medi").innerHTML+=a
            }
    
            else if(ele.priority==="l"){
                lp++
                _("low").innerHTML+=a
            }

            ele.toDel=delId
            delId++

        }
            if(hp==0){
                document.getElementsByClassName("hpNT")[0].style.display="block"

            }
            else{
                document.getElementsByClassName("hpNT")[0].style.display="none"
            }


            if(mp==0){
                document.getElementsByClassName("mpNT")[0].style.display="block"
            }
            else{   
                document.getElementsByClassName("mpNT")[0].style.display="none"
            }


            if(lp==0){
                document.getElementsByClassName("lpNT")[0].style.display="block"

            }

            else{
                document.getElementsByClassName("lpNT")[0].style.display="none"

            }
            ele.rendered=true;
            // _(`${tNo}`).appendChild(para1)
            // _(`d${tNo}`).appendChild(para2)

    })
//     a=`<div>
//     <div class="table t2">
//         <div>
//             <p>Submit Infinite Scrolling</p>
//         </div>
//         <div class="secHalfTask">
//             <p>20-03-2453</p>
//             <p class="status g">Completed</p>
//             <p><img src="./e1.png" alt=""></p>

//         </div>
//     </div>
//     <div class="table t3 hide">
//         <div class="des1">
//             <p>Description</p>
//             <p>Created on: 20-23-2389</p>
//         </div>
//         <div >
//             <p>Do the stuff and have fun, so much fun that this laptop bursts</p>
//         </div>

//     </div>
// </div>`





}
function descript(id){
    console.log(_("des"+id[1]))
    if(_("des"+id[1]).style.display=="block"){
        _("des"+id[1]).style.display="none"
        _("des"+id[1]).classList.add("hide")
    }
    else{
        _("des"+id[1]).style.display="block"
        _("des"+id[1]).classList.remove("hide")
    }
}

function mouseMove(){
    for(let i=1;i<=tasks.length;i++){
        console.log("hi",`d${delId}`)
        _(`d${i}`).addEventListener("mouseenter",() => delTaskIcon(`d${i}`));

        _(`d${i}`).addEventListener("mouseleave",() => remDelTaskIcon(`d${i}`));

        _(`p${i}`).addEventListener("click",() => descript(`d${i}`));

        _(`dust${i}`).addEventListener("click",() => delTask(`${i}`));
    }
}

renderTasks()
mouseMove();
console.log(tasks);

function _(id){
    return document.getElementById(id)
}

function delTaskIcon(id){
    // _(id).innerHTML=`<img src=${dustbin}/>`
    console.log("enter",id[1])
    _(`dust${id[1]}`).style.width="80px";
    
}

function remDelTaskIcon(id){
    console.log('exit',id[1]);
    _(`dust${id[1]}`).style.width="0px";
}

tm="";
addTaskButton=false
function addTaskMenu(){
    tempAdd=document.getElementsByClassName("addTaskMenu")[0]
    tempAdd.style.display="flex";
    setTimeout(function(){
        
        tempAdd.style.height="40vw";
    },10)
    setTimeout(function(){
        
    },10)


    tm = setInterval(function(){
        if (_("tNameInput").value.length > 1 && _("tDeadLine").value !== "" && _("optPri").value !== "ew" && _("tDescription").value.length > 1) {
            addTaskButton=true;
        }
        else{
            addTaskButton=false;
        }
    }, 10);
    

}

function addTaskB(){
    tempAdd=document.getElementsByClassName("addTaskMenu")[0]
    if(addTaskButton){
        tempAdd.style.height="0vw";
        setTimeout(function(){
        
            tempAdd.style.display="none";
        },100)
        d=_("tDeadLine").value
        cD=""+d[8]+d[9]+"-"+d[5]+d[6]+"-"+d[0]+d[1]+d[2]+d[3]
        addTask(_("tNameInput").value,cD,_("tDescription").value,_("optPri").value)
        _("tNameInput").value="";
        _("tDeadLine").value = "";
        _("optPri").value = "ew"
        _("tDescription").value="";

        renderTasks()
        mouseMove()
        
    }
}

function ctm(){
    tempAdd=document.getElementsByClassName("addTaskMenu")[0]
    tempAdd.style.display="none";
}

function delTask(){

}