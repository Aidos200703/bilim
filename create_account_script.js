<<<<<<< HEAD
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

function togglePasswordRepeat() {
    const input = document.getElementById('passwordInputRepeat');
    const icon = document.getElementById('eyeIconRepeat');
    if (input.type === 'password') {
        input.type = 'text';
        icon.src = 'img/eye-icon.png'; // Ашық көз иконкасы
    } else {
        input.type = 'password';
        icon.src = 'img/eye-off-icon.png'; // Жабық көз иконкасы
    }
=======
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

function togglePasswordRepeat() {
    const input = document.getElementById('passwordInputRepeat');
    const icon = document.getElementById('eyeIconRepeat');
    if (input.type === 'password') {
        input.type = 'text';
        icon.src = 'img/eye-icon.png'; // Ашық көз иконкасы
    } else {
        input.type = 'password';
        icon.src = 'img/eye-off-icon.png'; // Жабық көз иконкасы
    }
>>>>>>> 2b9c9c6991914b74f95219d86c2d15aa8dafb34d
}