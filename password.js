document.addEventListener('DOMContentLoaded', () => {
    const correctPassword = '10/04/2024';
    const form = document.getElementById('password-form');
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const enteredPassword = passwordInput.value.trim();

        if (enteredPassword === correctPassword) {
            // Redireciona para a página principal
            window.location.href = 'index.html';
        } else {
            // Exibe mensagem de erro
            errorMessage.textContent = 'Senha incorreta. Tente novamente.';
        }
    });
});
