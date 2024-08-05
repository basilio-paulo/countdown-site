document.addEventListener('DOMContentLoaded', () => {
    const correctPassword = '10042024'; // Senha sem barras
    const overlay = document.getElementById('password-overlay');
    const form = document.getElementById('password-form');
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const mainContent = document.getElementById('main-content');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const enteredPassword = passwordInput.value.trim().replace(/\D/g, ''); // Remove todas as não-dígitos

        if (enteredPassword === correctPassword) {
            // Remove a sobreposição e mostra o conteúdo principal
            overlay.classList.add('hidden');
            mainContent.classList.remove('hidden');
            document.body.style.overflow = 'auto'; // Permite rolagem do corpo após a remoção da sobreposição
        } else {
            // Exibe mensagem de erro
            errorMessage.textContent = 'Senha incorreta. Tente novamente.';
        }
    });

    // Função para formatar a senha com barras
    const formatPassword = (input) => {
        const value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

        let f
