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
}

const input = document.getElementById('passwordInput');
input.addEventListener('input', function() {
    if (input.value.length < 8 && input.value.length > 0) {
        input.style.borderColor = '#AC0707';
    }
    else if (input.value.length === 0) {
        input.style.borderColor = '#CFCFCF';
    }
    else {
        input.style.borderColor = '#2FBB00';
    }
});

const inputRepeat = document.getElementById('passwordInputRepeat');
inputRepeat.addEventListener('input', function() {
    if (inputRepeat.value !== input.value) {
        inputRepeat.style.borderColor = '#AC0707';
    } else if (inputRepeat.value.length === 0) {
        inputRepeat.style.borderColor = '#CFCFCF';
    }
    else if (inputRepeat.value === input.value) {
        inputRepeat.style.borderColor = '#2FBB00';
    }
});