
function togglePassword() {
    const input = document.getElementById('passwordInput');
    const icon = document.getElementById('eyeIcon');
    if (input.type === 'password') {
        input.type = 'text';
        icon.src = 'img/eye-icon.png'; // Ашық көз иконкасы
    } else {
        input.type = 'password';
        icon.src = 'img/eye-off-icon.png'; // Жабық көз иконкасы
    }
}


