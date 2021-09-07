
let cards = [
    "zebra.png" ,
    "elephant.png",
    "lion.png",
    "tiger.png",
    "giraffe.png",
    "monkey.png",
    "zebra.png" ,
    "elephant.png",
    "lion.png",
    "tiger.png",
    "giraffe.png",
    "monkey.png"
]

let randomCardList = [];

function cardAppear() {
    for (let index = 0; index < cards.length; index++) {
        document.getElementsByClassName("img")[index].src = cards[index];
        document.getElementsByClassName("img")[index].src= "what.jpg";
    }
    
}
function startGame(){

    random();

    for (let index = 0; index < randomCardList.length; index++) {
        document.getElementsByClassName("img")[index].src = randomCardList[index];
        document.getElementsByClassName("img")[index].style.opacity = "0";
    }
   
}
let playNormal = () => {

    let t = 30;
    let timer = setInterval(( ) =>  { 

        t-- ;
        if( t >= 0){
            var id = document.getElementById("timing");
            id.innerHTML = t + "sec"; 
        }
        if (t <= 20){
            id.style.color = "blue";
        }
        if (t <= 10){
            id.style.color = "red";
        }
        if(t == 0 || t <1){
            id.style.color = "black";
            show_Gameover();
            gOverSound();
        }
        
        }, 1000);
    
    
}

let playFast = () =>{


    let t = 50;
    let timer = setInterval( ( ) => { 

        t-- ;
        if( t >= 0){
            var id = document.getElementById("timing");
            id.innerHTML = t + "s"; 
    
        }
        if (t <= 35){
            id.style.color = "blue";
        }
        if (t <= 15){
            id.style.color = "red";
        }
        if(t == 0 || t <1){
            id.style.color = "black";
            show_Gameover();
            gOverSound();
        }
        
        }, 1000);
    
    
}

let playMoreFast = () =>{


    let t = 80;
    let timer = setInterval(( ) => { 

        t-- ;
        if( t >= 0){
            var id = document.getElementById("timing");
            id.innerHTML = t + "sec"; 
    
        }
        if (t <= 50){
            id.style.color = "yellow";
        }
        if (t <= 30){
            id.style.color = "blue";
        }
        if (t <= 10){
            id.style.color = "red";
        }
        if(t == 0 || t <1){
            id.style.color = "black";
            show_Gameover();
            gOverSound();
        }
        
        }, 1000);
    
    
}

var i = 0;

let random = () => {

    while (i < 12) {

        var r = Math.floor(Math.random() * cards.length);

        if (checkTwice(cards[r])) {
            random();
        } else {
            randomCardList.push(cards[r]);
            i++;
        }
    }

}
let checkTwice = (value) => {
    var count = 0;
    for (let index = 0; index < randomCardList.length; index++) {
        if (randomCardList[index] == value) {
            count++;
        }
    }

    if (count == 2) {
        return true;
    } else {
        return false;
    }
}

let firstClick = "";
let secondClick= "";
let  flp = true;
let clicked = [];
let matched = 0;

let flip = (obj) => {
    if(flp == true){

        if(clicked.length == 0){

           firstClick == obj.childNodes[1].src;
           alert(firstClick);
            clicked[0] =  obj.id;
            obj.childNodes[1].style.opacity = "1";

        } else if(clicked.length == 1){

            secondClick == obj.childNodes[1].src;
            alert(secondClick);
            clicked[1] = obj.id;
            obj.childNodes[1].style.opacity = "1";

            if( firstClick == secondClick){
                
                alert(firstClick);
                alert(secondClick);
                alert(clicked[0]);
                alert(clicked[1]);
                document.getElementById(clicked[0]).style.opacity = "1";
                document.getElementById(clicked[1]).style.opacity = "1";
                
                matched++;
                if(matched == 6){
                    show_Gamewin();
                    gWinSound();
                }

            }else {
               
                document.getElementById(clicked[0]).style.opacity = "0";
                document.getElementById(clicked[1]).style.opacity = "0";
                
     
            }
            firstClick = "";
            secondClick= "";
            clicked = [];
            flp = true;
            

        } else if(clicked.length  == 2){
            flp = false ; 
            
        }
        //flip(obj);
    }         
 } 
/*
let cardCheck = () => {
        
         if( clicked[0] == clicked[1]){
                
                matched.push(clicked[0]);
                matched.push(clicked[1]);
                
                obj.style.display = "none";
                obj.style.display="none";
                clicked = [];
                flp = true;
            }else {
               
                obj.childNodes[1].style.opacity = "0";
                obj.childNodes[1].style.opacity = "0";
                clicked = [];
                flp = true;
            }
            if(matched.length == 11){
                show_Gamewin();
            }
} 
*/



let show_Gameover = () =>{
    var a = document.getElementById("gameover");

    a.style.display = "block";
    a.style.position= "relative";
    a.style.transform= "translate(500px,-600px)";
}
let  show_Gamewin = () =>{
    
    var a = document.getElementById("gamewin");

    a.style.display = "block";
    a.style.position= "relative";
    a.style.transform= "translate(500px,-600px)";

}
let playAgain = () =>{

    location.reload();  
    document.getElementById("gameover").style.display = "none";
}
let gOverSound = () => {
    var audio = document.getElementById("gOverSound");
    audio.play();

} 
let gWinSound =() =>{
    var audio = document.getElementById("rightClick");
    audio.play();

} 










/*
let  flp = true;
let click_count = [];

function flip(obj){
    if(flp == true){

        obj.style.opacity = "1";

        if(click_count.length == 0){
              click_count[0] = obj.src;
        } else if(click_count.length == 1){
            click_count[1] = obj.src;
        }
        cardCheck();

    }else {
        alert("Click the card");
        
    } 
} 

function cardCheck(){

    if(click_count[0] ==  click_count[1]){

        rightClick();
        click_count[0].style.display="none";
        click_count[1].style.display="none";

    }else {
        alert ("Not Match!");
        wrongClick();
    }
    click_count = [];
} 


function wrongClick(){
    var audio = document.getElementById("wrongClick");
    audio.play();

} 


*/









