// result-script.js

document.addEventListener("DOMContentLoaded", () => {
    // Get the score from localStorage
    const score = localStorage.getItem('quizScore');
    
    // Display the appropriate message based on the score
    const resultText = document.getElementById('result-text');
    const explainText = document.getElementById('explain-text');

    if (score !== null) {
        const numericScore = parseFloat(score);

        if (numericScore <= -10) {
            resultText.textContent = "คุณมีปัญหาด้านการเรียน";
            explainText.textContent = "คุณอาจกำลังเผชิญกับปัญหาหลายด้านที่ส่งผลกระทบต่อการเรียน เช่น ความเบื่อหน่าย ความไม่สนใจ หรือปัญหาด้านสิ่งแวดล้อมและอุปกรณ์การเรียน คุณควรพิจารณาหาสาเหตุและวิธีการปรับปรุงเพื่อให้การเรียนมีประสิทธิภาพมากขึ้น";
        } else if (numericScore > -10 && numericScore <= 0) {
            resultText.textContent = "คุณมีบางปัญหาด้านการเรียน";
            explainText.textContent = "คุณอาจพบเจอปัญหาเล็กน้อยหรือบางครั้งในการเรียน แต่ยังไม่ถึงขั้นรุนแรง การปรับเปลี่ยนเล็กน้อยหรือการขอความช่วยเหลือจากครูหรือเพื่อนอาจช่วยให้คุณผ่านปัญหาเหล่านี้ไปได้";
        } else if (numericScore > 0 && numericScore <= 10) {
            resultText.textContent = "คุณมีการเรียนที่ดีในระดับปานกลาง";
            explainText.textContent = "คุณมีการเรียนที่ค่อนข้างดี แต่ยังมีบางจุดที่สามารถพัฒนาเพิ่มเติมได้ การทำงานอย่างต่อเนื่องและการปรับปรุงจุดที่ยังไม่สมบูรณ์จะช่วยให้คุณประสบความสำเร็จในการเรียนมากขึ้น";
        } else if (numericScore > 10) {
            resultText.textContent = "คุณมีการเรียนที่ดีมาก";
            explainText.textContent = "คุณมีการเรียนที่ดีและแสดงถึงความตั้งใจและความพยายามอย่างต่อเนื่อง สิ่งนี้แสดงให้เห็นว่าคุณสามารถจัดการกับปัญหาหรืออุปสรรคได้ดี การรักษาความมุ่งมั่นนี้จะนำพาคุณไปสู่ความสำเร็จในอนาคต";

        }
    } else {
        resultText.textContent = "ไม่มีคะแนนที่สามารถแสดงได้";
    }
});
