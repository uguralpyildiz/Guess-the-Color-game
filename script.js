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


function index() {
    function randomColor() {
        var r = Math.floor(Math.random() * 255)
        var g = Math.floor(Math.random() * 255)
        var b = Math.floor(Math.random() * 255)
        var randomColor = `rgb(${r}, ${g}, ${b})`
        return randomColor;
    }
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
    container.appendChild(harD)
    const harderMode = document.querySelector(".harder-mode")
    harderMode.style.display = "none"; 
    normal.addEventListener("click", () => {
        hard.classList.remove("active")
        normal.classList.add("active")
        harderMode.style.display = "none";
    })

    hard.addEventListener("click", () => {
        normal.classList.remove("active")
        hard.classList.add("active")
        harderMode.style.display = "flex";
    })


index()













