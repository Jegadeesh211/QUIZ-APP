var container=document.getElementById("container");
var question=document.getElementById("question");
var option1=document.getElementById("Option1");
var option2=document.getElementById("Option2");
var option3=document.getElementById("Option3");
var option4=document.getElementById("Option4");
var result=document.getElementById("result");
var round=document.getElementById('round')
var time=document.getElementById('time')
var score=0;
var time=60;
var currentQuestion=0;
var totalQuestion=questions.length;

function loadQuestion(index){
    var data=questions[index];
    question.textContent=(index + 1) +'.'+ data.question;
    option1.textContent=data.option1;
    option2.textContent=data.option2;
    option3.textContent=data.option3;
    option4.textContent=data.option4;
    
};



function loadNextQuestion(){
    var selectedoption=document.querySelector('#container input[type=radio]:checked ');
    if(!selectedoption){
        alert('Please select some option!!')
        return;   
    }
    if(questions[currentQuestion].answer==selectedoption.value){
        score+=10;
    }
    selectedoption.checked=false;
   
    currentQuestion ++;
    if(currentQuestion==totalQuestion-1){
        document.getElementById('nextQuestion').textContent='finish'
        
        
    }
    else{
        document.getElementById('nextQuestion').textContent='Next Question'

    }


    if(currentQuestion==totalQuestion){
        container.style.display='none';
        result.style.display=''
        round.style.display='none'
        document.getElementById('score').textContent='your score:'+ score;
        return;

    }
    
    loadQuestion(currentQuestion)
};

function restart(){
    score=0;
    currentQuestion=0;
    container.style.display='';
    result.style.display='none'
    round.style.display=''
    loadQuestion(currentQuestion)
    document.getElementById('nextQuestion').textContent='Next Question'
    time=0
}
loadQuestion(currentQuestion)

setTimeout(()=>{
    round.style.display=''
},2000)
var a=setInterval(()=>{
    if(currentQuestion+1){
        document.getElementById('time').textContent=time--
        if(time===-1){
            clearInterval(a)
            alert("Time up")
            score=0;
            currentQuestion=0;
            container.style.display='';
            result.style.display='none'
            loadQuestion(currentQuestion)
            return;
        } 
    }
   },1200)
  


