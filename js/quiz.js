// Defining quiz questions and answers
var dogQuestions = [
    {
        question: "How many dogs survived the Titanic sinking?",
        answers: {
            a: '0',
            b: '5',
            c: '3'
        },
        correctAnswer: 'c'
    },
    {
        question: "What's the world record for the tallest dog?",
        answers: {
            a: '30 inches',
            b: '44 inches',
            c: '57 inches'
        },
        correctAnswer: 'b'
    },
    {
        question: "What percentage of all Dalmations are deaf in one ear?",
        answers: {
            a: '10%',
            b: '20%',
            c: '30%'
        },
        correctAnswer: 'c'
    },
    {
        question: "What's the heaviest breed of dogs?",
        answers: {
            a: 'Mastiff',
            b: 'Great Dane',
            c: 'St. Bernard'
        },
        correctAnswer: 'a'
    },
    {
        question: "How many times stronger is a dog's sense of smell compared to a humans?",
        answers: {
            a: '2000',
            b: '5000',
            c: '10000'
        },
        correctAnswer: 'c'
    }
];

// Variables set up for use with their ids
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(dogQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // For each question
    for(var i=0; i<questions.length; i++){
      
      // Resetting the list of answers
      answers = [];

      // For each available answer
      for(letter in questions[i].answers){

        // Add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // Add this question and it's answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // Combine the output list into one string of html and display it
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    // Gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // Keeping track of the user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // For each question
    for(var i=0; i<questions.length; i++){

      // Find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // If answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // Color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // If answer is wrong or blank
      else{
        // Color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // Show number of correct answers out of total
    if(numCorrect == questions.length) {  // if answers are all correct
      const audio = new Audio("./media/dog_bark.wav");
      audio.play();
      resultsContainer.innerHTML = "Congrats! You got all " + questions.length + " questions correct!";
    } else if(numCorrect == 0) {  // if answers are all incorrect
      const audio = new Audio("./media/dog_whimper.wav");
      audio.play();
      resultsContainer.innerHTML = "Too bad.  You got all " + questions.length + " questions incorrect.  Try again?";
    } else
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + " questions correct.";
  }

  // Show questions right away
  showQuestions(questions, quizContainer);
  
  // On submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}
