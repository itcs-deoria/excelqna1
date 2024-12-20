const questions = [
  // { question: "Q1) Excel में workbook की default file extension क्या होती है?", correctAnswer: ".xlsx" },
  // { question: "Q2) Excel में जोड़े (add) करने के लिए कौन सा function use होता है?", correctAnswer: "SUM" },
  // { question: "Q3) Excel में column का पहला नाम क्या होता है?", correctAnswer: "A" },
  // { question: "Q4) Excel में row का पहला number क्या होता है?", correctAnswer: "1" },
  // { question: "Q5) Excel में current date डालने के लिए कौन सा shortcut key use होती है?", correctAnswer: "Ctrl+;" },
  // { question: "Q6) Excel में formula हमेशा किस symbol से शुरू होता है?", correctAnswer: "=" },
  // { question: "Q7) Excel में एक cell को refer करने के लिए किस format का use होता है (example)?", correctAnswer: "A1" },
  // { question: "Q8) Excel में data को center align करने के लिए कौन सा option use होता है?", correctAnswer: "Center" },
  // { question: "Q9) Excel में graph को क्या कहते हैं?", correctAnswer: "Chart" },
  // { question: "Q10) Excel में text को जोड़ने (concatenate) के लिए कौन सा symbol use होता है?", correctAnswer: "&" },
  // { question: "Q11) Excel में columns को select करने के लिए कौन सा shortcut use होता है?", correctAnswer: "Ctrl+Space" },
  // { question: "Q12) Excel में rows को select करने के लिए कौन सा shortcut use होता है?", correctAnswer: "Shift+Space" },
  // { question: "Q13) Excel में नया workbook बनाने का shortcut क्या है?", correctAnswer: "Ctrl+N" },
  // { question: "Q14) Excel में save करने के लिए shortcut key क्या है?", correctAnswer: "Ctrl+S" },
  // { question: "Q15) Excel में सभी data को select करने के लिए shortcut key क्या है?", correctAnswer: "Ctrl+A" },
  // { question: "Q16) Excel में undo करने के लिए कौन सा shortcut use होता है?", correctAnswer: "Ctrl+Z" },
  // { question: "Q17) Excel में redo करने के लिए कौन सा shortcut use होता है?", correctAnswer: "Ctrl+Y" },
  // { question: "Q18) Excel में cell का background color change करने के लिए कौन सा tool use होता है?", correctAnswer: "Fill" },
  // { question: "Q19) Excel में default view का नाम क्या है?", correctAnswer: "Normal" },
  // { question: "Q20) Excel में text को bold करने का shortcut क्या है?", correctAnswer: "Ctrl+B" },
  // { question: "Q21) Excel में sheet का default नाम क्या होता है?", correctAnswer: "Sheet1" },
  // { question: "Q22) Excel में percentage निकालने के लिए कौन सा operator use होता है?", correctAnswer: "%" },
  // { question: "Q23) Excel में text को italic करने का shortcut क्या है?", correctAnswer: "Ctrl+I" },
  // { question: "Q24) Excel में text को underline करने का shortcut क्या है?", correctAnswer: "Ctrl+U" },
  // { question: "Q25) Excel में freeze panes का use किसके लिए किया जाता है?", correctAnswer: "Lock" },
  // { question: "Q26) Excel में delete करने का shortcut क्या है?", correctAnswer: "Del" },
  // { question: "Q27) Excel में range को refer करने के लिए कौन सा symbol use होता है?", correctAnswer: ":" },
  // { question: "Q28) Excel में hyperlink insert करने का shortcut क्या है?", correctAnswer: "Ctrl+K" },
  // { question: "Q29) Excel में comment add करने के लिए shortcut key क्या है?", correctAnswer: "Shift+F2" },
  // { question: "Q30) Excel में data को sort करने के लिए कौन सा tab use होता है?", correctAnswer: "Data" },
  // { question: "Q31) Excel में spelling check करने का shortcut क्या है?", correctAnswer: "F7" },
  // { question: "Q32) Excel में chart insert करने के लिए shortcut key क्या है?", correctAnswer: "Alt+F1" },
  // { question: "Q33) Excel में cell के अंदर line break डालने के लिए कौन सा shortcut use होता है?", correctAnswer: "Alt+Enter" },
  // { question: "Q34) Excel में data को filter करने के लिए कौन सा shortcut use होता है?", correctAnswer: "Ctrl+Shift+L" },
  // { question: "Q35) Excel में text को wrap करने के लिए कौन सा option use होता है?", correctAnswer: "Wrap" },
  // { question: "Q36) Excel में number को currency में बदलने के लिए कौन सा format use होता है?", correctAnswer: "Currency" },
  // { question: "Q37) Excel में chart types कहां से select करते हैं?", correctAnswer: "Insert" },
  // { question: "Q38) Excel में row height adjust करने के लिए कौन सा option use होता है?", correctAnswer: "Format" },
  // { question: "Q39) Excel में cell की border change करने के लिए कौन सा tool use होता है?", correctAnswer: "Borders" },
  // { question: "Q40) Excel में count करने के लिए कौन सा function use होता है?", correctAnswer: "COUNT" },
  // { question: "Q41) Excel में unique values देखने के लिए कौन सा tool use होता है?", correctAnswer: "Remove" },
  // { question: "Q42) Excel में pivot table कहां से insert करते हैं?", correctAnswer: "Insert" },
  // { question: "Q43) Excel में auto sum का shortcut क्या है?", correctAnswer: "Alt+=" },
  // { question: "Q44) Excel में duplicate data को highlight करने के लिए कौन सा option use होता है?", correctAnswer: "Conditional" },
  // { question: "Q45) Excel में print preview देखने के लिए shortcut key क्या है?", correctAnswer: "Ctrl+P" },
  // { question: "Q46) Excel में text को align करने के लिए कौन सा group use होता है?", correctAnswer: "Alignment" },
  // { question: "Q47) Excel में data validation के लिए कौन सा tab use होता है?", correctAnswer: "Data" },
  // { question: "Q48) Excel में merge cells करने का shortcut क्या है?", correctAnswer: "Alt+H+M" },
  // { question: "Q49) Excel में default row height कितनी होती है?", correctAnswer: "15" },
  // { question: "Q50) Excel में default column width कितनी होती है?", correctAnswer: "8.43" },
  // ----- 9 to 10 batch beginner level test 
  // { question: "Q1) Excel में formula bar का क्या काम होता है?", correctAnswer: "Edit" },
  // { question: "Q2) Excel में cell address कैसे लिखा जाता है?", correctAnswer: "A1" },
  // { question: "Q3) Excel में worksheets के बीच जाने का shortcut क्या है?", correctAnswer: "Ctrl+Page" },
  // { question: "Q4) Excel में formula लिखने के लिए किस key का उपयोग होता है?", correctAnswer: "F2" },
  // { question: "Q5) Excel में column select करने का shortcut क्या है?", correctAnswer: "Ctrl+Space" },
  // { question: "Q6) Excel में जोड़ने के लिए कौन सा function use होता है?", correctAnswer: "SUM" },
  // { question: "Q7) Excel में $ का use किसके लिए होता है?", correctAnswer: "Absolute" },
  // { question: "Q8) Excel में formula bar छिपाने का shortcut क्या है?", correctAnswer: "Ctrl+Shift+U" },
  // { question: "Q9) Excel में current time डालने का shortcut क्या है?", correctAnswer: "Ctrl+Shift+;" },
  // { question: "Q10) Excel में active cell का address कहां दिखता है?", correctAnswer: "NameBox" },
  // { question: "Q11) Excel में formula copy करने का shortcut क्या है?", correctAnswer: "Ctrl+D" },
  // { question: "Q12) Excel में formula को calculate करने के लिए कौन सी key होती है?", correctAnswer: "F9" },
  // { question: "Q13) Excel में cells merge करने के लिए कौन सा option use होता है?", correctAnswer: "Merge" },
  // { question: "Q14) Excel में text जोड़ने के लिए कौन सा function use होता है?", correctAnswer: "CONCAT" },
  // { question: "Q15) Excel में tab को move करने के लिए क्या करना होता है?", correctAnswer: "Drag" },
  // { question: "Q16) Excel में Quick Access Toolbar में shortcut कैसे add करें?", correctAnswer: "Customize" },
  // { question: "Q17) Excel में calculation mode क्या होता है?", correctAnswer: "Automatic" },
  // { question: "Q18) Excel में formula check करने का tool क्या है?", correctAnswer: "Evaluate" },
  // { question: "Q19) Excel में formatting कहां से apply होती है?", correctAnswer: "Home" },
  // { question: "Q20) Excel में comment add करने का shortcut क्या है?", correctAnswer: "Shift+F2" },
  // 6 to 7 ms access  Question paper date 5-dec-2024
  { question: "Q1) MS Access में डेटा स्टोर करने के लिए किसका उपयोग होता है?", correctAnswer: "Table" },
  { question: "Q2) MS Access में टेबल का हर कॉलम क्या कहलाता है?", correctAnswer: "Field" },
  { question: "Q3) MS Access में टेबल का हर रो क्या कहलाता है?", correctAnswer: "Record" },
  { question: "Q4) MS Access की फाइल का एक्सटेंशन क्या होता है?", correctAnswer: "ACCDB" },
  { question: "Q5) MS Access में डेटा टाइप क्या निर्धारित करता है?", correctAnswer: "Field" },
  { question: "Q6) MS Access में फॉर्म का उपयोग किसके लिए होता है?", correctAnswer: "Display" },
  { question: "Q7) MS Access में रिपोर्ट का उपयोग किसके लिए होता है?", correctAnswer: "Print" },
  { question: "Q8) MS Access को कितने parts में  पढ़ सकते है ?", correctAnswer: "4" },
  { question: "Q9) MS Access में Table , Query , Form और  क्या होता है ?", correctAnswer: "Report" },
  { question: "Q10) MS Access में  अगर मुझे नाम लिखना है तोह कौन सा Data Type लू?", correctAnswer: "Shorttext" },
  { question: "Q11) MS Access में अगर मुझे किसी का address लिखना हो तोह किस data type में लिखू ?", correctAnswer: "Longtext" },
  { question: "Q12) MS Access में टेबल डिजाइन करने के लिए कौन सा व्यू उपयोग होता है?", correctAnswer: "Design" },
  { question: "Q13) MS Access मे Table में कितने Views होते है ?", correctAnswer: "2" },
  { question: "Q14) Table किस से लिंक होता है ?", correctAnswer: "Form" },
  { question: "Q15) MS Access Query कहा से data लेता है ?", correctAnswer: "Table" },
  { question: "Q16) MS Access मे दो View , Design और दूसरा ?", correctAnswer: "Datasheet" },
  { question: "Q17) MS Access में डेटा टाइप जो केवल हां या नहीं को स्टोर करता है, क्या कहलाता है?", correctAnswer: "Yes/No" },
  { question: "Q18) MS Access में Fees को किस datatype में रखेंगे ?", correctAnswer: "Currency" },
  { question: "Q19) MS Access कौन सा Version पढ़ा है   (only year name)?", correctAnswer: "2016" },
  { question: "Q20) क्या  MS Access से Software बना सकते है ? ( Yes or No ) ", correctAnswer: "Yes" },

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

