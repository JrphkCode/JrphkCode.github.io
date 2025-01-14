// Define the questions and answers
const questions = [
    {
      question: "คุณมีพฤติกรรมที่บ่งบอกถึงความเบื่อหน่ายหรือไม่สนใจการเรียน",
      answers: [
        { label: "", points: -2 },
        { label: "", points: -1 },
        { label: "", points: -0.5 },
        { label: "", points: 0 },
        { label: "", points: 0.5 },
        { label: "", points: 1 },    
        { label: "", points: 2 }
      ]
    },
    {
      question: "คุณมีปฏิสัมพันธ์ที่ดีกับเพื่อนร่วมชั้นของคุณ",
      answers: [
        { label: "", points: 2 },
        { label: "", points: 1 },
        { label: "", points: 0.5 },
        { label: "", points: 0 },
        { label: "", points: -0.5 },
        { label: "", points: -1 },
        { label: "", points: -2 }
      ]
    },
    {
        question: "คุณพบว่าตัวเองยังไม่สามารถตั้งใจฟังในชั้นเรียนได้อย่างเต็มที่",
        answers: [
          { label: "", points: -2 },
          { label: "", points: -1 },
          { label: "", points: -0.5 },
          { label: "", points: 0 },
          { label: "", points: 0.5 },
          { label: "", points: 1 },    
          { label: "", points: 2 }
        ]
      },
    {
      question: "คุณมองว่าการเรียนหรือไม่เรียนไม่ได้สำคัญและส่งผลต่อชีวิตของคุณเลย",
      answers: [
        { label: "", points: -2 },
        { label: "", points: -1 },
        { label: "", points: -0.5 },
        { label: "", points: 0 },
        { label: "", points: 0.5 },
        { label: "", points: 1 },    
        { label: "", points: 2 }
      ]
    },
    {
        question: "คุณเคยมีประสบการณ์ที่เพื่อนช่วยเปลี่ยนแปลงชีวิตคุณในทางที่ดีขึ้น",
        answers: [
          { label: "", points: 2 },
          { label: "", points: 1 },
          { label: "", points: 0.5 },
          { label: "", points: 0 },
          { label: "", points: -0.5 },
          { label: "", points: -1 },    
          { label: "", points: -2 }
        ]
      },
    {
      question: "คุณรู้สึกว่าคุณเข้าใจเนื้อหาที่เรียนได้ดี",
      answers: [
        { label: "", points: 2 },
        { label: "", points: 1 },
        { label: "", points: 0.5 },
        { label: "", points: 0 },
        { label: "", points: -0.5 },
        { label: "", points: -1 },    
        { label: "", points: -2 }
      ]
    },
    {
        question: "คุณคิดว่าการเรียนมีความสำคัญต่อชีวิตและอนาคตของคุณ",
        answers: [
          { label: "", points: 2 },
          { label: "", points: 1 },
          { label: "", points: 0.5 },
          { label: "", points: 0 },
          { label: "", points: -0.5 },
          { label: "", points: -1 },    
          { label: "", points: -2 }
        ]
      },
    {
      question: "คุณมีปัญหาในการเข้าถึงอินเทอร์เน็ตที่มีคุณภาพในโรงเรียน",
      answers: [
        { label: "", points: -2 },
        { label: "", points: -1 },
        { label: "", points: -0.5 },
        { label: "", points: 0 },
        { label: "", points: 0.5 },
        { label: "", points: 1 },    
        { label: "", points: 2 }
      ]
    },
    {
      question: "การเรียนออนไลน์ของคุณมักประสบปัญหาจากอินเทอร์เน็ตที่ไม่เสถียร",
      answers: [
        { label: "", points: -2 },
        { label: "", points: -1 },
        { label: "", points: -0.5 },
        { label: "", points: 0 },
        { label: "", points: 0.5 },
        { label: "", points: 1 },    
        { label: "", points: 2 }
      ]
    },
    {
      question: "คุณมีอุปกรณ์การเรียนที่เพียงพอสำหรับการเรียนทั้งในโรงเรียนและที่บ้าน",
      answers: [
        { label: "", points: 2 },
        { label: "", points: 1 },
        { label: "", points: 0.5 },
        { label: "", points: 0 },
        { label: "", points: -0.5 },
        { label: "", points: -1 },    
        { label: "", points: -2 }
      ]
    },
    {
      question: "คุณมักจะหลีกเลี่ยงการมาเรียนเมื่อรู้สึกว่าไม่มีประโยชน์",
      answers: [
        { label: "", points: -2 },
        { label: "", points: -1 },
        { label: "", points: -0.5 },
        { label: "", points: 0 },
        { label: "", points: 0.5 },
        { label: "", points: 1 },    
        { label: "", points: 2 }
      ]
    },
    {
      question: "การเดินทางมาโรงเรียนของคุณทำให้คุณเหนื่อยล้าและส่งผลต่อสมาธิในการเรียน",
      answers: [
        { label: "", points: -2 },
        { label: "", points: -1 },
        { label: "", points: -0.5 },
        { label: "", points: 0 },
        { label: "", points: 0.5 },
        { label: "", points: 1 },    
        { label: "", points: 2 }
      ]
    },
    {
      question: "คุณได้รับการสนับสนุนที่เพียงพอจากครูเมื่อคุณมีปัญหาในการเรียน",
      answers: [
        { label: "", points: 2 },
        { label: "", points: 1 },
        { label: "", points: 0.5 },
        { label: "", points: 0 },
        { label: "", points: -0.5 },
        { label: "", points: -1 },    
        { label: "", points: -2 }
      ]
    },
    {
      question: "การมีห้องเรียนที่สะอาดและมีระเบียบช่วยให้คุณตั้งใจเรียนมากขึ้น",
      answers: [
        { label: "", points: 2 },
        { label: "", points: 1 },
        { label: "", points: 0.5 },
        { label: "", points: 0 },
        { label: "", points: -0.5 },
        { label: "", points: -1 },    
        { label: "", points: -2 }
      ]
    },
    {
      question: "คุณได้รับการดูแลสุขภาพจิตที่เหมาะสมในโรงเรียน",
      answers: [
        { label: "", points: 2 },
        { label: "", points: 1 },
        { label: "", points: 0.5 },
        { label: "", points: 0 },
        { label: "", points: -0.5 },
        { label: "", points: -1 },    
        { label: "", points: -2 }
      ]
    },
    {
      question: "คุณเคยประสบปัญหาการโดนรังแกในโรงเรียนและคิดว่ามันส่งผลต่อการเรียนรู้ของคุณ",
      answers: [
        { label: "", points: -2 },
        { label: "", points: -1 },
        { label: "", points: -0.5 },
        { label: "", points: 0 },
        { label: "", points: 0.5 },
        { label: "", points: 1 },    
        { label: "", points: 2 }
      ]
    },
    {
      question: "คุณรู้สึกว่าโรงเรียนของคุณมีการส่งเสริมให้เกิดความคิดสร้างสรรค์และนวัตกรรม",
      answers: [
        { label: "", points: 2 },
        { label: "", points: 1 },
        { label: "", points: 0.5 },
        { label: "", points: 0 },
        { label: "", points: -0.5 },
        { label: "", points: -1 },    
        { label: "", points: -2 }
      ]
    },
    {
      question: "คุณคิดว่าโรงเรียนมีสิ่งอำนวยความสะดวกที่เพียงพอต่อการเรียนรู้",
      answers: [
        { label: "", points: 2 },
        { label: "", points: 1 },
        { label: "", points: 0.5 },
        { label: "", points: 0 },
        { label: "", points: -0.5 },
        { label: "", points: -1 },    
        { label: "", points: -2 }
      ]
    },
    {
      question: "คุณรู้สึกว่าคุณมีเวลาพักผ่อนและผ่อนคลายที่เพียงพอหลังเลิกเรียน",
      answers: [
        { label: "", points: 2 },
        { label: "", points: 1 },
        { label: "", points: 0.5 },
        { label: "", points: 0 },
        { label: "", points: -0.5 },
        { label: "", points: -1 },    
        { label: "", points: -2 }
      ]
    },
    {
        question: "คุณเคยประสบปัญหาจากการที่ห้องสมุดหรือสถานที่เรียนรู้ในโรงเรียนไม่เพียงพอ",
        answers: [
          { label: "", points: -2 },
          { label: "", points: -1 },
          { label: "", points: -0.5 },
          { label: "", points: -0 },
          { label: "", points: 0.5 },
          { label: "", points: 1 },    
          { label: "", points: 2 }
        ]
      },
    
    // Add more questions as needed
  ];
  
  // Set initial index
  let currentIndex = 0;
  let totalScore = 0;
  
  // Function to load a question
  function loadQuestion(index) {
      const questionData = questions[index];
      const questionElement = document.querySelector(".question-text h1");
  
      if (questionElement) {
          questionElement.textContent = questionData.question;
      }
  
      const scaleElements = document.querySelectorAll('.scale input');
      scaleElements.forEach((input, idx) => {
          input.value = questionData.answers[idx].points;
          input.nextElementSibling.classList.remove('selected');
      });
  
      const currentElement = document.querySelector(".current");
      if (currentElement) {
          currentElement.textContent = `Question ${index + 1}`;
      }
  
      const questionTextBox = document.querySelector(".question-text");
      questionTextBox.style.height = "auto";
      questionTextBox.style.height = `${questionElement.offsetHeight + 40}px`;
  }
  
  // Add event listener to next question button
  const nextButton = document.querySelector("button");
  
  nextButton.addEventListener("click", function() {
      const selectedRadio = document.querySelector('input[type="radio"]:checked');
  
      if (selectedRadio) {
          totalScore += parseFloat(selectedRadio.value); // Add the score of the selected option
      }
  
      if (currentIndex < questions.length - 1) {
          currentIndex++;
          loadQuestion(currentIndex);
      } else {
          // Save score to localStorage and redirect to result page
          localStorage.setItem('quizScore', totalScore);
          window.location.href = 'result.html'; // Redirect to result page
      }
  });
  
  // Load the first question when the page loads
  document.addEventListener("DOMContentLoaded", () => {
      loadQuestion(currentIndex);
  });
  