//     grad=false;
//     currentLevel=1
//     _("levels").style.display="none";
//     gameStatus=true;
//     coinsRemaing=-1;
//     function _(id){
//         return document.getElementById(id);
//     }
//     function c(cl){
//         return document.getElementsByClassName(cl)[0];
//     }
//     function createGame(){
//         gameStatus=true 
//         var w = window.innerWidth;
//         var h = window.innerHeight;
//         if(grad){
//             a=currentLevel
//         }  
//         else{
//             a=parseInt(_("i").value); 
//         }
//         lvl=a*(a+2)
//         b=3;
//         if(a>1){
//             b+=a-1
//         }
//         b--;
//         currentLevel=b
//         boxSize=0;
//         if(w>h){
//             boxSize=(h-200)/b+1;
//         }
//         else if(h>w){
//             boxSize=(w-200)/b+1;

//         }
//         else{
//             boxSize=h-100/b+1;

//         }
//         console.log(boxSize)
//         _("a").style.height=(`${((b*boxSize+2)+(2*b))}px`);
//         if(w>1300){
//             _("a").style.width=(`${((b*boxSize+2)+(10*b))}px`);
//         }
//         else{
//             _("a").style.width=(`${((b*boxSize+2)+(2*b))}px`);
//         }
//         gamebox="";
//         console.log("Hi");


//         let box=document.getElementsByClassName("boxes");
        
        

//         c=0;

//         bombsPercent=Math.ceil(lvl*(5/100))

//         let arr= new Array(bombsPercent);
//         for(i=0;i<arr.length;i++){
//             arr[i]=Math.floor(Math.random()*lvl)
//         }

//         console.log(arr)

//         let bc=1;

//         let cc=1;


//         coinsRemaing=0
        
//         for(i=0;i<b;i++){
            
            
//             _("a").innerHTML=`<h1 id="b${i}"></h1>`;
//             console.log(i)
//             for(j=0;j<b;j++){
//                 if(arr.includes(c)){
//                     gamebox+=`<div class="boxes" style="min-height:${(boxSize)}px;min-width:${(boxSize)}px;max-height:${(boxSize)}px;max-width:${(boxSize)}px;" onclick="bombClick(${bc})" id="bomb${bc}"><img style="min-height:${(boxSize)}px;min-width:${(boxSize)}px;max-height:${(boxSize)}px;max-width:${(boxSize)}px;" id="ib${bc}" src="https://media.tenor.com/aZMV_bT0gVEAAAAj/the-blobs-live-on-bomb.gif" alt=""></div>`;
//                     bc++;
//                     c++;
//                     console.log("hdh")
//                     console.log(j)


//                 }
//                 else{
//                     gamebox+=`<div class="boxes" id="coin${cc}" style="min-height:${(boxSize)}px;min-width:${(boxSize)}px;max-height:${(boxSize)}px;max-width:${(boxSize)}px"  onclick="coinClick(${cc})"><img style="min-height:${(boxSize)}px;min-width:${(boxSize)}px;max-height:${(boxSize)}px;max-width:${(boxSize)}px;" id="ic${cc}" src="https://cdn.dribbble.com/users/728843/screenshots/2585386/coin_dribbble.gif" alt=""></div>`;
//                     cc++;
//                     c++;
//                     coinsRemaing++;
//                     console.log("hdh")
//                     console.log(j)
//                 }


//             }
//             _("crn").textContent=coinsRemaing;




            


//         }
        
//         _("a").innerHTML=gamebox;

        
        
//     }
 


// function nlvl(){
//     _("es").style.display="none";
    
//     if(grad){
//         grad=true;
//         createGame()
    
//     _("ws").style.display="none"
//     }
//     else{
//         grad=true;
//         createGame()
//         grad=false;
//     _("ws").style.display="none"
//     }
// }

// function rlvl(){
//     if(grad){
//         _("es").style.display="none";
//     currentLevel--;
//     grad=true;
//     createGame()
    
//     _("ws").style.display="none"
//     }
//     else{
//         _("es").style.display="none";
//     currentLevel--;
//     grad=true;
//     createGame()
//     grad=false;
//     _("ws").style.display="none"
//     }
// }

// function hom(){
//     location.reload();
// }

// function coinClick(a){
//     if(gameStatus){
//         if(_("coin"+a).style.backgroundColor!=="blue"){
//             coinsRemaing--;
//             _("crn").textContent=coinsRemaing;
//         }
//         _("coin"+a).style.backgroundColor="blue";
//         _("ic"+a).style.opacity="1";
        
//     }
    
//     if(coinsRemaing==0){
//         if(grad){
//             setTimeout(function(){
//                 _("ws2").style.display="block";
//                 setTimeout(function(){
//                     _("ws2").style.display="none";
//                     createGame()
                    
//                 },1000)
                
//             },1000)

            

            
            
//         }
//         else{
//             setTimeout(function(){
//                 _("ws").style.display="block"
//             },2000)
            
//         }
//     }
    
// }
// function bombClick(a){
//     _("bomb"+a).style.backgroundColor="red";
//     _("ib"+a).style.opacity="1";
//     gameStatus=false;
//     _("bomb"+a).style.transition="0";

//     _("bomb"+a).style.backgroundImage=`url("https://img.freepik.com/premium-vector/stone-wall-pavement-from-bricks-rocks-with-moss-game-background-cartoon_191307-991.jpg")`;

    
//     const myTimeout = setTimeout(function(){
//         _("es").style.display="block";
//     }, 3000);

    
    


   
// }
// function selectlvl(){
//     _("hs").style.display="none";
//     _("levels").style.display="flex";
    


// }

// function gradlvl(){
//     grad=true;
//     _("levels").style.display="flex"
//     _("i").res

   
//     _("hs").style.display="none";
//     createGame();

// }