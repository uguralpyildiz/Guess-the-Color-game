const quest = document.querySelector(".quest")
const answers = document.querySelectorAll(".ans")
const overlay = document.querySelector(".overlay")
const inner = document.querySelector(".inner")
const normal = document.querySelector(".normal")
const hard = document.querySelector(".hard")
const container = document.querySelector(".container")
var correctScore = 0;
var falseScore = 0;
var answer;
const score = document.querySelectorAll(".text")
normal.style.pointerEvents = "none"
hard.style.pointerEvents = "auto"

function index() {
    function randomColor() {
        var r = Math.floor(Math.random() * 255)
        var g = Math.floor(Math.random() * 255)
        var b = Math.floor(Math.random() * 255)
        var randomColor = `rgb(${r}, ${g}, ${b})`
        return randomColor;
    }
    //hard mode


    const harD = document.createElement("div")
    harD.classList = "harder-mode"
    harD.innerHTML = `     
            <div class="ans">
            
            </div>
            <div class="ans">
            
            </div>
            <div class="ans">
            
            </div>
    `;
    hard.addEventListener("click", ()=>{
        hard.style.pointerEvents = "none"
        normal.style.pointerEvents = "auto"
        normal.classList.remove("active")
        hard.classList.add("active")
        function hardmod() {
            container.appendChild(harD)
            randomer()     
        }
        hardmod()
    })

    function randomer() {
        const answers = document.querySelectorAll(".ans")
        var correctAnswer = quest.innerHTML = randomColor();
        for (let i = 0; i < answers.length; i++) {
            answers[i].style.backgroundColor = randomColor();
        }
        var shuffle = Math.floor(Math.random() * answers.length)
        answers[shuffle].style.backgroundColor = correctAnswer;

        for (let i = 0; i < answers.length; i++) {
            answers[i].addEventListener("click", () => {
                if (answers[i].style.backgroundColor === correctAnswer) {
                    answer = true;
                } else {
                    answer = false;
                }
                setTimeout(() => {
                    answer = undefined;
                }, 50);
            })
        }  
    }  

    randomer()

    normal.addEventListener("click", () => {
        container.removeChild(harD)
        hard.style.pointerEvents = "auto"
        normal.style.pointerEvents = "none"
        normal.classList.add("active")
        hard.classList.remove("active")
        randomer()   
    })

    
}




window.addEventListener("click", () => {    
    if (answer === true) {
        inner.classList.remove("wrong")
        inner.classList.add("true")
        overlay.style.display = "flex";
        inner.innerHTML = "CORRECT ANSWER";
        correctScore++;
        setTimeout(() => {
            overlay.style.display = "none";
            index()
        }, 1000);
    }
    if (answer === false) {    
        inner.classList.remove("true")
        inner.classList.add("wrong")
        overlay.style.display = "flex";
        inner.innerHTML = "WRONG ANSWER";
        falseScore++;
        setTimeout(() => {
            overlay.style.display = "none";
            index()        
        }, 1000);
    }
    
    score[0].innerHTML = "Correct: " + correctScore;
    score[1].innerHTML = "False: " + falseScore;
})





index()













