const quizdata=[
    {
        question:"which language runs in a web browser",
        a: "Java",
        b:  "C",
        c: "python",
        d: "Javascript",
        correct:"d"
    },
    {
        question: "what does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    
    {
        question: "what year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "which HTML tag is used to define an internal stylesheets?",
        a: "<css>",
        b: "<script>",
        c: "<style>",
        d: "<linkl>",
        correct: "c"
    },
    {
        question: "which property is used to change background color in css?",
        a: "color",
        b: "bgcolor",
        c: "background-color",
        d: "background",
        correct: "c"
    }

];

const questionElement= document.getElementById('question');

const answerElements = document.querySelectorAll('.answer');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');
const resultDiv=document.getElementById('result');

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deSelectAnswer();

    const currentQuizData=quizdata[currentQuiz];
    questionElement.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

}

function getSelected(){
    let answer=undefined;
    answerElements.forEach((answerEl)=>{
         if(answerEl.checked){
            answer=answerEl.id
         }
    });
    return answer;
}



function deSelectAnswer(){
    answerElements.forEach((answerEl)=>{
        answerEl.checked=false;
    });
}


submitBtn.addEventListener("click",()=>{
     const answer=getSelected();
     if(answer){
          if(answer ===quizdata[currentQuiz].correct){
             score++;
          }
          currentQuiz++;
          if(currentQuiz < quizdata.length){
            loadQuiz();
          }else{
            resultDiv.innerText = `\u{1F389} You Scored ${score}/${quizdata.length}`;
            submitBtn.style.display='none';
          }
     }else{
        alert('please select an answer!');
     }
});