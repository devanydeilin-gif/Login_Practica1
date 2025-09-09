const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('btn');
const messageDiv = document.getElementById('message');

function emailIsValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);    
}

function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Z]).{5,}$/;
    return passwordPattern.test(password);
}

// Mostrar mensajes con estilo
function showMessage(text, type = 'info') {
    messageDiv.textContent = text;
    messageDiv.className = type;
    messageDiv.style.display = "block"; 
}

// Accesibilidad
messageDiv.setAttribute('role','alert');
messageDiv.setAttribute('aria-live','assertive');

// Validación en tiempo real de email
usernameInput.addEventListener('input', () => {
    const email = usernameInput.value;
    if (!emailIsValid(email)) {
        showMessage('Invalid email format', 'error');
        usernameInput.style.border = "2px solid red";
        btn.disabled = true;
    } else {
        showMessage('Email format looks good', 'info');
        usernameInput.style.border = "2px solid green";
        btn.disabled = false;
    }
});

// Validación en tiempo real de contraseña
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    if (!validatePassword(password)) {
        showMessage('Password must be at least 5 characters long and include one uppercase letter.', 'error');
        passwordInput.style.border = "2px solid red";
        btn.disabled = true;
    } else {
        showMessage('Password is valid.', 'success');
        passwordInput.style.border = "2px solid green";
        btn.disabled = false;
    }
});

// Validación y guardado en el submit
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!emailIsValid(username)) {
        showMessage('Invalid email format', 'error');
        usernameInput.style.border = "2px solid red";
        btn.disabled = true;
        return;
    }

    if (!validatePassword(password)) {
        showMessage('Password must be at least 5 characters long and include one uppercase letter.', 'error');
        passwordInput.style.border = "2px solid red";
        btn.disabled = true;
        return;
    }

    if (username !== '' && password !== '') {
        // Guardar usuario en localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));

        showMessage('Login successful! Redirecting...', 'success');
        usernameInput.style.border = "2px solid green";
        passwordInput.style.border = "2px solid green";
        setTimeout(() => {
            window.location.href = "html/dashboard.html";
        }, 1000); 
    } else {
        showMessage('Login failed. Please try again.', 'error');
    }
});
