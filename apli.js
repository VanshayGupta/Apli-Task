//hardcoded candidate list
var candidates=[
	{
		question: 1,
		grade: '',
		comments: '',
		answer: 'https://www.youtube.com/embed/fJ9rUzIMcZQ'
	},
	{
		question: 2,
		grade: '',
		comments: '',
		answer: 'https://www.youtube.com/embed/lDK9QqIzhwk'
	},
	{
		question: 3,
		grade: '',
		comments: '',
		answer: 'https://www.youtube.com/embed/A_MjCqQoLLA'
	},
	{
		question: 4,
		grade: '',
		comments: '',
		answer: 'https://www.youtube.com/embed/RB-RcX5DS5A'
	},
	{
		question: 5,
		grade: '',
		comments: '',
		answer: 'https://www.youtube.com/embed/6hzrDeceEKc'
	},
]

var save=document.getElementById("save")
var commentsBox=document.getElementById("comments")
var gradingButton=document.getElementsByName("gradingButton")
var answer=document.getElementById("answer")
var i=0;
var clicked=false
var previous=document.getElementById("previous")
var next=document.getElementById("next")
var saved=0 
var labels=document.getElementsByClassName("labels")

//handling save button
save.addEventListener("click", function(){
	for(var j=0; j<gradingButton.length; j++){
		if(gradingButton[j].checked){
			candidates[i].grade=gradingButton[j].value;
			clicked=true
		}
	}
	if(clicked==true){
		candidates[i].comments=commentsBox.value;
		console.log(candidates[i])
		displayDetails();
		saved++;
	}	
})

//handling previous button
previous.addEventListener("click", function(){
	if(i>0){
		i--;
		for(var j=0;j<gradingButton.length; j++){
			gradingButton[j].checked=false
		}
		questionArray.innerHTML="Question "+candidates[i].question;
		commentsBox.value=candidates[i].comments;
		answer.setAttribute("src", candidates[i].answer)
		for(var j=0; j<gradingButton.length; j++){
			if(gradingButton[j].value==candidates[i].grade){
				console.log(gradingButton[j])
				gradingButton[j].checked=true;
			}
		}
	}
})

//handling next button
next.addEventListener("click", function(){
	if(i<candidates.length-1){
		i++;
		for(var j=0;j<gradingButton.length; j++){
			gradingButton[j].checked=false
		}
		questionArray.innerHTML="Question "+candidates[i].question;
		commentsBox.value=candidates[i].comments;
		answer.setAttribute("src", candidates[i].answer)
		for(var j=0; j<gradingButton.length; j++){
			if(gradingButton[j].value==candidates[i].grade){
				console.log(gradingButton[j])
				gradingButton[j].checked=true;
			}
		}
	}
})

//displaying next question after clicking save(transfers to result page only after clicking save on the last question)
function displayDetails(){
	if((i<candidates.length-1)){
		i++;
		for(var j=0;j<gradingButton.length; j++){
			gradingButton[j].checked=false
		}
		questionArray.innerHTML="Question "+candidates[i].question
		commentsBox.value=candidates[i].comments
		clicked=false
		answer.setAttribute("src", candidates[i].answer)
		for(var j=0; j<gradingButton.length; j++){
			if(gradingButton[j].value==candidates[i].grade){
				console.log(gradingButton[j])
				gradingButton[j].checked=true;
			}
		}
	}
	else{
		if(saved==candidates.length)
			displayResult();
	}
}

//displaying result page
function displayResult(){
	console.log(candidates)
	localStorage.setItem("candidates",JSON.stringify(candidates))
	window.location.replace("result.html");
}