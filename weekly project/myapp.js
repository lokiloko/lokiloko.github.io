var highScore =[{name: "", score: "0"},{name: "", score: "0"},{name: "", score: "0"}];
var notation = ['+','-','*','/'];
var level = 0;
var timer;

var intro = document.getElementById('intro');
var main = document.getElementById('main');
var end = document.getElementById('end');
//Object data type
var person = {
	name : "",
	score : 0
};

function introduction(){
	document.getElementById('name').value = "";
	document.getElementById('benar').innerHTML = "";
	intro.style.display = 'block';
	main.style.display = 'none';
	end.style.display= 'none';
	resetHighScore();
}

function resetHighScore(){
	document.getElementById('high1').innerHTML = highScore[0].score;
	document.getElementById('high1name').innerHTML = highScore[0].name;
	document.getElementById('high2').innerHTML = highScore[1].score;
	document.getElementById('high2name').innerHTML = highScore[1].name;
	document.getElementById('high3').innerHTML = highScore[2].score;
	document.getElementById('high3name').innerHTML = highScore[2].name;
}

function checkName(){
	var name = document.getElementById('name').value;
	if(name.length){
		person.name = name;
		return true;
	}else{
		return false;
	}
}

function startGame(){
	if(checkName()){
		intro.style.display = 'none';
		main.style.display = 'block';
		alert('Hello, '+person.name+' get ready for the game! ');
		level = 0;
		countDown(60);
		nextQuestion(level);
	}
	else{
		alert('You have no name? :(');
	}
}

function nextQuestion(level){
	document.getElementById('answer').value = "";
	var symbol;
	var number1;
	var number2;
	if(level<5){
		symbol = notation[randomNumber(2,0)];
		number1 = randomNumber(10,0);
		number2 = randomNumber(10,0);
		if(symbol === '-'){
			while(1){
				if(number2 > number1){
					number2 = randomNumber(10,0);
				}
				else{
					break;
				}
			}
		}
	}
	else if(level <10){
		symbol = notation[randomNumber(4,0)];
		number1 = randomNumber(10,1);
		number2 = randomNumber(10,1);
		if(symbol === '-'){
			while(1){
				if(number2 > number1){
					number2 = randomNumber(10,1);
				}
				else{
					break;
				}
			}
		}
		else if(symbol === '/'){
			while(1){
				if(number1 % number2 !== 0 ){
					number2 = randomNumber(10,0);
				}
				else{
					break;
				}
			}
		}
	}
	else if(level <15){
		symbol = notation[randomNumber(4,0)];
		number1 = randomNumber(10,10);
		number2 = randomNumber(10,10);
		if(symbol === '-'){
			while(1){
				if(number2 > number1){
					number2 = randomNumber(10,10);
				}
				else{
					break;
				}
			}
		}
		else if(symbol === '/'){
			while(1){
				if(number1 % number2 !== 0 ){
					number2 = randomNumber(10,10);
				}
				else{
					break;
				}
			}
		}
	}
	else if(level <20){
		symbol = notation[randomNumber(4,0)];
		number1 = randomNumber(10,20);
		number2 = randomNumber(10,20);
		if(symbol === '-'){
			while(1){
				if(number2 > number1){
					number2 = randomNumber(10,20);
				}
				else{
					break;
				}
			}
		}
		else if(symbol === '/'){
			while(1){
				if(number1 % number2 !== 0 ){
					number2 = randomNumber(10,20);
				}
				else{
					break;
				}
			}
		}
	}
	else{
		symbol = notation[randomNumber(4,0)];
		number1 = randomNumber(100,25);
		number2 = randomNumber(100,25);
		if(symbol === '-'){
			while(1){
				if(number2 > number1){
					number2 = randomNumber(100,25);
				}
				else{
					break;
				}
			}
		}
		else if(symbol === '/'){
			while(1){
				if(number1 % number2 !== 0 ){
					number2 = randomNumber(100,25);
				}
				else{
					break;
				}
			}
		}
	}
	document.getElementById('number1').value = number1;
	document.getElementById('number2').value = number2;
	document.getElementById('notation').value = symbol;
}

function randomNumber(start,end){
	var result = Math.floor((Math.random() * start) + end);
	return result;
}

function calculateAnswer(number1,number2,notation){
	switch(notation){
		case '+':
			return number1 + number2;
		break;
		case '-':
			return number1 - number2;
		break;
		case '*':
			return number1 * number2;
		break;
		case '/':
			return number1 / number2;
		break;
	}
}

function checkAnswer(){
	var number1 = parseInt(document.getElementById('number1').value);
	var number2 = parseInt(document.getElementById('number2').value);
	var notation = document.getElementById('notation').value;
	var answer = parseInt(document.getElementById('answer').value);
	var realAnswer = calculateAnswer(number1,number2,notation);
	
	document.getElementById('benar').innerHTML = realAnswer;
	if(realAnswer === answer){
		
		document.getElementById('benar').style.color = 'green';
		level++;
		nextQuestion(level);
	}
	else{
		document.getElementById('benar').style.color = 'red';
		endGame();
	}
}

function endGame(){
	var score = document.getElementById('score');
	score.innerHTML = level;
	person.score = level;
	intro.style.display = 'none';
	main.style.display = 'block';
	end.style.display = 'block';
	for(var i=0;i<3;i++){
		if(parseInt(level)>parseInt(highScore[i].score)){
			if(i === 0){
				highScore[i+2].score = highScore[i+1].score;
				highScore[i+2].name = highScore[i+1].name;
				highScore[i+1].score = highScore[i].score;
				highScore[i+1].name = highScore[i].name;
			}
			else if(i === 1){
				highScore[i+1].score = highScore[i].score;
				highScore[i+1].name = highScore[i].name;
			}
			highScore[i].score = level;
			highScore[i].name = person.name;
			break;
		}
	}
	document.getElementById("displayDiv").innerHTML = "";
	clearInterval(timer);
}

function restartGame(){
	introduction();
}

function countDown(i) {
    timer = setInterval(function () {
        document.getElementById("displayDiv").innerHTML = "Time: " + i;
        i--;
		if(i ==0){
			clearInterval(timer);
			endGame();
		}		//if i is 0, then stop the interval
    }, 1000);
}

introduction();