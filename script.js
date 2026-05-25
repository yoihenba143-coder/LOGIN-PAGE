const passwordInput = document.getElementById('password');
const showBtn = document.querySelector('.show-btn');

showBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showBtn.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        showBtn.textContent = 'Show';
    }
});