const questions = [
  { question: "Q1) Excel में formula bar का क्या काम होता है?", correctAnswer: "Edit" },
  { question: "Q2) Excel में cell address कैसे लिखा जाता है?", correctAnswer: "A1" },
  { question: "Q3) Excel में worksheets के बीच जाने का shortcut क्या है?", correctAnswer: "Ctrl+Page" },
  { question: "Q4) Excel में formula लिखने के लिए किस key का उपयोग होता है?", correctAnswer: "F2" },
  { question: "Q5) Excel में column select करने का shortcut क्या है?", correctAnswer: "Ctrl+Space" },
  { question: "Q6) Excel में जोड़ने के लिए कौन सा function use होता है?", correctAnswer: "SUM" },
  { question: "Q7) Excel में $ का use किसके लिए होता है?", correctAnswer: "Absolute" },
  { question: "Q8) Excel में formula bar छिपाने का shortcut क्या है?", correctAnswer: "Ctrl+Shift+U" },
  { question: "Q9) Excel में current time डालने का shortcut क्या है?", correctAnswer: "Ctrl+Shift+;" },
  { question: "Q10) Excel में active cell का address कहां दिखता है?", correctAnswer: "NameBox" },
  { question: "Q11) Excel में formula copy करने का shortcut क्या है?", correctAnswer: "Ctrl+D" },
  { question: "Q12) Excel में formula को calculate करने के लिए कौन सी key होती है?", correctAnswer: "F9" },
  { question: "Q13) Excel में cells merge करने के लिए कौन सा option use होता है?", correctAnswer: "Merge" },
  { question: "Q14) Excel में text जोड़ने के लिए कौन सा function use होता है?", correctAnswer: "CONCAT" },
  { question: "Q15) Excel में tab को move करने के लिए क्या करना होता है?", correctAnswer: "Drag" },
  { question: "Q16) Excel में Quick Access Toolbar में shortcut कैसे add करें?", correctAnswer: "Customize" },
  { question: "Q17) Excel में calculation mode क्या होता है?", correctAnswer: "Automatic" },
  { question: "Q18) Excel में formula check करने का tool क्या है?", correctAnswer: "Evaluate" },
  { question: "Q19) Excel में formatting कहां से apply होती है?", correctAnswer: "Home" },
  { question: "Q20) Excel में comment add करने का shortcut क्या है?", correctAnswer: "Shift+F2" },
];



let currentQuestionIndex = 0;
let score = 0;
let results = [];
let userName = "";
let batchTime = "";

function startQuiz() {
  userName = document.getElementById("user-name").value.trim();
  batchTime = document.getElementById("batch-time").value.trim();

  if (!userName || !batchTime) {
    alert("Please enter both your name and batch time.");
    return;
  }

  document.getElementById("user-info").style.display = "none";
  document.getElementById("quiz-content").style.display = "block";

  // Display total questions beside the h1
  const h3 = document.querySelector("h3");
  const totalQuestions = document.createElement("span");
  totalQuestions.id = "total-questions";
  totalQuestions.style.marginLeft = "10px"; // Optional: Add some space
  totalQuestions.style.fontSize = "18px";  // Optional: Adjust font size
  totalQuestions.style.color = "blue";     // Optional: Adjust color
  totalQuestions.innerText = `(Total Questions: ${questions.length})`;
  h3.appendChild(totalQuestions);

  showQuestion();
}


// Show Question
function showQuestion() {
  const questionElement = document.getElementById("question");
  const inputElement = document.getElementById("user-answer");
  const feedbackElement = document.getElementById("feedback");

  // Enable the input field and clear feedback
  inputElement.disabled = false;
  feedbackElement.innerText = "";
  document.getElementById("next-btn").style.display = "none";

  questionElement.innerText = questions[currentQuestionIndex].question;
  inputElement.value = "";
}

// Check Answer
function checkAnswer() {
  const userAnswer = document.getElementById("user-answer").value.trim();
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  const feedbackElement = document.getElementById("feedback");

  // Check if the answer is correct or not
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    feedbackElement.innerText = "Correct!";
    feedbackElement.style.color = "green";
    score++;
    results.push({ question: questions[currentQuestionIndex].question, userAnswer, correct: true });
  } else {
    feedbackElement.innerText = `Wrong! Correct answer:  ${correctAnswer}`;
    feedbackElement.style.color = "red";
    results.push({ question: questions[currentQuestionIndex].question, userAnswer, correct: false });
  }

  // Disable the input field after submitting
  document.getElementById("user-answer").disabled = true;

  // Show the next button to proceed to the next question
  document.getElementById("next-btn").style.display = "inline";
}
// Function to send data to Google Sheets
// Function to send data to Google Sheets
function sendDataToSheet(userName, batchTime, score, totalQuestions, correctAnswers, wrongAnswers) {
  const url = 'https://script.google.com/macros/s/AKfycbw8gI8aODuxMhztu41W7ZLv2xiWa_nM4H8u-wbA0cLgo9J_X50-aH21Z30azOrznU2uzA/exec'; // Replace with your Google Apps Script URL

  // Get the current date and time
  const date = new Date();

  // Format the date (DD-MMM-YYYY)
  const formattedDate = `${date.getDate()}-${date.toLocaleString("en-GB", { month: "short" })}-${date.getFullYear()}`;

  // Format the time (hh:mm:ss AM/PM)
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Create a new FormData object
  const formData = new FormData();
  formData.append('name', userName);
  formData.append('batchTime', batchTime);
  formData.append('score', score);
  formData.append('totalQuestions', totalQuestions);
  formData.append('correctAnswers', correctAnswers);
  formData.append('wrongAnswers', wrongAnswers);
  formData.append('date', formattedDate);
  formData.append('time', formattedTime);

  // Send data to Google Sheets
  fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then(response => response.text())
    .then(data => console.log('Data sent to Google Sheets: ', data))
    .catch(error => console.error('Error sending data: ', error));
}






function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    // Show the next question
    showQuestion();
  } else {
    // This block runs once all questions have been answered (i.e., last question)
    document.getElementById("quiz-content").style.display = "none";
    document.getElementById("result-screen").style.display = "block";

    // Generate personalized messages based on the score
    const scorePercent = (score / questions.length) * 100;
    const resultTitle = document.getElementById("result-title");
    const finalScore = document.getElementById("final-score");
    const personalMessage = document.getElementById("personal-message");

    finalScore.innerText = `${userName}, you scored ${score} out of ${questions.length}.`;

    // Personalized feedback based on score
    if (scorePercent === 100) {
      resultTitle.innerText = "🌟 Perfect Score! 🌟";
      personalMessage.innerText = "Congratulations! You Top the quiz. You're amazing!";
    } else if (scorePercent >= 75) {
      resultTitle.innerText = "🎉 Great Job! 🎉";
      personalMessage.innerText = "Well done! Keep up the great work.";
    } else if (scorePercent >= 50) {
      resultTitle.innerText = "👍 Good Effort 👍";
      personalMessage.innerText = "You're getting there! A little more practice and you'll ace it.";
    } else {
      resultTitle.innerText = "😅 Better Luck Next Time 😅";
      personalMessage.innerText = "Don't give up! Keep practicing and try again.";
    }
// Example of how to call the function
const totalQuestions = questions.length;
const correctAnswers = score;
const wrongAnswers = totalQuestions - correctAnswers;

// Send data to Google Sheets
sendDataToSheet(userName, batchTime, score, totalQuestions, correctAnswers, wrongAnswers);

  }
}

function autoSubmit() {
  // Loop through remaining questions
  while (currentQuestionIndex < questions.length) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const defaultAnswer = ""; // You can change this to any default value if needed

    // Record as unanswered or incorrect
    results.push({
      question: questions[currentQuestionIndex].question,
      userAnswer: defaultAnswer,
      correct: false, // Default assumption for skipped answers
    });

    currentQuestionIndex++;
  }

  // Show results after submitting all questions
  document.getElementById("quiz-content").style.display = "none";
  document.getElementById("result-screen").style.display = "block";

  // Show final score and personalized message
  const scorePercent = (score / questions.length) * 100;
  const resultTitle = document.getElementById("result-title");
  const finalScore = document.getElementById("final-score");
  const personalMessage = document.getElementById("personal-message");

  finalScore.innerText = `${userName}, you scored ${score} out of ${questions.length}.`;

  if (scorePercent === 100) {
    resultTitle.innerText = "🌟 Perfect Score! 🌟";
    personalMessage.innerText = "Congratulations! You Top the quiz. You're amazing!";
  } else if (scorePercent >= 75) {
    resultTitle.innerText = "🎉 Great Job! 🎉";
    personalMessage.innerText = "Well done! Keep up the great work.";
  } else if (scorePercent >= 50) {
    resultTitle.innerText = "👍 Good Effort 👍";
    personalMessage.innerText = "You're getting there! A little more practice and you'll ace it.";
  } else {
    resultTitle.innerText = "😅 Better Luck Next Time 😅";
    personalMessage.innerText = "Don't give up! Keep practicing and try again.";
  }
// Example of how to call the function
const totalQuestions = questions.length;
const correctAnswers = score;
const wrongAnswers = totalQuestions - correctAnswers;

// Send data to Google Sheets
sendDataToSheet(userName, batchTime, score, totalQuestions, correctAnswers, wrongAnswers);

}



async function generatePDFPreview() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Title
  doc.setFontSize(18);
  doc.setTextColor(40);
  doc.text("IT Computer Studies Result", 105, 20, null, null, "center");

  // User Details Section
  doc.setFontSize(12);
  doc.text(`Name: ${userName}`, 10, 30);
  doc.text(`Batch Time: ${batchTime}`, 10, 40);

  // Get the current date and time
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-GB", { month: "short" });
  const year = String(date.getFullYear()).slice(-2);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedDate = `${day}-${month}-${year}`;
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  doc.text(`Date: ${formattedDate} ${formattedTime}`, 10, 50);
  doc.text(`Score: ${score} out of ${questions.length}`, 10, 60);

  // Table Headers
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.setFillColor(63, 81, 181);
  doc.rect(10, 80, 190, 10, "F");
  doc.text("Q.No", 15, 87);
  doc.text("Question", 30, 87);
  doc.text("Your Answer", 100, 87);
  doc.text("Correct", 160, 87, null, null, "right");

  // Table Rows
  let y = 100; // Start Y position
  const pageHeight = doc.internal.pageSize.height; // Page height
  const marginBottom = 20; // Bottom margin

  doc.setFont("helvetica", "normal");
  doc.setTextColor(0);
  results.forEach((result, index) => {
    if (y + 10 > pageHeight - marginBottom) {
      doc.addPage();
      y = 20; // Reset Y position for the new page
    }

    doc.text((index + 1).toString(), 15, y); // Question Number
    const question = doc.splitTextToSize(result.question, 70);
    const answer = doc.splitTextToSize(result.userAnswer, 50);
    doc.text(question, 30, y); // Question
    doc.text(answer, 100, y); // Answer
    doc.text(result.correct ? "Yes" : "No", 160, y, null, null, "right");
    y += 10 + question.length * 5; // Adjust Y based on question length
  });

  // Convert to Blob and Show Preview
  const pdfBlob = doc.output("blob");
  const pdfURL = URL.createObjectURL(pdfBlob);

  // Embed PDF in an iframe for preview
  const previewContainer = document.getElementById("pdf-preview");
  previewContainer.innerHTML = `<iframe src="${pdfURL}" width="100%" height="500px"></iframe>`;

  // Enable the download button
  const downloadButton = document.getElementById("download-btn");
  downloadButton.style.display = "block";
  downloadButton.onclick = () => {
    doc.save(`${userName} (${batchTime}) ${formattedDate}_${formattedTime}_Quiz_Results.pdf`);
  };
}

// Refresh
function refresh(){
  location.reload();
}

