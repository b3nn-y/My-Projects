
    
    
    let capsDown=false;
    
    
    let wordCount={};

    numOfLines=0
  
    function textGen(){
        
        a="Hi this is benny and this is a test run of text before the real stuff. So hope you are ready."
        a=" In the lively city of Merrimentburg, resides Jane, an eccentric architect who stumbled upon a forgotten plot of land. With unbridled creativity, she decided to construct her magnum opus—a house shaped like a giant shoe. The flamboyant structure quickly became a sensation, drawing crowds and unintentionally turning into a tourist attraction. Unexpectedly, a renowned fashion designer, captivated by Jane's whimsy, proposed a collaboration. The result was a spectacular fashion show held within the confines of the shoe house, merging architecture and haute couture in an extravagant display. The city transformed into a glamorous hotspot, attracting celebrities and influencers from around the globe. Jane found herself immersed in a surreal adventure, proving that unconventional ideas can lead to extraordinary experiences. The shoe house became an iconic symbol of creativity, hosting events that blurred the lines between art and architecture. It became a hub of imagination and merriment, leaving an indelible mark on the city and its inhabitants. In the heart of Merrimentburg, the tale of the eccentric shoe house unfolded, a reminder that life's most delightful stories are often written with a splash of color and a dash of whimsy."
        letterLst=a.split('');
        htmlTags="";
        ind=0
        /*letterLst.forEach(function(ele){
            htmlTags+=`<span id="l${ind}">${ele}</span>`;
            ind++;
        })
        _("con").innerHTML=htmlTags+"</h1>"*/
        /*_("cur").style.opacity="100%";
        _("cur").style.top=_(`l${currentInd}`).offsetTop+"px";
        _("cur").style.left=_(`l${currentInd}`).offsetLeft-5+"px";*/

        wordsLst=a.split(" ");
        lenOfWords=0;
        numOfIteration=1;
        inputContent=[];
        tempWords=""

        wordsLst.forEach(function(ele){
            tempA=ele.length;
            lenOfWords+=tempA;
            if(lenOfWords>20){
                numOfIteration++;
                lenOfWords=0
                inputContent.push(tempWords)
                tempWords="";
            }
            
            tempWords+=ele;
            tempWords+=" "

            

        })
        inputContent.push(tempWords)
        h1Num=0;
        lineID=97
        inputContent.forEach(function(ele){
            htmlTags+=`<h1 class="oth" id="head${h1Num}">`;
            h1Num++;
            tempList=ele.split("")
            tempList.forEach(function(elem){
            htmlTags+=`<span id="${String.fromCharCode(lineID)}${ind}" class="${String.fromCharCode(lineID)}${ind}">${elem}</span>`;
            ind++;
            wordCount[`head${h1Num}`]=tempList.length;
            
            })    
            htmlTags+="</h1>";
            lineID++;
            ind=0;
            numOfLines++
        
        })
        _("con").innerHTML+=htmlTags 
        inputContent.push(tempWords)
        console.log(numOfIteration);
        _("mainLine").innerHTML=_("head"+tempHeadNum).innerHTML;
        
        
            _("small1").textContent="Press SPACE to START"; 
            _("small1").style.color="blue"
            _("mainLine").innerHTML=_("head"+tempHeadNum).innerHTML;
            _("small2").innerHTML=_("head"+(tempHeadNum+1)).innerHTML;
        





    }


    
    

    let currentInd=0
        


    letterNumber=0

    currentHead="a";
    currentHeadId=97;
    headnum=1
    tempHeadNum=0
    
    timeStarted=false



    function inputValidator(letter){
        console.log(wordCount)
        if(timeStarted){
            
        }
        else{
            startTimer();
            timeStrated=true;         
        }
        
        if(currentInd>=wordCount["head"+headnum]){
            currentHeadId++;
            headnum++
            tempHeadNum++
            currentInd=0
            _("mainLine").innerHTML=_("head"+tempHeadNum).innerHTML;

            _("cur").style.top=document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetTop+8+"px";
            _("cur").style.left=document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetLeft +document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetWidth+-5+"px";
        }
        console.log("head "+currentHead)
        console.log("Ind"+currentInd)


        currentHead=String.fromCharCode(currentHeadId);

        console.log(headnum)
        console.log(h1Num)
        totalWordsTyped++;
        if(letter==="Control" || letter==="CapsLock" || letter==="Shift" || letter==="Alt" || letter==="Backspace" || letter==="Tab" ||letter==="ArrowDown" ||letter==="ArrowUp" ||letter==="ArrowLeft" ||letter==="ArrowRight" ||letter==="Enter"  ){
            if(letter==="Backspace"){
                if(currentInd>0){
                    currentInd--;                                                                   
                }
                console.log(headnum)
                if(currentInd==0 && headnum>1){
                    // _(`${currentHead}${0}`).style.color="gray";
                    document.querySelectorAll("."+`${currentHead}${0}`).forEach(element => {
                        element.style.color = "gray";
                      });

                    // document.querySelector("."+`${currentHead}${0}`).style.color="gray";
                    currentHeadId--;
                    currentInd=wordCount["head"+--headnum]-1
                    tempHeadNum-=1
                    console.log(currentHeadId)
                    console.log("head"+h1Num)
                    console.log(wordCount["head"+headnum])
                    currentHead=String.fromCharCode(currentHeadId)
                    _("mainLine").innerHTML=_("head"+tempHeadNum).innerHTML;

            _("cur").style.top=document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetTop+8+"px";
            _("cur").style.left=document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetLeft +document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetWidth+-5+"px";
                    
                }


                if(document.querySelectorAll(`.${currentHead}${currentInd}`)[0].textContent=="-"){
                    document.querySelectorAll(`.${currentHead}${currentInd}`).forEach(element => {
                        element.textContent=" ";
                      });
                }

                // _(`${currentHead}${currentInd}`).style.color="gray";
                document.querySelectorAll(`.${currentHead}${currentInd}`).forEach(element => {
                    element.style.color = "gray";
                  });
                
                _("cur").style.top=document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetTop+8+"px";
                _("cur").style.left=document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetLeft-5+"px";
            }
        }
        else{

            if(letter===_(`${currentHead}${currentInd}`).textContent){
                // _(`${currentHead}${currentInd}`).style.color="green";
                document.querySelectorAll(`.${currentHead}${currentInd}`).forEach(element => {
                    element.style.color = "green";
                  });
                _("cur").style.top=document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetTop+8+"px";
                _("cur").style.left=document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetLeft +document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetWidth+-5+"px";

            }
            else{
                if(letter!==" " && " "===_(`${currentHead}${currentInd}`).textContent){
                    document.querySelectorAll(`.${currentHead}${currentInd}`).forEach(element => {
                        element.textContent="-";
                      });
                    // _(`${currentHead}${currentInd}`).style.color="red";
                    document.querySelectorAll(`.${currentHead}${currentInd}`).forEach(element => {
                        element.style.color = "red";
                      });
                    _("cur").style.top=document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetTop+8+"px";
                  _("cur").style.left=document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetLeft +document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetWidth+-5+"px";
                }
                else{
                    // _(`${currentHead}${currentInd}`).style.color="red";
                    document.querySelectorAll(`.${currentHead}${currentInd}`).forEach(element => {
                        element.style.color = "red";
                      });;
                    _("cur").style.top=document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetTop+8+"px";
                  _("cur").style.left=document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetLeft +document.querySelectorAll(`.${currentHead}${currentInd}`)[0].offsetWidth+-5+"px";
                }
            }
            if(letter!=="Backspace"){
                currentInd++;
            }

        }

        if(tempHeadNum>0){
            _("small1").style.opacity="100%";
            
        }
        else{
            _("small1").style.opacity="0%"; 
            _("small1").innerHTML="";
            _("mainLine").innerHTML=_("head"+tempHeadNum).innerHTML;
            _("small2").innerHTML=_("head"+(tempHeadNum+1)).innerHTML;
        }
        if(tempHeadNum>0 && tempHeadNum<numOfLines-1){
            _("small1").innerHTML=_("head"+(tempHeadNum-1)).innerHTML;
            _("mainLine").innerHTML=_("head"+tempHeadNum).innerHTML;
            _("small2").innerHTML=_("head"+(tempHeadNum+1)).innerHTML;
        }
        else if(tempHeadNum>0 && tempHeadNum>=numOfLines-1){
            _("small2").innerHTML="";
            _("small1").innerHTML=_("head"+(tempHeadNum-1)).innerHTML;
            _("mainLine").innerHTML=_("head"+tempHeadNum).innerHTML;
        }

        

        
        
    }

    textGen();

  



    key=""
    let keyDOWN=document.body.addEventListener("keydown",function(ev){
        console.log(ev.key);
        key=String(ev.key);
        keyBoardpresDown(key)

    })
    let keyUP=document.body.addEventListener("keyup",function(ev){
        console.log(ev.key);
        key=String(ev.key);
        keyBoardpresUp(key)

    })

    function keyBoardpresDown(ke){
        inputValidator(String(ke));
        k=ke.toLowerCase();
        switch(k){
            case "control":_("ctrl").style.backgroundImage="url(./b4.png)";
                        _("ctrl2").style.backgroundImage="url(./b4.png)";
                        return;
            break;
            case "shift":_("sh").style.backgroundImage="url(./b4.png)";
                         _("sh2").style.backgroundImage="url(./b4.png)";
                         let AlphsKeys=document.querySelectorAll(".alpha");
                         AlphsKeys.forEach(function(element) {
                         element.style.textTransform = 'uppercase';
                    
                  });
                         return;
            break;
            case "capslock":if(capsDown){
                _("caps").style.backgroundImage="url(./b3.png)";
                capsDown=false;
                let AlphsKeys=document.querySelectorAll(".alpha");
                AlphsKeys.forEach(function(element) {
                    element.style.textTransform = 'lowercase';
                    
                  });
            }
            else{
                _("caps").style.backgroundImage="url(./b4.png)";
                capsDown=true;
                let AlphsKeys=document.querySelectorAll(".alpha");
                AlphsKeys.forEach(function(element) {
                    element.style.textTransform = 'uppercase';
                    
                  });
            }
            return;
            break;
            case "alt":_("alt").style.backgroundImage="url(./b4.png)";
                _("alt2").style.backgroundImage="url(./b4.png)";
            break;

            
        }
        
        b=document.getElementById(k);
        b.style.backgroundImage="url(./b4.png)";
    }

    function keyBoardpresUp(ke){
        k=ke.toLowerCase();
        if(k=="capslock"){
            return;
        }
        if(k=="control"){
            _("ctrl").style.backgroundImage="url(./b3.png)";
            _("ctrl2").style.backgroundImage="url(./b3.png)";
            return;
        }
        if(k=="shift"){
            _("sh").style.backgroundImage="url(./b3.png)";
            _("sh2").style.backgroundImage="url(./b3.png)";
            let AlphsKeys=document.querySelectorAll(".alpha");
                AlphsKeys.forEach(function(element) {
                    element.style.textTransform = 'lowercase';
                    
                  });
            return;
        }
        if(k=="alt"){
            _("alt").style.backgroundImage="url(./b3.png)";
            _("alt2").style.backgroundImage="url(./b3.png)";
            return;
        }
        if(k=="tab"){
            _("tab").style.backgroundImage="url(./b3.png)";
            
            return;
        }

        b=document.getElementById(k);
        b.style.backgroundImage="url(./b3.png)";
    }
    function _(id){
        return document.getElementById(id);
    }
 /*   let MorseCodeMastery = `
    Within the hallowed walls of the library, Rebecca, an enigmatic virtuoso, orchestrated a clandestine symphony of intellect—a masterpiece composed entirely in Morse code. Each meticulously crafted dot and dash unveiled a narrative that transcended the traditional boundaries of academia. The professor, initially confounded, found himself drawn into the rhythmic cadence of innovation. Thus unfolded a transcendent lesson: creativity, like Morse code, requires decoding the unconventional.
  `;
  
  let DuckTalesQuantumRebellion = `
    Albert, the prodigious physicist, descended upon the physics lab not as a student but as a maestro orchestrating a revolution. His vision: a perpetual motion machine powered not by mundane forces but by the whimsy of rubber ducks. The quacking legion, in perpetual motion, defied the stoic laws of physics, leaving the class in uproarious laughter and profound contemplation. The lesson etched in duck feathers: the boundaries of scientific inquiry are meant to be playfully challenged.
  `;
  
  let CaffeinatedFloraAlchemy = `
    In the realm of biology, Jessica's accidental spill of morning coffee birthed an elixir that transcended the ordinary. The plants, intoxicated by the caffeinated concoction, grew with a fervor that defied conventional limits. The spilled coffee became a symbol not of mishap, but of serendipity—a reminder that even in the unpredictable chaos of experimentation, nature might reveal its hidden truths.
  `;
  
  let LiteraryBallet = `
    Emily, the literary rebel, transformed the rigid structures of academia into an ethereal ballet of words. Through expressive movements and a narrative woven in the language of dance, she communicated a story that transcended the confines of paragraphs. The class, initially skeptical, found themselves not just immersed in literature but immersed in an experience. The profound takeaway: sometimes, stories are best told through the grace of movement.
  `;
  
  let EmojiOdysseyPixelSymphony = `
    In the age of digital communication, Alex embarked on a poetic odyssey—a voyage through emotions conveyed in pixels and symbols. The canvas of emojis painted a vivid tapestry, and the class, initially befuddled, discovered the nuanced richness hidden within seemingly simplistic symbols. The lesson echoed in pixelated smiles: language evolves, and in the realm of emojis, poetry finds a new frontier.
  `;
  
  let AntarcticMirageEnchantment = `
    The legend of Pablo, the phantom penguin, swept through the college like a zephyr of whimsy, transforming mundane hallways into an ethereal Antarctic realm. Students, fueled by the spark of imagination, embarked on a quest for the elusive feathered friend. Pablo became not just a hoax but a symbol—a reminder that within the routine lies the magic of believing in the extraordinary.
  `;
  
  let GlitteringAlchemyDiscovery = `
    In the chemistry laboratory, where equations met elements, a routine experiment birthed a spectacle of glittering explosions. The classroom, instead of succumbing to panic, was bathed in the iridescence of unexpected beauty. The mishap turned into an alchemical celebration—a reminder that the pursuit of knowledge, even in its most structured form, can birth dazzling revelations.
  `;
  
  let PhilosophicalDialoguesEnchantedForest = `
    Amidst the philosophical musings, Amy's seemingly simple question— "If a tree falls in a forest and no one's around, does it make a sound?"—unleashed an expedition into the enchanted forest of perception and reality. The lecture hall transformed into a realm where every thought echoed through the trees, unraveling layers of contemplation. The profound simplicity of the question left the class in awe of the intricate dance between perception and existence.
  `;
  
  let MathematicalBalletEquations = `
    What began as a dance-off for extra credit evolved into a grand-scale mathematical ballet. Ethan's infectious enthusiasm turned the classroom into a rhythmic arena where equations waltzed with movements, proving that mathematics isn't merely a collection of numbers but a dance waiting to unfold—an elegant choreography of logic and rhythm.
  `;
  
  let CodeComedyRevolution = `
    Lily, the harbinger of digital humor, not only programmed lines of code but orchestrated a stand-up comedy routine within the realm of algorithms. The laughter that echoed through the lecture hall wasn't just amusement; it was a revolution challenging the perception of seriousness in the world of coding. Lily had not just written code; she had created a digital carnival of hilarity that blurred the lines between the binary and the comical.
  `;
  const quotes = {
    awkwardMoves,
    rollercoasterRide,
    liquidMotivation,
    embraceTheMess,
    makeMargarita,
    vibeAndTribe,
    adultingScavengerHunt,
    smileWithTeeth,
    standOut,
    chocolateIsSalad,
    procrastinationSport,
    GPAandCaffeinatedChaos,
    reactWithStyle,
    pretendToBeNormal,
    movieMainCharacter,
    energySavingMode,
    forgetToCheckPhone,
    beAVoice,
    burritoLife,
    senseOfHumorPhD,
    gettingStartedWithCoffee,
    pretendingToBeNormalAgain,
    lifeHackDancing,
    chronologicallyChallenged,
    secondMouseGetsCheese,
    snacksAndAlliance,
    absurdlyHappyLife,
    glitterAndConfettiFuture,
    parallelParkingAchievement,
    upgradeConversationsAndSnacks,
  };
  
  // Use quotes as needed in your project!
  
  const stories = {
    MorseCodeMastery,
    DuckTalesQuantumRebellion,
    CaffeinatedFloraAlchemy,
    LiteraryBallet,
    EmojiOdysseyPixelSymphony,
    AntarcticMirageEnchantment,
    GlitteringAlchemyDiscovery,
    PhilosophicalDialoguesEnchantedForest,
    MathematicalBalletEquations,
    CodeComedyRevolution,
  };
  let awkwardMoves = "In the dance of life, your awkward moves are just as essential as your smooth ones.";

  let rollercoasterRide = "Life is a rollercoaster; might as well throw your hands up and enjoy the ride.";
  
  let liquidMotivation = "Coffee: the liquid motivation that turns 'I can't' into 'I'm unstoppable.'";
  
  let embraceTheMess = "Embrace the glorious mess that you are; it's where the magic happens.";
  
  let makeMargarita = "If life gives you lemons, make a margarita and find someone with salt and tequila.";
  
  let vibeAndTribe = "Your vibe attracts your tribe, so make sure your vibe is disco ball fabulous.";
  
  let adultingScavengerHunt = "Adulting is a never-ending scavenger hunt for the matching sock of life.";
  
  let smileWithTeeth = "Life is short; smile while you still have teeth.";
  
  let standOut = "Why fit in when you were born to stand out? Peacocks don't blend in with pigeons.";
  
  let chocolateIsSalad = "Chocolate comes from cocoa, which is a tree. That makes it a plant. Chocolate is salad.";
  
  let procrastinationSport = "If procrastination were an Olympic sport, I'd compete... tomorrow.";
  
  let GPAandCaffeinatedChaos = "Your GPA doesn't define you. It's more like a random number generator with a preference for caffeinated chaos.";
  
  let reactWithStyle = "Life is 10% what happens to us and 90% how we react to it. So, react with style and a touch of sarcasm.";
  
  let pretendToBeNormal = "Sometimes I pretend to be normal, but it gets boring. So, I go back to being me.";
  
  let movieMainCharacter = "If life were a movie, you'd be the main character, and popcorn would be a food group.";
  
  let energySavingMode = "You're not lazy; you're in energy-saving mode for your future brilliance.";
  
  let forgetToCheckPhone = "Do more things that make you forget to check your phone.";
  
  let beAVoice = "Be a voice, not an echo. Unless it's a really funny echo.";
  
  let burritoLife = "Life is like a burrito: messy but delicious.";
  
  let senseOfHumorPhD = "If laughter is the best medicine, your sense of humor is a PhD waiting to happen.";
  
  let gettingStartedWithCoffee = "The secret of getting ahead is getting started, but also, coffee helps.";
  
  let pretendingToBeNormalAgain = "Pro tip: Adulting is easier with a sprinkle of fairy dust and a playlist of '90s hits.";
  
  let lifeHackDancing = "Life hack: If you're ever feeling down, just start dancing. Bonus points if it's in public.";
  
  let chronologicallyChallenged = "You're not late; you're chronologically challenged.";
  
  let secondMouseGetsCheese = "The early bird might get the worm, but the second mouse gets the cheese.";
  
  let snacksAndAlliance = "Your vibe attracts your tribe, but your snacks determine the strength of the alliance.";
  
  let absurdlyHappyLife = "Life is too short to be anything but absurdly happy.";
  
  let glitterAndConfettiFuture = "The best way to predict the future is to create it. Preferably with glitter and confetti.";
  
  let parallelParkingAchievement = "Adulting achievement unlocked: Successfully parallel parked on the first try.";
  
  let upgradeConversationsAndSnacks = "Life's too short for boring conversations and bad snacks. Upgrade both.";
  
  */

let startTime;
let timerInterval;
let totalWordsTyped = 10;
let wpm=0

function startTimer() {
  startTime = new Date().getTime();

  timerInterval = setInterval(function () {
    const currentTime = new Date().getTime();
    const elapsedTimeInSeconds = (currentTime - startTime) / 1000;


    wpm = wpmCal(totalWordsTyped, elapsedTimeInSeconds);
    console.log(`Words per minute: ${wpm}`);
  }, 1000); 
}

function stopTimer() {
  clearInterval(timerInterval);
}

function wpmCal(words, seconds) {
  const minutes = seconds/60 ;
  console.log(totalWordsTyped)
  console.log(minutes);
  const wordsPerMinute = (totalWordsTyped/5) / minutes;

  return wordsPerMinute;
}