$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
	var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Where was the first pizza place in America?',
	possibleAnswers : ['A. Pizza Hut',
				 'B. Giordanos',
				 'C. Lombardis',
				 'D. Dominos'],
	flags : [false, false, true, false],
	answer : 'C. Lombardis'
};

var q2 = {
	question: 'In Home Alone, Kevin orders what kind of pizza for himself?',
	possibleAnswers: ['A. Pepperoni',
				 'B. Mushroom and Peppers',
				 'C. A lovely Cheese Pizza',
				 'D. nothing, and keep the change, ya filthy animal'],
	flags : [false, false, true, false],
	answer : 'C. A lovely Cheese Pizza'
};

var q3 = {
	question : 'Each person in America eats an average of how many pizza slices a year?',
	possibleAnswers : ['A. 20 slices',
				 'B. 46 slices',
				 'C. 90 slices',
				 'D. 1000 slices'],
	flags : [false, true, false, false],
	answer : 'B. 46 slices'
};

var q4 = {
	question : 'What is the most popular night to eat pizza?',
	possibleAnswers : ['A. Thursday',
				 'B. Friday',
				 'C. Saturday',
				 'D. Sunday'],
	flags : [false, false, true, false],
	answer : 'A. Saturday'
};

var q5 = {
	question : 'Which one of these pizzas did the teenage mutant ninja turtles order?',
	possibleAnswers : ['A. mashed potatoes and bacon',
				 'B. Jelly bean and sausage',
				 'C. Pepperoni and caramel',
				 'D. Anchovies and pineapple'],
	flags : [false, true, false, false],
	answer : 'B. Jelly beans and sausage'
};

var q6 = {
	question : 'How many gallons of milk does Pizza Hut use a year for cheese?',
	possibleAnswers : ['A. 1 million gallons',
				 'B. 50 million gallons',
				 'C. 130 million gallons',
				 'D. 360 million gallons'],
	flags : [false, false, false, true],
	answer : 'D. 360 million gallons'
};

var q7 = {
	question : 'The most expensive pizza, made with 24-karat gold, stilton cheese, foie gras, truffles and caviar costs how much?',
	possibleAnswers : ['A. $500',
				 'B. $1000',
				 'C. $2000',
				 'D. $6000'],
	flags : [false, false, true, false],
	answer : 'C. $2000'
};



var questionArray = [q1, q2, q3, q4, q5, q6, q7];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});
