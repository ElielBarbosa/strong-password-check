const passwordInput = document.getElementById("passwordInput");
//console.log(passwordInput)

passwordInput.addEventListener("input", function () {
    const password = this.value;
    console.log(password)
    const strengthIndicator = document.getElementById("password-strength-indicator");
    const strengthText = document.getElementById("passeword-strength-text");

    // Sistema de Sontuação de força da senha
    const strength = {
        0: "Muito fraca",
        1: "Fraca",
        2: "Moderada",
        3: "Forte",
        4: "Muito forte"
    }

    let score = 0;

    //Requisitos
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[\W_]/.test(password)) score++; // Verifica se há caracteres especiais
    if (password.length >= 12) score++; // Bônus para senhas mais longas
    if (password.length >= 16) score++; // Bônus para senhas muito longas


    // Calculando a porcentagem para a largura da barra indicadora
    const width = (score / 4) * 100;

    switch (score) {
        case 1:
            strengthIndicator.style.backgroundColor = "#ff0000"; // Vermelho para fraca
            break;
        case 2:
            strengthIndicator.style.backgroundColor = "#ff8000"; // Laranja para moderada
            break;
        case 3:
            strengthIndicator.style.backgroundColor = "#ffff00"; // Amarelo para forte
            break;
        case 4:
            strengthIndicator.style.backgroundColor = "#00ff00"; // Verde para muito forte
            break;
        default:
            strengthIndicator.style.backgroundColor = "#b4b4b4"; // Cinza para muito fraca
            break;
    }
    strengthIndicator.style.width = width + "%";

    if (password.length > 0) {
        strengthText.innerHTML = `Senha ${strength[score]}`;
    }

})