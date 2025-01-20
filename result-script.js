document.addEventListener("DOMContentLoaded", function() {
    const quizCompleted = localStorage.getItem('quizCompleted');

    if (quizCompleted === 'true') {
        const result = [
            {
                result: "คุณไม่มีปัญหาด้านการเรียน",
                explain: "คุณมีการเรียนที่ดีและแสดงถึงความตั้งใจและความพยายามอย่างต่อเนื่อง สิ่งนี้แสดงให้เห็นว่าคุณสามารถจัดการกับปัญหาหรืออุปสรรคได้ดี การรักษาความมุ่งมั่นนี้จะนำพาคุณไปสู่ความสำเร็จในอนาคต"
            },
            {   
                result: "คุณมีการเรียนที่ดีในระดับปานกลาง",    
                explain: "คุณมีการเรียนที่ค่อนข้างดี แต่ยังมีบางจุดที่สามารถพัฒนาเพิ่มเติมได้ การทำงานอย่างต่อเนื่องและการปรับปรุงจุดที่ยังไม่สมบูรณ์จะช่วยให้คุณประสบความสำเร็จในการเรียนมากขึ้น"
            },
            {
                result: "คุณมีปัญหาด้านการเรียน",
                explain: "คุณอาจกำลังเผชิญกับปัญหาหลายด้านที่ส่งผลกระทบต่อการเรียน เช่น ความเบื่อหน่าย ความไม่สนใจ หรือปัญหาด้านสิ่งแวดล้อมและอุปกรณ์การเรียน คุณควรพิจารณาหาสาเหตุและวิธีการปรับปรุงเพื่อให้การเรียนมีประสิทธิภาพมากขึ้น"
            },

            {
                result: "โปรดทำแบบทดสอบ",
                explain: "คุณยังไม่ทำแบบทดสอบ โปรดทำแบบทดสอบเพื่อที่จะวัดระดับ"
            }
        ];

        // Get the 'point' value from localStorage and convert to a number
        let myVariable = parseFloat(localStorage.getItem('point'));
        
        // Default pointindex to 0 if the value is not valid
        let pointindex = 0;

        // Ensure myVariable is a valid number and check the range
        if (!isNaN(myVariable)) {
            if (myVariable >= 5 && myVariable <= 20) {
                pointindex = 0;
            } else if (myVariable > -5 && myVariable < 5) {
                pointindex = 1;
            } else if (myVariable >= -20 && myVariable <= -5) {
                pointindex = 2;
            }
        }

        // Function to load the result based on pointindex
        function loadresult(index) {
            const resultdata = result[index];
            const resultElement = document.getElementById("resulttext");
            resultElement.textContent = resultdata.result;

            const explainElement = document.getElementById("explaintext");
            explainElement.textContent = resultdata.explain;
        }

        loadresult(pointindex);

    } else {
        alert("โปรดทำแบบทดสอบก่อน");
        window.location.href = "quiz.html"; 
    }
});
