alert("🔥 50 Questions • 5 Levels 🔥\n\n• Level 1 : 20 seconds\n• Level 2 : 20 seconds\n• Level 3 : 20 seconds\n• Level 4 : 30 seconds\n• Level 5 : 40 seconds\n\n• Play all levels to win a GIFT\n\n\n-------------------------------------------\n• Player! Comment Your Gift... 😍")





const Questions = [

    //LEVEL 1 Questions
    [{ 

        id: 0, 

        q: "12+10+21", 

        a: [{ text: "33", isCorrect: false }, 

            { text: "43", isCorrect: true }, 

            { text: "34", isCorrect: false }, 

            { text: "42", isCorrect: false } 

        ] 
    }, 

    { 

        id: 1, 

        q: "78-87", 

        a: [{ text: "10", isCorrect: false }, 

            { text: "-10", isCorrect: false }, 

            { text: "-9", isCorrect: true }, 

            { text: "9", isCorrect: false } 

        ] 

  

    }, 

    { 

        id: 2, 

        q: "11*11", 

        a: [{ text: "222", isCorrect: false }, 

            { text: "121", isCorrect: true }, 

            { text: "112", isCorrect: false }, 

            { text: "131", isCorrect: false }
      ]  
    },
    
      { 

        id: 3, 

        q: "78 % 8", 

        a: [{ text: "0", isCorrect: false }, 

            { text: "7", isCorrect: false }, 

            { text: "8", isCorrect: false }, 

            { text: "6", isCorrect: true } 

        ] 

    },
    
       { 

        id: 4, 

        q: "999 + 79 + 7", 

        a: [{ text: "1085", isCorrect: true }, 
     
            { text: "1086", isCorrect: false }, 

            { text: "1076", isCorrect: false }, 

            { text: "1075", isCorrect: false } 

        ] 

  

    },
    
    
      { 

        id: 5, 

        q: "538 - 99 - 1", 

        a: [{ text: "483", isCorrect: false }, 

            { text: "438", isCorrect: true }, 

            { text: "440", isCorrect: false }, 

            { text: "448", isCorrect: false } 

        ] 

  

    },
    
    
       { 

        id: 6, 

        q: "29 * 15", 

        a: [{ text: "335", isCorrect: false }, 

            { text: "345", isCorrect:false}, 
            { text: "435", isCorrect: true }, 

            { text: "445", isCorrect: false } 

        ] 

  

    },
    
    { 

        id: 7, 

        q: "245 / 5", 

        a: [{ text: "48", isCorrect: false }, 

            { text: "49", isCorrect: true }, 

            { text: "47", isCorrect: false }, 

            { text: "45", isCorrect: false } 

        ] 

  

    },
    
    
     { 

        id: 8, 

        q: "88 % 11", 

        a: [{ text: "0", isCorrect: true }, 

            { text: "1", isCorrect: false }, 

            { text: "8", isCorrect: false }, 

            { text: "88", isCorrect: false } 

        ] 

  

    },
    
    { 

        id: 9, 

        q: "360 / 18", 

        a: [{ text: "2", isCorrect: false }, 

            { text: "12", isCorrect: false }, 

            { text: "30", isCorrect: false }, 

            { text: "20", isCorrect: true } 

        ] 
    }
], 


        // Level 2 Questions
[{ 

        id: 0, 

        q: "23 is divisible by", 

        a: [{ text: "12", isCorrect: false }, 

            { text: "7", isCorrect: false }, 

            { text: "23", isCorrect: true }, 

            { text: "3", isCorrect: false } 

        ] 

  

    }, 

    { 

        id: 1, 

        q: "121 is divisible by", 

        a: [{ text: "10", isCorrect: false }, 

            { text: "21", isCorrect: false }, 

            { text: "11", isCorrect: true }, 

            { text: "12", isCorrect: false } 

        ] 

  

    }, 

    { 

        id: 2, 

        q: "123 is divisible by", 

        a: [{ text: "2", isCorrect: false }, 

            { text: "7", isCorrect: false }, 

            { text: "9", isCorrect: false }, 

            { text: "3", isCorrect: true }
      ]  
    },
    
      { 

        id: 3, 

        q: "√100", 

        a: [{ text: "0", isCorrect: false }, 

            { text: "10", isCorrect: true }, 

            { text: "5", isCorrect: false }, 

            { text: "100", isCorrect: false } 

        ] 

    },
    
       { 

        id: 4, 

        q: "√256", 

        a: [{ text: "8", isCorrect: false }, 
     
            { text: "16", isCorrect: true }, 

            { text: "26", isCorrect: false }, 

            { text: "12", isCorrect: false } 

        ] 

  

    },
    
    
      { 

        id: 5, 

        q: "cube root of 27", 

        a: [{ text: "3", isCorrect: true }, 

            { text: "2", isCorrect: false }, 

            { text: "9", isCorrect: false }, 

            { text: "1", isCorrect: false } 

        ] 

  

    },
    
    
       { 

        id: 6, 

        q: "cube root of 729", 

        a: [{ text: "7", isCorrect: false }, 

            { text: "17", isCorrect: false }, 

            { text: "9", isCorrect: true }, 

            { text: "19", isCorrect: false } 

        ] 

  

    },
    
    { 

        id: 7, 

        q: "floor(2.3)", 

        a: [{ text: "2", isCorrect: true }, 

            { text: "3", isCorrect: false }, 

            { text: "2.0", isCorrect: false }, 

            { text: "0.3", isCorrect: false } 

        ] 

  

    },
    
    
     { 

        id: 8, 

        q: "ceil(0.5)", 

        a: [{ text: "0", isCorrect: false }, 

            { text: "5", isCorrect: false }, 

            { text: "1", isCorrect: true }, 

            { text: "2", isCorrect: false } 

        ] 

  

    },
    
    { 

        id: 9, 

        q: "floor(1.2 + ceil(12.5))", 

        a: [{ text: "12", isCorrect: false }, 

            { text: "13", isCorrect: false }, 

            { text: "14", isCorrect: true }, 

            { text: "15", isCorrect: false } 

        ] 
    }
],

    // Level 3 Questions

[{ 

        id: 0, 

        q: "100 is what percentage of 300", 

        a: [{ text: "33.33", isCorrect: true }, 

            { text: "30", isCorrect: false }, 

            { text: "42", isCorrect: false }, 

            { text: "27", isCorrect: false } 

        ] 

  

    }, 

    { 

        id: 1, 

        q: "Convert 0.175 into percentage", 

        a: [{ text: "17.50%", isCorrect: true }, 

            { text: "1.75%", isCorrect: false }, 

            { text: "175%", isCorrect: false }, 

            { text: "1750%", isCorrect: false } 

        ] 

  

    }, 

    { 

        id: 2, 

        q: "Convert 1/5 into percentage", 

        a: [{ text: "5%", isCorrect: false }, 

            { text: "15%", isCorrect: false }, 

            { text: "20%", isCorrect: true }, 

            { text: "50%", isCorrect: false }
      ]  
    },
    
      { 

        id: 3, 

        q: "LCM of (5, 45, 10) = ?", 

        a: [{ text: "5", isCorrect: false }, 

            { text: "45", isCorrect: false }, 

            { text: "90", isCorrect: true }, 

            { text: "10", isCorrect: false } 

        ] 

    },
    
       { 

        id: 4, 

        q: "HCF of (2, 4, 6) is:", 

        a: [{ text: "2", isCorrect: true }, 
     
            { text: "4", isCorrect: false }, 

            { text: "6", isCorrect: false }, 

            { text: "8", isCorrect: false } 

        ] 

  

    },
    
    
      { 

        id: 5, 

        q: "LCM of (24, 36, 48) is equal to:", 

        a: [{ text: "140", isCorrect: false }, 

            { text: "144", isCorrect: true }, 

            { text: "146", isCorrect: false }, 

            { text: "148", isCorrect: false } 

        ] 

  

    },
    
    
       { 

        id: 6, 

        q: "The product of all factors of 6 is equal to", 

        a: [{ text: "42", isCorrect: false }, 

            { text: "36", isCorrect: true }, 

            { text: "54", isCorrect: false }, 

            { text: "48", isCorrect: false } 

        ] 

  

    },
    
    { 

        id: 7, 

        q: "Which number is the factor of every number?", 

        a: [{ text: "0", isCorrect: false }, 

            { text: "2", isCorrect: false }, 

            { text: "1", isCorrect: true }, 

            { text: "3", isCorrect: false } 

        ] 

  

    },
    
    
     { 

        id: 8, 

        q: "Simplify the ratio 4:26.", 

        a: [{ text: "8/52", isCorrect: false }, 

            { text: "52/8", isCorrect: false }, 

            { text: "13/2", isCorrect: false }, 

            { text: "2/13", isCorrect: true } 

        ] 

  

    },
    
    { 

        id: 9, 

        q: "Simplify <br> 12-(3+(3*4)-4)", 

        a: [{ text: "0", isCorrect: false }, 

            { text: "1", isCorrect: true }, 

            { text: "-1", isCorrect: false }, 

            { text: "2", isCorrect: false } 

        ] 
    }
], 


    // Level 4 Questions
[{ 

        id: 0, 

        q: "Average of first 3 prime numbers", 

        a: [{ text: "3", isCorrect: false }, 

            { text: "3.33", isCorrect: true }, 

            { text: "5", isCorrect: false }, 

            { text: "5.33", isCorrect: false } 

        ] 

  

    }, 

    { 

        id: 1, 

        q: "Average of 1, 3, 5, 7", 

        a: [{ text: "4", isCorrect: true }, 

            { text: "5", isCorrect: false }, 

            { text: "16", isCorrect: false }, 

            { text: "12", isCorrect: false } 

        ] 

  

    }, 

    { 

        id: 2, 

        q: "Area of circle if radius = 2", 

        a: [{ text: "12.56", isCorrect: true }, 

            { text: "2", isCorrect: false }, 

            { text: "13", isCorrect: false }, 

            { text: "3.14", isCorrect: false }
      ]  
    },
    
      { 

        id: 3, 

        q: "Formula for area of square, (a is the side length)", 

        a: [{ text: "a*a*a", isCorrect: false }, 

            { text: "2*a", isCorrect: false }, 

            { text: "a*a", isCorrect: true }, 

            { text: "3*a", isCorrect: false } 

        ] 

    },
    
       { 

        id: 4, 

        q: "Perimeter of circle if radius is 12", 

        a: [{ text: "74.4", isCorrect: false }, 
     
            { text: "314", isCorrect: false }, 

            { text: "75.4", isCorrect: true }, 

            { text: "31.4", isCorrect: false } 

        ] 

  

    },
    
    
      { 

        id: 5, 

        q: "Perimeter of triangle is", 

        a: [{ text: "a+b+c", isCorrect: true }, 

            { text: "a*b*c", isCorrect: false }, 

            { text: "(a+b+c)/3", isCorrect: false }, 

            { text: "(a+b)/c", isCorrect: false } 

        ] 

  

    },
    
    
       { 

        id: 6, 

        q: "Volumn of cube if edge length is 4", 

        a: [{ text: "64", isCorrect: true }, 

            { text: "36", isCorrect: false }, 

            { text: "128", isCorrect: false }, 

            { text: "12", isCorrect: false } 

        ] 

  

    },
    
    { 

        id: 7, 

        q: "Volumn of sphere if radius is 1", 

        a: [{ text: "3.14", isCorrect: false }, 

            { text: "4.19", isCorrect: true }, 

            { text: "4", isCorrect: false }, 

            { text: "1.3", isCorrect: false } 

        ] 

  

    },
    
    
     { 

        id: 8, 

        q: "Surface Area of sphere if radius is 2", 

        a: [{ text: "50.27", isCorrect: true }, 

            { text: "12.57", isCorrect: false }, 

            { text: "48", isCorrect: false }, 

            { text: "27.50", isCorrect: false } 

        ] 

  

    },
    
    { 

        id: 9, 

        q: "Surface area of cube is, (a is the edge length)", 

        a: [{ text: "a*a", isCorrect: false }, 

            { text: "a*a*a", isCorrect: false }, 

            { text: "3*a*a", isCorrect: false }, 

            { text: "6*a*a", isCorrect: true } 

        ] 
    }
], 


    // Level 5 Questions
[{ 

        id: 0, 

        q: "1, 3, 5, 7, ___?", 

        a: [{ text: "9", isCorrect: true }, 

            { text: "11", isCorrect: false }, 

            { text: "10", isCorrect: false }, 

            { text: "8", isCorrect: false } 

        ] 

  

    }, 

    { 

        id: 1, 

        q: "6, 13, 20, 27, ___?", 

        a: [{ text: "44", isCorrect: false }, 

            { text: "33", isCorrect: false }, 

            { text: "34", isCorrect: true }, 

            { text: "30", isCorrect: false } 

        ] 

  

    }, 

    { 

        id: 2, 

        q: "5, 25, 125, 625, ___?", 

        a: [{ text: "725", isCorrect: false }, 

            { text: "1225", isCorrect: false }, 

            { text: "3125", isCorrect: true }, 

            { text: "2525", isCorrect: false }
      ]  
    },
    
      { 

        id: 3, 

        q: "3, 4, 10, 33, 136, ___?", 

        a: [{ text: "586", isCorrect: false }, 

            { text: "685", isCorrect: true }, 

            { text: "690", isCorrect: false }, 

            { text: "265", isCorrect: false } 

        ] 

    },
    
       { 

        id: 4, 

        q: "2, 5, 26, ____, 107", 

        a: [{ text: "52", isCorrect: false }, 
     
            { text: "53", isCorrect: true }, 

            { text: "58", isCorrect: false }, 

            { text: "54", isCorrect: false } 

        ] 

  

    },
    
    
      { 

        id: 5, 

        q: "2, 4, 16, ____, 65536", 

        a: [{ text: "32", isCorrect: false }, 

            { text: "64", isCorrect: false }, 

            { text: "128", isCorrect: false }, 

            { text: "256", isCorrect: true } 

        ] 

  

    },
    
    
       { 

        id: 6, 

        q: "1.5, 3.0, 4.5, ____, 7.5", 

        a: [{ text: "6.5", isCorrect: false }, 

            { text: "5.5", isCorrect: false }, 

            { text: "6.0", isCorrect: true }, 

            { text: "5.0", isCorrect: false } 

        ] 

  

    },
    
    { 

        id: 7, 

        q: "Sum of series 1, 5, 9, 13, 17 is", 

        a: [{ text: "44", isCorrect: false }, 

            { text: "45", isCorrect: true }, 

            { text: "65", isCorrect: false }, 

            { text: "55", isCorrect: false } 

        ] 

  

    },
    
    
     { 

        id: 8, 

        q: "Sum of series 2, 4, 8, 16, 32 is", 

        a: [{ text: "62", isCorrect: true }, 

            { text: "64", isCorrect: false }, 

            { text: "50", isCorrect: false }, 

            { text: "50.5", isCorrect: false } 

        ] 

  

    },
    
    { 

        id: 9, 

        q: "Sum of Series 11, 22, 33, 44, 55 is", 

        a: [{ text: "150", isCorrect: false }, 

            { text: "160", isCorrect: false }, 

            { text: "155", isCorrect: false }, 

            { text: "165", isCorrect: true } 

        ] 
    }
]
];

const level_HTML = `<div class="level"> 
                <div class="level-name">Level 1 🥚</div>
                <div class="desp">• Addition, Subtraction, Multiplication, Division, Modulus</div>
            </div>
            <div class="level"> 
                <div class="level-name">Level 2 🐣</div>
                <div class="desp">• Divisibility, Square root, Cube root, floor and ceil value</div>
            </div>
            <div class="level"> 
                <div class="level-name">Level 3 🐤</div>
                <div class="desp">• Percentage, LCM, HCF, Factors, Ratio, Simplification</div>
            </div>
            <div> 
                <div class="level-name">Level 4 🐥</div>
                <div class="desp">• Average, Area, Perimeter, Volumn, Surface Area</div>
            </div>
            <div class="level"> 
                <div class="level-name">Level 5 🐔</div>
                <div class="desp">• Next term of series, missing term of series, sum of series</div>
            </div>`;




const questions_HTML = `<div class="uploading-bar" id="uploading-bar">
                <div class="loder" id="loader"></div>
            </div>
            
            <div id="que-cnt">
                
            </div>
            
            <div class="opt-cnt" id="opt-cnt">
                <div class="opt-sec">
                    <div class="options" id="opt-0" onclick="matchAnswer(this.id)"></div>
                <div class="options" id="opt-1" onclick="matchAnswer(this.id)"></div>
                </div>
                
                <div class="opt-sec">
                    <div class="options" id="opt-2" onclick="matchAnswer(this.id)"></div>
                <div class="options" id="opt-3" onclick="matchAnswer(this.id)"></div>
                </div>
                
            </div>`;




const bottom_questions_HTML = `<div class="bottom-btn" onclick="endGame()" id="endBtn">End</div>
        <div class="bottom-btn" onclick="skipper()" id="skipBtn">&nbsp;Skip&nbsp;</div>`;



const bottom_start_HTML = `<div class="letsgo" onclick="startQuestioning()">Let's go <span class="pen" >🖋️</span></div>`;





let qIndex = [0,1,2,3,4,5,6,7,8,9];
let aIndex = [0,1,2,3];
let gameLevel = -1;

let qCounter = 0;
let aCounter = 0;
let totalPoints = 0;
let levelPoints = 0;

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}


function startQuestioning() {
    document.getElementById("main").innerHTML = questions_HTML;
    
    document.getElementById("bottom").innerHTML = bottom_questions_HTML;
    
    shuffle(qIndex);
    gameLevel++;
    qCounter = 0;
    aCounter = 0;
    levelPoints = 0;
    timeleft = 0;
    
    clearInterval(downloadTimer);
    
    if(gameLevel <= 2){
        downloadTimer = setInterval(myFunc, 20000);  
    document.getElementById("loader").style.animationDuration = "20s";
    }
    
    if(gameLevel == 3){
      downloadTimer = setInterval(myFunc, 25000);  
      document.getElementById("loader").style.animationDuration = "25s";
    }
    
    if(gameLevel == 4){
      downloadTimer = setInterval(myFunc, 40000);  
      document.getElementById("loader").style.animationDuration = "40s";
    }
    
    
    
    generateAnswer(qIndex[0]);
}




function generateAnswer(index){
   
   
    document.getElementById("que-cnt").innerHTML = Questions[gameLevel][index].q;
    
    shuffle(aIndex);
    for(let i=0 ; i<4 ; i++){
        document.getElementById(`opt-${i}`).innerHTML = Questions[gameLevel][index].a[aIndex[i]].text;
        document.getElementById(`opt-${i}`).style.backgroundColor = "#99ccff";
    }
    
    skipBtnStyle("&nbsp;Skip&nbsp;", "#222222", "grey");
    
    document.getElementById("loader").style.width ="0%";
    
    selected = false;
}







let selected = false;
function matchAnswer(id) {
   if(!selected){
       lastInt = parseInt(id.charAt(id.length - 1));   
       if(Questions[gameLevel][qIndex[qCounter]].a[aIndex[lastInt]].isCorrect === true){ document.getElementById(id).style.backgroundColor = "#00e600";
   levelPoints += 1;
   totalPoints += 1;
   } else {
       document.getElementById(id).style.backgroundColor = "#ff0000";
   }
   
   skipBtnStyle("Next", "grey", "black");
       selected = true;
   }
    
}


function viewScore(){

    let emo = "";
    if(levelPoints == 10)
        emo = scoreEmo[0];
    else if(levelPoints > 6)
        emo = scoreEmo[1];
    else if(levelPoints > 4)
        emo = scoreEmo[2];
    else if(levelPoints > 2)
        emo = scoreEmo[3];
    else
        emo = scoreEmo[4];

    document.getElementById("que-cnt").innerHTML = `Score: ${levelPoints + " " + emo}
    
            <br> 

            <span style="font-size:1.5rem;"><span>
    `;
    
    document.getElementById("opt-cnt").innerHTML = ``;
    
    document.getElementById("bottom").innerHTML = `<div class="bottom-btn" onclick="startQuestioning()" id="levelBtn">Level ${gameLevel+2}</div>`;
}


function skipBtnStyle(text, back, col){
    document.getElementById("skipBtn").innerHTML = text;
    document.getElementById("skipBtn").style.backgroundColor = back;
    document.getElementById("skipBtn").style.color = col;
}


function endGame() {
clearInterval(downloadTimer);

document.getElementById("uploading-bar").style.visibility = "hidden";

    if(gameLevel == 4) {
    
    let msg = "";
    let gI = Math.floor((Math.random() * 15) + 0);;
    if(totalPoints > 40){
        msg = `Points: ${totalPoints}<br> <span class="end-msg">That's wonderful 😎</span> <span class="gift"> ${giftEmo[gI]}</span>`;
    } else if(totalPoints > 30) {
        msg = `Points: ${totalPoints}<br> <span class="end-msg">Woohoo! You are rock! 😍</span> <span class="gift"> ${giftEmo[gI]}</span>`;
    } else if(totalPoints > 20) {
        msg = `Points: ${totalPoints}<br> <span class="end-msg">Good for you! ☺️</span> <span class="gift">${giftEmo[gI]}</span>`;
    } else if(totalPoints > 10) {
        msg = `Points: ${totalPoints}<br> <span class="end-msg">I knew you could do better that now! 🙂</span> <span class="gift"> ${giftEmo[gI]}</span>`;
    } else {
        msg = `Points: ${totalPoints}<br> <span class="end-msg">Hey! 🥺 That was just basic math </span><span class="gift"> ${giftEmo[gI]}</span>`;
 }
        document.getElementById("que-cnt").innerHTML = msg;
        document.getElementById("opt-cnt").innerHTML = ``;
        document.getElementById("bottom").innerHTML = ``;
    } else {
        viewScore();
    }
}

function gotoHome() {
    gameLevel = -1;
    totalPoints = 0; document.getElementById("main").innerHTML = level_HTML;
    document.getElementById("bottom").innerHTML = bottom_start_HTML;
}

let scoreEmo = ["😎", "😊", "🙂", "😐", "😟"];

let giftEmo = ["👕", "👔","👑","👒","🖋️", "🎸", "💻", "🧸", "🛹", "🏹", "🎧", "🔭", "🚀", "🎈", "📸", "☂️"];


 var timeleft = 0;
function myFunc(){
    
    
    if(timeleft == 0){   
           timeleft = 10;
     }   
     skipper();
}

var downloadTimer;

function skipper(){
    
    qCounter += 1;
    timeleft -= 1;
    document.getElementById("uploading-bar").innerHTML ="";
       
       document.getElementById("uploading-bar").innerHTML = `<div class="loder" id="loader"></div>`;
       
    clearInterval(downloadTimer);
    if(gameLevel <= 2){
        downloadTimer = setInterval(myFunc, 20000);  
    document.getElementById("loader").style.animationDuration = "20s";
    }
    
    if(gameLevel == 3){
      downloadTimer = setInterval(myFunc, 25000);  
      document.getElementById("loader").style.animationDuration = "25s";
    }
    
    if(gameLevel == 4){
      downloadTimer = setInterval(myFunc, 40000);  
      document.getElementById("loader").style.animationDuration = "40s";
    }
    
    
    if(qCounter < 10){
       
        generateAnswer(qIndex[qCounter]);
     }
    else {
        if(gameLevel == 4)
            endGame();
        else{
        document.getElementById("uploading-bar").style.visibility = "hidden";
           viewScore(); 
        }
    }
}
