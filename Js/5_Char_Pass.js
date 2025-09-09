const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('btn')
const messageDiv = document.getElementById('message');

messageDiv.setAttribute('role','alert');
messageDiv.setAttribute('aria-live','assertive');

function showMessage(text, type='info') {
    messageDiv.textContent = text;
    messageDiv.className = type;
    messageDiv.style.display = "block"; // aseguramos que aparezca
}


function validatePassword(password){
    return password.length >= 5;//return detiene la funcion hasta que el largo de la contraseña sea mayo o igual a 5
}

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    if (!validatePassword(password)) {
        showMessage('Password must be at least 5 character long.', 'error');
        btn.disabled=true;
    } else {
        showMessage('Password is valid.', 'success');
        btn.disabled = false;
    }
}); 

form.addEventListener('submit', (event) => {
    event.preventDefault();
const username= usernameInput.value.trim();
const password = passwordInput.value.trim();

if (username !== '' && password !== '') {
    showMessage('Login successful!', 'success');
    window.location.href = "html/dashboard.html";
} else {
    showMessage('Login failed. Please try again', 'error');
}

});