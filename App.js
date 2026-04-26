function checkAnswer() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const userAnswer = parseFloat(input.value);

    if (isNaN(userAnswer)) return;

    // Mostrar respuesta del usuario
    addMessage(userAnswer, 'user');

    // Lógica del tutor (La media de 10, 15, 20 es 15)
    setTimeout(() => {
        if (userAnswer === 15) {
            addMessage("¡Excelente! Es correcto. Sumamos 10+15+20 = 45. Luego 45 ÷ 3 = 15. ¡Usted está al mismo nivel que un experto!", 'tutor');
            addMessage("¿Desea que pasemos al siguiente ejercicio o prefiere un examen rápido?", 'tutor');
        } else {
            addMessage("Casi, pero no es correcto. Recuerde el paso a paso: <br>1. Sume: 10 + 15 + 20 = 45.<br>2. Cuente cuántos datos hay: son 3.<br>3. Divida: 45 ÷ 3. <br>¡Inténtelo de nuevo!", 'tutor');
        }
    }, 1000);

    input.value = '';
}

function addMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    msgDiv.innerHTML = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
