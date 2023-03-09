


//  Using document property Creation of every part variable to changing display properties...........,,,,,,,,,,,,,,,,,,,,,,,,,,,, 
const mint10=document.getElementById('mint10');
const mint0=document.getElementById('mint0');
const sec10=document.getElementById('sec10');
const sec0=document.getElementById('sec0');
const mlsec10=document.getElementById('mlsec10');
const mlsec0=document.getElementById('mlsec0');
const buttons=document.getElementsByTagName('button');


// Rest function is used to resting of Stop watch Time.......................................................................

function rest (){
        mint10.innerText='0';
        mint0.innerText='0';
        sec10.innerText='0';
        sec0.innerText='0';
        mlsec10.innerText='0';
        mlsec0.innerText='0';
        const hue=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"));
        document.documentElement.style.setProperty("--hue",200);
        clearCounter();
}

//  initail call of rest function................................................................................................
rest();


//   belove two(2)  function are used to  changing minit time of Stop Watch....... ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
function counter5(){
    let val1=parseInt(mint10.textContent);
        if(val1===5){
            rest();
        }else{
            mint10.innerText=val1+1;
        }

}


function counter4(){
    let val1=parseInt(mint0.textContent);
        if(val1===9){
            counter5();
            mint0.innerText='0';
        }else{
            mint0.innerText=val1+1;
        }

}

//  belove two(2) fuction are used to changing the seconds time in Stop watch..............,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
function counter3(){
    let val1=parseInt(sec10.textContent);
        if(val1===5){
            counter4();
            sec10.innerText='0';
        }else{
            sec10.innerText=val1+1;
        }

}


function counter2(){
    let val1=parseInt(sec0.textContent);
        if(val1===9){
            counter3();
            sec0.innerText='0';
        }else{
            sec0.innerText=val1+1;
        }

}

// belove  function are used to changing the milliSeconds time in Stop Watch........,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
function counter1(){
    let val1=parseInt(mlsec10.textContent);
        if(val1===9){
            counter2();
            mlsec10.innerText='0';
        }else{
            mlsec10.innerText=val1+1;
        }

}


//  Creation of set Time out function variable globaly...,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
var counter;

// clearCounter is used to clearInterval of set Time out function......,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

function clearCounter(){
    clearInterval(counter);
}


//  this loop is used to traversing on buttons ..........,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
var str1;
for(let i=0;i<buttons.length;i++){
    // adding the EventListener to every button of Stop Watch........,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    buttons[i].addEventListener('click',function(){
        let str = buttons[i].textContent;
         //  setting up the setInterval in Stop Watch.............,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
        if(str1!=="START" && str==="START"){
                    counter=setInterval(() => {
                        var val=parseInt(mlsec0.textContent);
                        if(val===9){
                            counter1();
                            mlsec0.innerText='0';
                          }else{
                              mlsec0.innerText=val+1;
                          }  
                          const hue=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"));
                          document.documentElement.style.setProperty("--hue",hue+1*0.1);
                    }, 10);
                    str1="START";
        }
        // calling the clearInterval function...........,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
         if(str==="STOP"){
            
                clearCounter();
                str1="STOP";
               
        }
        //  calling the rest function of stop watch......,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
        if(str==="RESET"){
            str1="RESET";
            rest();
        }
    
    });

}



