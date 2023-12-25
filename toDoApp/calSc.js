function _(id){
    return document.getElementById(id);
}

let emDates=[
    
]

temp={
    date:new Date().toLocaleDateString(),
    gif:0,
    score:0


}
// emDates.push(temp)  

function getWidth(){
    let p1=_("Monday").offsetLeft;
    let p2=_("Sunday").offsetLeft;
    let p3 = _("Monday").offsetWidth;
    let p4 = _("monCal").offsetWidth;

    let totWidth =p4- (p1 -p2 - p3)
    //console.log(Math.abs(totWidth));
    //console.log(p4,p3);
    _("daysHolder").style.width=(Math.abs(totWidth))+"px";
    //console.log((Math.abs(totWidth)))
    return ((Math.abs(totWidth))/7)-1;
}

let today = new Date();
let year=today.getFullYear();
let month = today.getMonth();
let day= today.getDay();
//console.log(year,month,day);
function inputDays(operation) {
    if(operation=="forward"){
        month++;
        if(month>11){
            month=0;
            year++;
        }
        let calenderDate=new Date(year+"-"+(month+1)+"-01");
        month=calenderDate.getMonth();
        year=calenderDate.getFullYear();
        //console.log(calenderDate);
        
        let Cday=calenderDate.getDay();
        //console.log(Cday);
        let lastDay = new Date(year, month + 1, 0).getDate();
        //console.log(lastDay);
        boxCreator(Cday,lastDay);



    }
    else if(operation=="today"){
        let tempDate=new Date();
        month=tempDate.getMonth();
        year=tempDate.getFullYear();
        let calenderDate=new Date(year+"-"+(month+1)+"-01");
        //console.log(calenderDate);

        
        let Cday=calenderDate.getDay();
        //console.log(Cday);
        let lastDay = new Date(year, month + 1, 0).getDate();
        //console.log(lastDay);
        boxCreator(Cday,lastDay);
    
    }
    else if(operation=="backward"){
        month--;
        if(month<0){
            month=11;
            year--;
        }
        let calenderDate=new Date(year+"-"+(month+1)+"-01");
        //console.log(calenderDate);
        
        let Cday=calenderDate.getDay();
        //console.log(Cday);
        let lastDay = new Date(year, month + 1, 0).getDate();
        //console.log(lastDay);
        boxCreator(Cday,lastDay);

    }




    
    
}

function boxCreator(Cday,lastDay){
    let uniId=0;
    _("mon").textContent=getMonthName(month);
    _("year").textContent="("+year+")"
    let boxWidth = getWidth();
        let bCount=1;
        _("daysHolder").innerHTML = "";
    let totDays=(Cday+lastDay>35)? 42:35;
    for (let i = 0; i < totDays; i++) {
        if(i<Cday){
            let box = `<div class="daybox"><div
            \\>-</div></div>`;
            _("daysHolder").innerHTML += box;
        }
        else{
            if(bCount<=lastDay){
                
                let gPresent=false;
                let gifP="";
                emDates.forEach(function(ele){
                    //console.log(ele.date)
                    testDate=(new Date((""+year+"-"+(month+1)+"-"+(bCount))).toLocaleDateString());

                    if(testDate==""+ele.date){
                        gPresent=true;
                        gifP=(ele.gif==9)?100:ele.gif;
                        //console.log("Hiooooooooooooooooooooo")
                    }
                })
                if(gPresent){
                    let box = `<div id="u${uniId}" class="daybox"><div class="db2">${bCount++}</div></div>`;
                    _("daysHolder").innerHTML += box;
                    _(`u${uniId}`).style.backgroundImage=`url("./tempZoo/${gifP}.gif")`
                    uniId++

                    //console.log("Hiooooooooooooooooooooo",gifP)

                }
                else{
                    let box = `<div class="daybox"><div class="db2">${bCount++}</div></div>`;
                    _("daysHolder").innerHTML += box;
                }
            }
            else{
                let box = `<div class="daybox">-</div>`;
                _("daysHolder").innerHTML += box;

            }
        }
    }
    let boxStyles = document.querySelectorAll(".daybox");
    // //console.log(boxWidth);
    boxStyles.forEach(function(ele) {
    // //console.log(ele,boxWidth);

    ele.style.width = boxWidth+"px";
    ele.style.height = boxWidth+"px";
});
}


function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
        default:
            return 'Invalid month number';
    }
}

// inputDays("today");
inputDays("today")
// getWidth();

function t(){
    _("today").textContent=(new Date()).toDateString();
}
t();


function countdownToMidnight() {
    let now = new Date();
    let targetDate = new Date(now);
    targetDate.setDate(now.getDate() + 1);
    targetDate.setHours(0, 0, 0, 0);
    let timeDifference = targetDate - now;
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    _("midTimer").textContent=(`Next Day Review in: ${hours}h ${minutes}m ${seconds}s`);
}



function dayReviewer(){
    let elePresent=false;
    emDates.forEach(function(ele){
        //console.log(ele.date)
        if(ele.date==new Date().toLocaleDateString()){
            elePresent=true;
        }
    })
    if(elePresent){
        //console.log("hi");
        countdownToMidnight();
        sId=setInterval(countdownToMidnight, 1000);
        _("tr").classList.add("hide")
        _("midTimer").classList.remove("hide")
    }
    else{
        _("tr").classList.remove("hide");
        _("midTimer").classList.add("hide")
        try{
            clearInterval(sId);
        }
        catch{

        }


    }
    
}
dayReviewer();

function reviewEm(gifN){
    //console.log(gifN);
    let msg="";
    let userRating = gifN+1; 



    switch (userRating) {
    case 1:
        msg = "Even on tough days, you're resilient. Tomorrow's a new chance!";
        break;
    case 2:
        msg = "We all have off days. Shake it off, and tomorrow will be better!";
        break;
    case 3:
        msg = "Everyone has room for improvement. You got this!";
        break;
    case 4:
        msg = "Not bad! You're doing well, and there's always room to grow.";
        break;
    case 5:
        msg = "Right in the middle! Keep pushing for those highs!";
        break;
    case 6:
        msg = "Not bad at all! You're making steady progress.";
        break;
    case 7:
        msg = "Great job! Your efforts are paying off.";
        break;
    case 8:
        msg = "Fantastic day! You're on a roll!";
        break;
    case 9:
        msg = "Almost perfect! Keep aiming high!";
        break;
    case 10:
        msg = "Absolutely stellar! You're on top of the world!";
        break;
    default:
        msg = "Invalid rating. Please choose a number between 1 and 10.";
    }
    
    _("reviewMsg").textContent=msg.toUpperCase();
    emDates.push({
        date:new Date().toLocaleDateString(),
        gif:gifN,
        score:(gifN +1)*10
    })
    _("afterMsgClick").classList.remove("hide");
    setTimeout(function(){
        _("afterMsgClick").classList.add("hide");
        openReviewMenu()
        dayReviewer();
        inputDays("today");
    },3000)
}

function openReviewMenu(){
    if(_("addReviewMenu").style.display=="block"){
        _("addReviewMenu").style.display="none"
        _("addReviewMenu").classList.add("hide")
        
    }
    else{
        _("addReviewMenu").style.display="block"
        _("addReviewMenu").classList.remove("hide")
    }
}




























function generateRandomData(startDate, endDate, count) {
    const data = [];
  
    for (let i = 0; i < count; i++) {
      const randomDate = new Date(
        startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
      );
  
      const randomGif = Math.floor(Math.random() * 10); // Random gif between 0 and 9
      const randomScore = Math.floor(Math.random() * 101); // Random score between 0 and 100
  
      const newData = {
        date: randomDate.toLocaleDateString(),
        gif: randomGif,
        score: randomScore,
      };
  
      emDates.push(newData);
    }
  
    return data;
  }
  
  // Example usage:
  const startDate = new Date("2023-01-01");
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() ); 
  
  generatedData = generateRandomData(startDate, endDate, 180);
  inputDays("today");
  dayReviewer();

  function graph1(){
    let bestToForget = 0;
    let worstDay=0
    let couldBeBetter=0
    let notThatBad=0
    let notBadNotGood=0
    let goodDay=0
    let funDay=0
    let almostPerfect=0;
    let perfect = 0;
    let dayToRem = 0;



    console.log(emDates);
    emDates.forEach(function(ele){
        let tempGifNo=ele.gif;
        switch(tempGifNo){
            case 0:bestToForget++;
            break;
            case 1:worstDay++;
            break;
            case 2: couldBeBetter++;
            break;
            case 3: notThatBad++;
            break;
            case 4:notBadNotGood++;
            break;
            case 5: goodDay++;
            break;
            case 6:funDay++;
            break;
            case 7:almostPerfect++;
            break;
            case 8: perfect++;
            break;
            case 9:dayToRem++;
            break;
            default:console.log(".");
            break;
        }
    })



    var dom = document.getElementById('chart-container');
    var myChart = echarts.init(dom, 'dark', {
    renderer: 'canvas',
    useDirtyRect: false
    });
    var app = {};

    var option;

    option = {
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
        mark: { show: true },
        dataView: { show: false, readOnly: false },
        restore: { show: false },
        saveAsImage: { show: true }
        }
    },
    series: [
        {
        name: 'Emo Chart',
        type: 'pie',
        radius: [50, (document.body.offsetWidth>1400)?350:200],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
            borderRadius: 8
        },
        label: {
            fontSize: 20,
            show: true,
            formatter: '{b} : {c} ({d}%)' 
        },
        data: [
            { value: bestToForget, name: '😤 Best to Forget' },
            { value: worstDay, name: '😡 Worst Day' },
            { value: couldBeBetter, name: '😢 Could Be Better' },
            { value: notThatBad, name: '🥺 Not That Bad' },
            { value: notBadNotGood, name: '👀 Not Bad Not Good , Just Okay' },
            { value: goodDay, name: '😊 Good Day' },
            { value: funDay, name: '😂 A Solid Fun Day' },
            { value: almostPerfect, name: '😍 Almost Perfect' },
            { value: perfect, name: '🔥 A Perfect Day' },
            { value: dayToRem, name: '💯 A Day to Remember' }
            
        ]
        }
    ]
    };


    if (option && typeof option === 'object') {
    myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  }
//   graph1();


  function graph2(){
    let bestToForget = 0;
    let worstDay=0
    let couldBeBetter=0
    let notThatBad=0
    let notBadNotGood=0
    let goodDay=0
    let funDay=0
    let almostPerfect=0;
    let perfect = 0;
    let dayToRem = 0;



    console.log(emDates);
    emDates.forEach(function(ele){
        let tempGifNo=ele.gif;
        switch(tempGifNo){
            case 0:bestToForget++;
            break;
            case 1:worstDay++;
            break;
            case 2: couldBeBetter++;
            break;
            case 3: notThatBad++;
            break;
            case 4:notBadNotGood++;
            break;
            case 5: goodDay++;
            break;
            case 6:funDay++;
            break;
            case 7:almostPerfect++;
            break;
            case 8: perfect++;
            break;
            case 9:dayToRem++;
            break;
            default:console.log(".");
            break;
        }
    })
    var dom = document.getElementById('chart-container2');
    var myChart = echarts.init(dom, 'light', {
    renderer: 'canvas',
    useDirtyRect: false
    });
    var app = {};

    var option;

    // prettier-ignore
    let dataAxis = ['😤', '😡', '😢', '🥺', '👀', '😊', '😂', '😍', '🔥', '💯'];
    // prettier-ignore
    let data = [bestToForget,worstDay,couldBeBetter,notThatBad,notBadNotGood,goodDay,funDay,almostPerfect,perfect,dayToRem];
    let yMax = 500;
    let dataShadow = [];
    for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
    }
    option = {
    title: {
        text: 'Emo Graph2',
        // subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
        inside: true,
        color: '#fff',
        fontSize:36

        },
        axisTick: {
        show: false
        },
        axisLine: {
        show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
        show: false
        },
        axisTick: {
        show: false
        },
        axisLabel: {
        color: '#999'
        }
    },
    dataZoom: [
        {
        type: 'inside'
        }
    ],
    series: [
        {
        type: 'bar',
        showBackground: true,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
            ]),
            label: {
                show: true,
                position: 'top', // Adjust the position if needed
                fontSize: 36, // Adjust the fontSize as needed
                color: '#fff' // Adjust the color as needed
            }
        },
        emphasis: {
            itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' }
            ])
            }
        },
        data: data
        }
    ]
    };
    // Enable data zoom when user click bar.
    const zoomSize = 6;
    myChart.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue:
        dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
    });

    if (option && typeof option === 'object') {
    myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);

  }

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            graph1();
            observer.unobserve(entry.target);
        }
    });
}
var options = {
    root: null,
    rootMargin: '-50px',
    threshold: 0.5 
};

var observer = new IntersectionObserver(handleIntersection, options);
observer.observe(_("chart-container"))


function handleIntersection2(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            graph2();
            observer.unobserve(entry.target);
        }
    });
}
var options2 = {
    root: null,
    rootMargin: '-100px',
    threshold: 0.5 
};

var observer2 = new IntersectionObserver(handleIntersection2, options2);
observer2.observe(_("chart-container2"))

  
  