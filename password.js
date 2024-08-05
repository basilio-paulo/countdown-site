document.addEventListener('DOMContentLoaded', () => {
    const correctPassword = '10/04/2024';
    const overlay = document.getElementById('password-overlay');
    const form = document.getElementById('password-form');
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const mainContent = document.getElementById('main-content');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const enteredPassword = passwordInput.value.trim();

        if (enteredPassword === correctPassword) {
            // Remove a sobreposição e mostra o conteúdo principal
            overlay.classList.add('hidden');
            mainContent.classList.remove('hidden');
        } else {
            // Exibe mensagem de erro
            errorMessage.textContent = 'Senha incorreta. Tente novamente.';
        }
    });
});
