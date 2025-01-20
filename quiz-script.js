document.addEventListener("DOMContentLoaded", function() {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxO7bgUIG6PgCorWZg71DIbsg-Vrtzxgjo3F6oOvwp4Sh7U5eMoaMJ4MF7sf7vzeoSG/exec'; 
    const questions = [
        {
            "question": "ห้องเรียนไม่มีเสียงรบกวนที่ทำให้ฉันเรียนไม่รู้เรื่อง",
            "answer": [
                {"text": "มากที่สุด", "points": 2, "value": "มากที่สุด"},
                {"text": "มาก", "points": 1, "value": "มาก"},
                {"text": "ปานกลาง", "points": 0, "value": "ปานกลาง"},
                {"text": "น้อย", "points": -1, "value": "น้อย"},
                {"text": "น้อยที่สุด", "points": -2, "value": "น้อยที่สุด"}
            ]
        },
        {
            "question": "อุปกรณ์การเรียนการสอนในห้องเรียนมีคุณภาพและสามารถใช้งานได้ดี",
            "answer": [
                {"text": "มากที่สุด", "points": 2, "value": "มากที่สุด"},
                {"text": "มาก", "points": 1, "value": "มาก"},
                {"text": "ปานกลาง", "points": 0, "value": "ปานกลาง"},
                {"text": "น้อย", "points": -1, "value": "น้อย"},
                {"text": "น้อยที่สุด", "points": -2, "value": "น้อยที่สุด"}
            ]
        },
        {
            "question": "อินเทอร์เน็ตในห้องเรียนมีความช้าและส่งผลต่อการเรียน",
            "answer": [
                {"text": "มากที่สุด", "points": -2, "value": "มากที่สุด"},
                {"text": "มาก", "points": -1, "value": "มาก"},
                {"text": "ปานกลาง", "points": 0, "value": "ปานกลาง"},
                {"text": "น้อย", "points": 1, "value": "น้อย"},
                {"text": "น้อยที่สุด", "points": 2, "value": "น้อยที่สุด"}
            ]
        },
        {
            "question": "ขาดแคลนอุปกรณ์การเรียนการสอนที่จำเป็นในการเรียน",
            "answer": [
                {"text": "มากที่สุด", "points": -2, "value": "มากที่สุด"},
                {"text": "มาก", "points": -1, "value": "มาก"},
                {"text": "ปานกลาง", "points": 0, "value": "ปานกลาง"},
                {"text": "น้อย", "points": 1, "value": "น้อย"},
                {"text": "น้อยที่สุด", "points": 2, "value": "น้อยที่สุด"}
            ]
        },
        {
            "question": "ห้องเรียนมีสภาพแวดล้อมที่ไม่เหมาะต่อการเรียน",
            "answer": [
                {"text": "มากที่สุด", "points": -2, "value": "มากที่สุด"},
                {"text": "มาก", "points": -1, "value": "มาก"},
                {"text": "ปานกลาง", "points": 0, "value": "ปานกลาง"},
                {"text": "น้อย", "points": 1, "value": "น้อย"},
                {"text": "น้อยที่สุด", "points": 2, "value": "น้อยที่สุด"}
            ]
        },
        {
            "question": "ห้องเรียนมีเสียงรบกวนที่ทำให้เรียนไม่รู้เรื่อง",
            "answer": [
                {"text": "มากที่สุด", "points": -2, "value": "มากที่สุด"},
                {"text": "มาก", "points": -1, "value": "มาก"},
                {"text": "ปานกลาง", "points": 0, "value": "ปานกลาง"},
                {"text": "น้อย", "points": 1, "value": "น้อย"},
                {"text": "น้อยที่สุด", "points": 2, "value": "น้อยที่สุด"}
            ]
        },
        {
            "question": "สามารถเข้าถึงเนื้อหาออนไลน์สำหรับการเรียนได้อย่างราบรื่นในห้องเรียน",
            "answer": [
                {"text": "มากที่สุด", "points": 2, "value": "มากที่สุด"},
                {"text": "มาก", "points": 1, "value": "มาก"},
                {"text": "ปานกลาง", "points": 0, "value": "ปานกลาง"},
                {"text": "น้อย", "points": -1, "value": "น้อย"},
                {"text": "น้อยที่สุด", "points": -2, "value": "น้อยที่สุด"}
            ]
        },
        {
            "question": "การระบายอากาศในห้องเรียนดีพอที่จะทำให้รู้สึกสบายในขณะเรียน",
            "answer": [
                {"text": "มากที่สุด", "points": 2, "value": "มากที่สุด"},
                {"text": "มาก", "points": 1, "value": "มาก"},
                {"text": "ปานกลาง", "points": 0, "value": "ปานกลาง"},
                {"text": "น้อย", "points": -1, "value": "น้อย"},
                {"text": "น้อยที่สุด", "points": -2, "value": "น้อยที่สุด"}
            ]
        },
        {
            "question": "เทคโนโลยีในห้องเรียนช่วยเพิ่มประสิทธิภาพการเรียนรู้",
            "answer": [
                {"text": "มากที่สุด", "points": 2, "value": "มากที่สุด"},
                {"text": "มาก", "points": 1, "value": "มาก"},
                {"text": "ปานกลาง", "points": 0, "value": "ปานกลาง"},
                {"text": "น้อย", "points": -1, "value": "น้อย"},
                {"text": "น้อยที่สุด", "points": -2, "value": "น้อยที่สุด"}
            ]
        },
        {
            "question": "เพื่อนร่วมชั้นมีส่วนร่วมในกิจกรรมการเรียนในห้องเรียนอย่างสม่ำเสมอ",
            "answer": [
                {"text": "มากที่สุด", "points": 2, "value": "มากที่สุด"},
                {"text": "มาก", "points": 1, "value": "มาก"},
                {"text": "ปานกลาง", "points": 0, "value": "ปานกลาง"},
                {"text": "น้อย", "points": -1, "value": "น้อย"},
                {"text": "น้อยที่สุด", "points": -2, "value": "น้อยที่สุด"}
            ]
        }
    ]
    let currentQuestionIndex = 0;
    let totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;
    const selectedAnswers = new Array(questions.length).fill(null); 
    
    function loadQuestion(index) {
        const questionData = questions[index];
        const questionElement = document.getElementById("questiontext");
        questionElement.textContent = questionData.question;
    
        const answerContainer = document.querySelector(".radio-list");
        answerContainer.innerHTML = "";
    
        questionData.answer.forEach((ans, idx) => {
            const radioItem = document.createElement("div");
            radioItem.classList.add("radio-item");
    
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = "radio";
            radioInput.id = "radio" + (idx + 1);
            radioInput.value = ans.points;
    
            // Check if this answer was previously selected
            if (selectedAnswers[index] === ans.points) {
                radioInput.checked = true;
            }
    
            const radioLabel = document.createElement("label");
            radioLabel.htmlFor = "radio" + (idx + 1);
            radioLabel.textContent = ans.text;
    
            radioItem.appendChild(radioInput);
            radioItem.appendChild(radioLabel);
            answerContainer.appendChild(radioItem);
        });
    
        document.querySelector(".current").textContent = index + 1;
    }
    
    function updateTotalPoints(newPoints) {
        // Update total points based on the selected answer
        if (selectedAnswers[currentQuestionIndex] !== null) {
            totalPoints -= selectedAnswers[currentQuestionIndex]; // Remove previous points
        }
        selectedAnswers[currentQuestionIndex] = newPoints;
        totalPoints += newPoints; // Add the new points
        localStorage.setItem('point', totalPoints); // Save the total points to localStorage
    }
    
    const nextButton = document.querySelector(".nextbutton");
    nextButton.addEventListener("click", function() {
        const selectedRadio = document.querySelector('input[name="radio"]:checked');
        if (selectedRadio) {
            const points = parseInt(selectedRadio.value);
            updateTotalPoints(points); // Update total points with the selected answer
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion(currentQuestionIndex);
            } else {
                localStorage.setItem('quizCompleted', 'true'); // Set quizCompleted flag to true
                window.location.href = "result.html"; // Redirect to results page
            }
        } else {
            alert('Please select an answer');
        }
    });
    
    loadQuestion(currentQuestionIndex);
    
})