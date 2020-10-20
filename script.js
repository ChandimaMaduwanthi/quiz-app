const quizData = [
    {
        question: 'Which year were you born?',
        a: '1996',
        b: '1997',
        c: '1998',
        d: '1999',
        correct: 'c',
    },{
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a',
    },{
        question: 'Who is the President of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b',
    },{
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a',
    },{
        question: 'Which year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b',
    },{
        question: 'Name of the screen that recognizes touch input is?',
        a: 'Recog screen',
        b: 'Point Screen',
        c: 'Touch Screen',
        d: 'Android Screen',
        correct: 'c',
    },{
        question: 'Which one of these stores more data than a DVD ?',
        a: 'CD Rom',
        b: 'Floppy',
        c: 'Blue Ray Disk',
        d: 'Red Ray Disk',
        correct: 'c',
    },{
        question: 'Which one is the result of the output given by a computer?',
        a: 'Data',
        b: 'Istruction',
        c: 'Information',
        d: 'Excursion',
        correct: 'c',
    },{
        question: 'Which one of these also known as read/write memory ?',
        a: 'ROM',
        b: 'RAM',
        c: 'DVD',
        d: 'Hard Disk',
        correct: 'b',
    },{
        question: 'Which of the followings is true regarding the <caption> tag in html?',
        a: 'It defines a caption for table.',
        b: 'It can specify only one caption per table.',
        c: 'It must be inserted immediately after the <table>tag.',
        d: 'All of above',
        correct: 'd',
    }
];

const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answers = document.getElementsByName('answer');
const quiz = document.getElementById('quiz');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselected();
    const currentQuizData = quizData[currentQuiz];
    
    question.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

submitBtn.addEventListener('click' , () =>{
    const selected = getSelected();
    console.log(selected);

    if(selected){
        if(selected === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML=`<h2>You answered correctly ${score}/${quizData.length} questions.</h2>`;
            quiz.style.color = `rgb(30, 7, 160)`;
            quiz.style.padding = `50px`;
        } 
    }   
}
);

function deselected(){
    answers.forEach((answer) => {
            answer.checked = false;
    });
}

function getSelected(){

    let selected = undefined;

    answers.forEach((answer) => {
        if(answer.checked){
            selected = answer.id;
        }
    });

    return selected;
}