let tasks=[
    
]
tNo=2

priGif=`https://blog.prototion.com/content/images/2021/09/animation_priority2.gif`
tickGif=`https://media.tenor.com/6ZkJEn80W7kAAAAC/green-tick.gif`
deadlineGif=`https://cdn.dribbble.com/users/1574335/screenshots/3350042/the-deadline-effect.gif`


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


let locStore=localStorage.getItem("t");
if(locStore==null){
    addTask("Finish the ToDo App","20-03-2453","Do the stuff and have fun, so much fun that this laptop bursts","h")


    addTask("Submit Infinite Scrolling","20-03-2453","Do the stuff and have fun, so much fun that this laptop bursts","l")
    
    
    addTask("Medium test","20-03-2453","Do the stuff and have fun, so much fun that this laptop bursts","m")
}
else{
    tasks=JSON.parse(locStore);
}

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
    localStorage.setItem("t",JSON.stringify(tasks));
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
        

        

            
            if(ele.priority==="h"){
                hp++;
                a=`<div id="task${delId}">
                <div class="table t2 reduceHeightHigh" id="d${delId}">
                    <div id="p${delId}">
                        <p id"para${delId}">${ele.task}</p>
                    </div>
                    <div class="secHalfTask reduceHeightHigh">
                        <p>${ele.deadline}</p>
                        <p class="status ${pc}">${prog}</p>
                        <p><img src="./e1.png" id="edit${delId}" alt=""></p>
                        <img src="${dustbin}" class="dust" id="dust${delId}" alt="">

                    </div>
                </div>
                <div class="table t3 hide reduceHeightHigh" id="des${delId}">
                    <div class="des1" id="des2${delId}">
                        <p>Description</p>
                        <p>Created on: ${ele.curDate}</p>
                    </div>
                    <div  id="d_${tNo}">
                    <p>${ele.desc}</p>
                    </div>

                </div>

                <div class="table t3 reduceHeightHigh hide" id="edMenu${delId}">
                    <div class="edbut">
                        
                        <div class="eb" id="DeadlineButton${delId}">
                            <img src="https://cdn.dribbble.com/users/1574335/screenshots/3350042/the-deadline-effect.gif" class="tick" alt="">
                            <p>Change Deadline</p>
                            <input  type="date" class="deadDate" id="cDeadLine${delId}">
                        </div>
                        <div class="eb" id="tickButton${delId}">
                            <img class="tick" src="https://media.tenor.com/6ZkJEn80W7kAAAAC/green-tick.gif" alt="">
                            <p>Completed</p>
                        </div>
                
                        <div class="eb" id="priButton${delId}">
                            <img src="https://blog.prototion.com/content/images/2021/09/animation_priority2.gif" class="tick" alt="">
                            <p>Change Priority</p>
                            <select class="changePri" name="Priority" id="chPriority${delId}">
                                <option value="ew">CHOOSE</option>
                                <option value="h">HIGH</option>
                                <option value="m">MEDIUM</option>
                                <option value="l">LOW</option>
                            </select>
                        </div>
                    
                    </div>
                
                </div>
            </div>`
                _("high").innerHTML+=a
            }
            else if(ele.priority==="m"){
                mp++
                a=`<div id="task${delId}">
                <div class="table t2 reduceHeightMedi" id="d${delId}">
                    <div id="p${delId}">
                        <p id"para${delId}">${ele.task}</p>
                    </div>
                    <div class="secHalfTask reduceHeightMedi">
                        <p>${ele.deadline}</p>
                        <p class="status ${pc}">${prog}</p>
                        <p><img src="./e1.png" id="edit${delId}" alt=""></p>
                        <img src="${dustbin}" class="dust" id="dust${delId}" alt="">

                    </div>
                </div>
                <div class="table t3 hide reduceHeightMedi" id="des${delId}">
                    <div class="des1" id="des2${delId}">
                        <p>Description</p>
                        <p>Created on: ${ele.curDate}</p>
                    </div>
                    <div  id="d_${tNo}">
                    <p>${ele.desc}</p>
                    </div>

                    </div>


                    <div class="table t3 reduceHeightHigh hide" id="edMenu${delId}">
                    <div class="edbut">
                        
                        <div class="eb" id="DeadlineButton${delId}">
                            <img src="https://cdn.dribbble.com/users/1574335/screenshots/3350042/the-deadline-effect.gif" class="tick" alt="">
                            <p>Change Deadline</p>
                            <input  type="date" class="deadDate" id="cDeadLine${delId}">
                        </div>
                        <div class="eb" id="tickButton${delId}">
                            <img class="tick" src="https://media.tenor.com/6ZkJEn80W7kAAAAC/green-tick.gif" alt="">
                            <p>Completed</p>
                        </div>
                
                        <div class="eb" id="priButton${delId}">
                            <img src="https://blog.prototion.com/content/images/2021/09/animation_priority2.gif" class="tick" alt="">
                            <p>Change Priority</p>
                            <select class="changePri" name="Priority" id="chPriority${delId}">
                                <option value="ew">CHOOSE</option>
                                <option value="h">HIGH</option>
                                <option value="m">MEDIUM</option>
                                <option value="l">LOW</option>
                            </select>
                        </div>
                    
                    </div>
                
                </div>
            </div>`
                _("medi").innerHTML+=a
            }
    
            else if(ele.priority==="l"){
                lp++
                a=`<div id="task${delId}">
                <div class="table t2 reduceHeightLow" id="d${delId}">
                    <div id="p${delId}">
                        <p id"para${delId}">${ele.task}</p>
                    </div>
                    <div class="secHalfTask reduceHeightLow">
                        <p>${ele.deadline}</p>
                        <p class="status ${pc}">${prog}</p>
                        <p><img src="./e1.png" id="edit${delId}" alt=""></p>
                        <img src="${dustbin}" class="dust" id="dust${delId}" alt="">

                    </div>
                </div>
                <div class="table t3 hide reduceHeightLow" id="des${delId}">
                    <div class="des1" id="des2${delId}">
                        <p>Description</p>
                        <p>Created on: ${ele.curDate}</p>
                    </div>
                    <div  id="d_${tNo}">
                    <p>${ele.desc}</p>
                    </div>

                    </div>

                    <div class="table t3 hide reduceHeightHigh" id="edMenu${delId}">
                    <div class="edbut">
                        
                        <div class="eb" id="DeadlineButton${delId}">
                            <img src="https://cdn.dribbble.com/users/1574335/screenshots/3350042/the-deadline-effect.gif" class="tick" alt="">
                            <p>Change Deadline</p>
                            <input  type="date" class="deadDate" id="cDeadLine${delId}">
                        </div>
                        <div class="eb" id="tickButton${delId}">
                            <img class="tick" src="https://media.tenor.com/6ZkJEn80W7kAAAAC/green-tick.gif" alt="">
                            <p>Completed</p>
                        </div>
                
                        <div class="eb" id="priButton${delId}">
                            <img src="https://blog.prototion.com/content/images/2021/09/animation_priority2.gif" class="tick" alt="">
                            <p>Change Priority</p>
                            <select class="changePri" name="Priority" id="chPriority${delId}">
                                <option value="ew">CHOOSE</option>
                                <option value="h">HIGH</option>
                                <option value="m">MEDIUM</option>
                                <option value="l">LOW</option>
                            </select>
                        </div>
                    
                    </div>
                
                </div>
            </div>`
                _("low").innerHTML+=a
            }

            ele.toDel=delId
            delId++

        }
            setInterval(function(){
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
            },1000)
            ele.rendered=true;
            // _(`${tNo}`).appendChild(para1)
            // _(`d${tNo}`).appendChild(para2)

            
    })




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
        try{
            _(`edit${i}`).addEventListener("click",()=>editButton(i))
            
        }
        catch{

        }
        _(`DeadlineButton${i}`).addEventListener("click",() => chDeadline(`${i}`));
        _(`tickButton${i}`).addEventListener("click",() => chStatus(`${i}`));
        _(`priButton${i}`).addEventListener("click",() => chPri(`${i}`));
        
        
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
    _(`dust${id[1]}`).style.width="3em";
    
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
        // addTask(_("tNameInput").value,cD,_("tDescription").value,_("optPri").value);
        // _("tNameInput").value="";
        // _("tDeadLine").value = "";
        // _("optPri").value = "ew"
        // _("tDescription").value="";
        modifyTaskList(_("tNameInput").value,cD,_("tDescription").value,_("optPri").value,true);
        
    }
}

function ctm(){
    tempAdd=document.getElementsByClassName("addTaskMenu")[0]
    tempAdd.style.display="none";
}

function delTask(id){
    let tempTaskList=[]
    console.log("Del")
    console.log(id);
    tasks.forEach(function(ele){
        
        if(ele.toDel!=id){
            console.log(ele.toDel)
            let temp={
                task:ele.task,
                deadline:ele.deadline,
                taskStatus:"in prog",
                desc:ele.desc,
                priority:ele.priority,
                taskNo:++tNo,
                curDate:ele.curDate,
                rendered:false,
                
        
            }
            tempTaskList.push(temp);
        }
    })
    tasks=tempTaskList;
   modifyTaskList("","","","",false)


}

function modifyTaskList(name,date,d,p,process){
    tNo=2
    hp=0
    lp=0
    mp=0
    delId=1
    let tempTaskList=[];
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1; 
    let year = today.getFullYear();

    tDate=(`${day}-${month}-${year}`);

    if(process){
        tasks.forEach(function(ele){
        
            let temp={
                task:ele.task,
                deadline:ele.deadline,
                taskStatus:"in prog",
                desc:ele.desc,
                priority:ele.priority,
                taskNo:++tNo,
                curDate:ele.curDate,
                rendered:false,
                
        
            }
            tempTaskList.push(temp);
            })
            let temp={
                task:name,
                deadline:date,
                taskStatus:"in prog",
                desc:d,
                priority:p,
                taskNo:++tNo,
                curDate:tDate,
                rendered:false,
                
        
            }
            tempTaskList.push(temp);
            tasks=tempTaskList;
    }
    else{
        tasks.forEach(function(ele){
        
            let temp={
                task:ele.task,
                deadline:ele.deadline,
                taskStatus:ele.taskStatus,
                desc:ele.desc,
                priority:ele.priority,
                taskNo:++tNo,
                curDate:ele.curDate,
                rendered:false,
                
        
            }
            tempTaskList.push(temp);
            })
            
    }
    _("innerContent").innerHTML=`
<div id="high">
    <div class="highPri" onclick="highAccord()">
        <div class="p">
            <h1 class="pri">HIGH PRIORITY</h1>
            <h1 class="pri">></h1>
        </div>
        

    </div>
    <div>
        <div class="table t1">
            <div>
                <p>Tasks</p>
            </div>
            <div class="secHalfTask">
                <p>Deadline</p>
                <p>Status</p>
                <p>Edit</p>

            </div>
        </div>
        <div class="t3 hpNT nt">
            No Tasks
            
        </div>


    </div>
</div>
<div id="medi">
    <div id="medPP" class="medPri" onclick="medAccord()">
        <div class="p">
            <h1 class="pri">MEDIUM PRIORITY</h1>
            <h1 class="pri">></h1>
            
        </div>
        
    </div>
    <div>
        <div class="table t1">
            <div>
                <p>Tasks</p>
            </div>
            
            <div class="secHalfTask">
                <p>Deadline</p>
                <p>Status</p>
                <p>Edit</p>


            </div>
        </div>
        <div class="t3 mpNT nt">
            No Tasks
            
        </div>
        <div>
          
        </div>

    </div>
</div>
    <div id="low">
        <div class="lowPri" onclick="lowAccord()">
            <div class="p">
                <h1 class="pri">LOW PRIORITY</h1>
                <h1 class="pri">></h1>
            </div>
        </div>
        <div>
            <div class="table t1">
                <div>
                    <p>Tasks</p>
                </div>
                <div class="secHalfTask">
                    <p>Deadline</p>
                    <p>Status</p>
                    <p>Edit</p>

                </div>
                
            </div>
            <div class="t3 lpNT nt">
                No Tasks
                
            </div>
        </div>`

    tasks=tempTaskList;
    renderTasks();
    mouseMove();


    

}


function highAccord(){
    console.log("Closing High")
    try{
        if(document.getElementsByClassName("reduceHeightHigh")[0].style.display!="none"){
            var elements = document.getElementsByClassName("reduceHeightHigh");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
                 }
                 var ele2 = document.getElementsByClassName("hide");
             for (var i = 0; i < ele2.length; i++) {
                 ele2[i].style.display = "none";
            }
    
        }
        else{
            var elements = document.getElementsByClassName("reduceHeightHigh");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "flex";
                 }
            var ele2 = document.getElementsByClassName("hide");
            for (var i = 0; i < ele2.length; i++) {
              ele2[i].style.display = "none";
            }
        }
    }
    catch(e1){

    }
}


    

function medAccord(){
    console.log("Closing Med")
    try{
        if(document.getElementsByClassName("reduceHeightMedi")[0].style.display!="none"){
            var elements = document.getElementsByClassName("reduceHeightMedi");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
                 }
                 var ele2 = document.getElementsByClassName("hide");
             for (var i = 0; i < ele2.length; i++) {
                 ele2[i].style.display = "none";
            }
    
        }
        else{
            var elements = document.getElementsByClassName("reduceHeightMedi");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "flex";
                 }
            var ele2 = document.getElementsByClassName("hide");
            for (var i = 0; i < ele2.length; i++) {
              ele2[i].style.display = "none";
            }
        }
    }
    catch(e){

    }
}

function lowAccord(){
    console.log("Closing Low")
    try{
        if(document.getElementsByClassName("reduceHeightLow")[0].style.display!="none"){
            var elements = document.getElementsByClassName("reduceHeightLow");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
                 }
                 var ele2 = document.getElementsByClassName("hide");
             for (var i = 0; i < ele2.length; i++) {
                 ele2[i].style.display = "none";
            }
    
        }
        else{
            var elements = document.getElementsByClassName("reduceHeightLow");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "flex";
                 }
            var ele2 = document.getElementsByClassName("hide");
            for (var i = 0; i < ele2.length; i++) {
              ele2[i].style.display = "none";
            }
        }
    }
    catch(e){
        
    }
}



function editButton(id){
    console.log(id);
    pos=_("edit"+id).offsetLeft
    pos2=_("edit"+id).offsetTop
    console.log(pos,pos2);
    
    // _("edMenu"+id).classList.remove("hide");
    if(_("edMenu"+id).style.display=="block"){
        _("edMenu"+id).style.display="none"
        _("edMenu"+id).classList.add("hide")
        
    }
    else{
        _("edMenu"+id).style.display="block"
        _("edMenu"+id).classList.remove("hide")
    }
    
}

function chDeadline(id){
    console.log(id+"d");
    let chDate=_("cDeadLine"+id).value
    if(chDate!=""){
        tasks.forEach(function(ele){
            if(ele.toDel==id){
                let finalchDate=""+chDate[8]+chDate[9]+"-"+chDate[5]+chDate[6]+"-"+chDate[0]+chDate[1]+chDate[2]+chDate[3]
                ele.deadline=finalchDate
                console.log(tasks)
                editButton(id)
                modifyTaskList("","","","",false)
            }
        })
        console.log("Date okay");
        
    }
    else{
        console.log("Date not okay");
    }


}

function chStatus(id){
    console.log(id+"s");
    tasks.forEach(function(ele){
        if(ele.toDel==id){
            ele.taskStatus="comp";
            console.log(tasks)
            editButton(id)
            modifyTaskList("","","","",false)
            console.log("Completed");
        }
    })
    


}
function chPri(id){
    console.log(id+"p");
    changedPri=_("chPriority"+id).value

    if(changedPri!="ew"){
        tasks.forEach(function(ele){
            if(ele.toDel==id){
                ele.priority=changedPri
                console.log(tasks)
                editButton(id)
                modifyTaskList("","","","",false)
            }
        })
        console.log("pri okay");
        
    }
    else{
        console.log("pri not okay");
    }
}



function pendingTask(){
    setInterval(function(){
        try{
            let today = new Date();
            let day = today.getDate();
            let month = today.getMonth() + 1; 
            let year = today.getFullYear();

            tDate=(`${year}-${month}-${day}`);
            console.log(tDate);
            tasks.forEach(function(ele){
            tempDeadline=ele.deadline;
            tempD=""+tempDeadline[6]+tempDeadline[7]+tempDeadline[8]+tempDeadline[9]+"-"+tempDeadline[3]+tempDeadline[4]+"-"+tempDeadline[0]+tempDeadline[1]
            let tempDate1= new Date(tDate);
            let tempDate2 = new Date(tempD);
            // console.log(tempDate1,tempDate2);
            if(tempDate1>tempDate2){
                if(ele.taskStatus!="comp"){
                    ele.taskStatus="pend";
                    console.log(tasks)
                    modifyTaskList("","","","",false)
                    console.log("Pending");
                }

            }
        });
        

        }
        catch(e){

        }
    },60000)

}

pendingTask();