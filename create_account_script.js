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

const error = document.getElementById('when_error');
const margin_for_password = document.getElementById('input_repeat_password');
input.addEventListener('input', function() {
    if (input.value.length < 7 && input.value.length > 0) {
        input.style.borderColor = '#AC0707';
        error.style.display = 'block';
        margin_for_password.style.marginTop = '15px';
    }
    else if (input.value.length === 0) {
        input.style.borderColor = '#CFCFCF';
        error.style.display = 'none';
        margin_for_password.style.marginTop = '25px';
    }
    else {
        input.style.borderColor = '#2FBB00';
        error.style.display = 'none';
        margin_for_password.style.marginTop = '25px';
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


