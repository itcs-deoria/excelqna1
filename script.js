const questions = [
  { question: "What is the default file extension for an Excel workbook?", correctAnswer: ".xlsx" },
  { question: "Which function is used to sum values in Excel?", correctAnswer: "SUM" },
  { question: "What is the symbol for multiplication in Excel formulas?", correctAnswer: "*" },
  { question: "Which tab in Excel is used for text formatting?", correctAnswer: "Home" },
  { question: "What is the shortcut for copying in Excel?", correctAnswer: "Ctrl+C" },
  { question: "What is the shortcut for pasting in Excel?", correctAnswer: "Ctrl+V" },
  { question: "Which function is used to find the average in Excel?", correctAnswer: "AVERAGE" },
  { question: "Which function in Excel returns the largest number in a range?", correctAnswer: "MAX" },
  { question: "What is the term for a vertical column of cells?", correctAnswer: "Column" },
  { question: "What key do you press to start a formula in Excel?", correctAnswer: "=" },
  { question: "What is the default font used in Excel?", correctAnswer: "Calibri" },
  { question: "What do you press to save a workbook in Excel?", correctAnswer: "Ctrl+S" },
  { question: "What feature is used to automatically fill a series of values?", correctAnswer: "Fill Handle" },
  { question: "Which function in Excel counts cells with numbers?", correctAnswer: "COUNT" },
  { question: "What term is used for the horizontal cells in a worksheet?", correctAnswer: "Row" },
  { question: "What is the symbol for division in Excel formulas?", correctAnswer: "/" },
  { question: "What function in Excel is used to combine text from different cells?", correctAnswer: "CONCATENATE" },
  { question: "What is the Excel feature used to lock rows or columns while scrolling?", correctAnswer: "Freeze" },
  { question: "Which view allows you to preview how your document will look when printed?", correctAnswer: "Print" },
  { question: "What is the name of the file extension for Excel templates?", correctAnswer: ".xltx" }
];


let currentQuestionIndex = 0;
let score = 0;
let results = [];
let userName = "";
let batchTime = "";

// Start Quiz
function startQuiz() {
  userName = document.getElementById("user-name").value.trim();
  batchTime = document.getElementById("batch-time").value.trim();

  if (!userName || !batchTime) {
    alert("Please enter both your name and batch time.");
    return;
  }

  document.getElementById("user-info").style.display = "none";
  document.getElementById("quiz-content").style.display = "block";

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
    feedbackElement.innerText = `Wrong! Correct answer: ${correctAnswer}`;
    feedbackElement.style.color = "red";
    results.push({ question: questions[currentQuestionIndex].question, userAnswer, correct: false });
  }

  // Disable the input field after submitting
  document.getElementById("user-answer").disabled = true;

  // Show the next button to proceed to the next question
  document.getElementById("next-btn").style.display = "inline";
}



function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-content").style.display = "none";
    document.getElementById("result-screen").style.display = "block";

    // Generate personalized messages
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
  }
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
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('en-GB', { month: 'short' });
  const year = String(date.getFullYear()).slice(-2);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
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
  let y = 100;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0);
  results.forEach((result, index) => {
    doc.text((index + 1).toString(), 15, y); // Question Number
    const question = doc.splitTextToSize(result.question, 70);
    const answer = doc.splitTextToSize(result.userAnswer, 50);
    doc.text(question, 30, y); // Question
    doc.text(answer, 100, y); // Answer
    doc.text(result.correct ? "Yes" : "No", 160, y, null, null, "right");
    y += 10;
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
    doc.save(`${userName} ( ${batchTime} ) ${formattedDate} ${formattedTime} Quiz_Results.pdf`);
  };
}




