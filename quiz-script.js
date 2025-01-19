document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            "question": "ห้องเรียนไม่มีเสียงรบกวนที่ทำให้ฉันเรียนไม่รู้เรื่อง",
            "answer": [
                {"text": "มากที่สุด", "points": 0},
                {"text": "มาก", "points": 20},
                {"text": "ปานกลาง", "points": 30},
                {"text": "น้อย", "points": 20},
                {"text": "น้อยที่สุด", "points": 30}
            ]
        },
        {
            "question": "อุปกรณ์การเรียนการสอนในห้องเรียนมีคุณภาพและสามารถใช้งานได้ดี",
            "answer": [
                {"text": "มากที่สุด", "points": 0},
                {"text": "มาก", "points": 20},
                {"text": "ปานกลาง", "points": 30},
                {"text": "น้อย", "points": 20},
                {"text": "น้อยที่สุด", "points": 30}
            ]
        },
        {
            "question": "อินเทอร์เน็ตในห้องเรียนมีความช้าและส่งผลต่อการเรียน",
            "answer": [
                {"text": "มากที่สุด", "points": 0},
                {"text": "มาก", "points": 20},
                {"text": "ปานกลาง", "points": 30},
                {"text": "น้อย", "points": 20},
                {"text": "น้อยที่สุด", "points": 30}
            ]
        },
        {
            "question": "ขาดแคลนอุปกรณ์การเรียนการสอนที่จำเป็นในการเรียน",
            "answer": [
                {"text": "มากที่สุด", "points": 0},
                {"text": "มาก", "points": 20},
                {"text": "ปานกลาง", "points": 30},
                {"text": "น้อย", "points": 20},
                {"text": "น้อยที่สุด", "points": 30}
            ]
        },
        {
            "question": "ห้องเรียนมีสภาพแวดล้อมที่ไม่เหมาะต่อการเรียน",
            "answer": [
                {"text": "มากที่สุด", "points": 0},
                {"text": "มาก", "points": 20},
                {"text": "ปานกลาง", "points": 30},
                {"text": "น้อย", "points": 20},
                {"text": "น้อยที่สุด", "points": 30}
            ]
        },
        {
            "question": "ห้องเรียนมีเสียงรบกวนที่ทำให้เรียนไม่รู้เรื่อง",
            "answer": [
                {"text": "มากที่สุด", "points": 0},
                {"text": "มาก", "points": 20},
                {"text": "ปานกลาง", "points": 30},
                {"text": "น้อย", "points": 20},
                {"text": "น้อยที่สุด", "points": 30}
            ]
        },
        {
            "question": "สามารถเข้าถึงเนื้อหาออนไลน์สำหรับการเรียนได้อย่างราบรื่นในห้องเรียน",
            "answer": [
                {"text": "มากที่สุด", "points": 0},
                {"text": "มาก", "points": 20},
                {"text": "ปานกลาง", "points": 30},
                {"text": "น้อย", "points": 20},
                {"text": "น้อยที่สุด", "points": 30}
            ]
        },
        {
            "question": "การระบายอากาศในห้องเรียนดีพอที่จะทำให้รู้สึกสบายในขณะเรียน",
            "answer": [
                {"text": "มากที่สุด", "points": 0},
                {"text": "มาก", "points": 20},
                {"text": "ปานกลาง", "points": 30},
                {"text": "น้อย", "points": 20},
                {"text": "น้อยที่สุด", "points": 30}
            ]
        },
        {
            "question": "เทคโนโลยีในห้องเรียนช่วยเพิ่มประสิทธิภาพการเรียนรู้",
            "answer": [
                {"text": "มากที่สุด", "points": 0},
                {"text": "มาก", "points": 20},
                {"text": "ปานกลาง", "points": 30},
                {"text": "น้อย", "points": 20},
                {"text": "น้อยที่สุด", "points": 30}
            ]
        },
        {
            "question": "เพื่อนร่วมชั้นมีส่วนร่วมในกิจกรรมการเรียนในห้องเรียนอย่างสม่ำเสมอ",
            "answer": [
                {"text": "มากที่สุด", "points": 0},
                {"text": "มาก", "points": 20},
                {"text": "ปานกลาง", "points": 30},
                {"text": "น้อย", "points": 20},
                {"text": "น้อยที่สุด", "points": 30}
            ]
        }
    ]
    let currentQuestionIndex = 0;
    let totalPoints = 0;
    const selectedPoints = new Array(questions.length).fill(null);

    const pointsToChoiceIndexMapping = [
        [0, 1, 2, 3, 4], 
        [0, 1, 2, 3, 4], 
        [0, 1, 2, 3, 4], 
        [0, 1, 2, 3, 4], 
        [0, 1, 2, 3, 4], 
        [0, 1, 2, 3, 4], 
        [0, 1, 2, 3, 4], 
        [0, 1, 2, 3, 4], 
        [0, 1, 2, 3, 4], 
        [0, 1, 2, 3, 4], 
    ];

    const entryMapping = {
        0: "entry.1450107008_sentinel", // Question 1's answer field in Google Form
        1: "entry.281073101_sentinel", // Question 2's answer field in Google Form
        2: "entry.61984599_sentinel",
        3: "entry.616504313_sentinel",
        4: "entry.1474547741_sentinel",
        5: "entry.12364808_sentinel", // Question 1's answer field in Google Form
        6: "entry.1647380560_sentinel", 
        7: "entry.127892162_sentinel",
        8: "entry.1446153098_sentinel",
        9: "entry.651957983_sentinel",
    };

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

            if (selectedPoints[currentQuestionIndex] === ans.points) {
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
        if (selectedPoints[currentQuestionIndex] !== null) {
            totalPoints -= selectedPoints[currentQuestionIndex];
        }
        selectedPoints[currentQuestionIndex] = newPoints;
        totalPoints += newPoints;
    }

    loadQuestion(currentQuestionIndex);

    const nextButton = document.querySelector(".nextbutton");
    nextButton.addEventListener("click", function() {
        const selectedRadio = document.querySelector('input[name="radio"]:checked');
        if (selectedRadio) {
            const points = parseFloat(selectedRadio.value);
            updateTotalPoints(points);

            // Map the selected answer to the correct index for Google Forms
            const selectedIndex = [...selectedRadio.parentElement.children].indexOf(selectedRadio.parentElement);
            const googleFormIndex = pointsToChoiceIndexMapping[currentQuestionIndex][selectedIndex];

            // Get the entry ID for the current question from entryMapping
            const entryId = entryMapping[currentQuestionIndex];

            // Send the answer to Google Form with the correct entry ID and choice index
            const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSeY2OR7KtkWNaUoIjVRbSu9Nn8Lm-OCid_1sIxXsJIioLBnyg/viewform?usp=dialog`;
            fetch(formUrl, { method: "POST" });

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                const questionContainer = document.querySelector(".question");
                const radioContainer = document.querySelector(".radio-list");

                questionContainer.classList.add("slide-out-left");
                radioContainer.classList.add("slide-out-left");

                setTimeout(() => {
                    loadQuestion(currentQuestionIndex);

                    questionContainer.classList.add("slide-in-right");
                    radioContainer.classList.add("slide-in-right");

                    setTimeout(() => {
                        questionContainer.classList.remove("slide-out-left", "slide-in-right");
                        radioContainer.classList.remove("slide-out-left", "slide-in-right");
                    }, 500);
                }, 500);
            } else {
                localStorage.setItem('point', totalPoints);
                localStorage.setItem('quizCompleted', 'true');
                window.location.href = "result.html";
            }
        } else {
            alert("Please select an answer before proceeding.");
        }
    });

    const previousButton = document.querySelector(".previousbutton");
    previousButton.addEventListener("click", function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;

            const questionContainer = document.querySelector(".question");
            const radioContainer = document.querySelector(".radio-list");

            questionContainer.classList.add("slide-out-right");
            radioContainer.classList.add("slide-out-right");

            setTimeout(() => {
                loadQuestion(currentQuestionIndex);

                questionContainer.classList.add("slide-in-left");
                radioContainer.classList.add("slide-in-left");

                setTimeout(() => {
                    questionContainer.classList.remove("slide-out-right", "slide-in-left");
                    radioContainer.classList.remove("slide-out-right", "slide-in-left");
                }, 500);
            }, 500);
        }
    });
});