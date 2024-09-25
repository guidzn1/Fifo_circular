document.getElementById('startButton').addEventListener('click', runClockAlgorithm);

// Função para exibir o botão de nova simulação
function showNewSimulationButton() {
    const newSimButton = document.getElementById('newSimulationButton');
    newSimButton.style.display = 'block'; // Mostra o botão após a simulação
}

// Função para reiniciar a página
document.getElementById('newSimulationButton').addEventListener('click', () => {
    window.location.reload(); // Recarrega a página para iniciar uma nova simulação
});

function runClockAlgorithm() {
    const numFrames = parseInt(document.getElementById('numFrames').value);
    const pageSequence = document.getElementById('pageSequence').value.split(',').map(Number);

    if (isNaN(numFrames) || pageSequence.length === 0) {
        alert("Insira um número de quadros válido e uma sequência de páginas!");
        return;
    }

    const frames = Array(numFrames).fill(null); // Quadros de página
    const useBits = Array(numFrames).fill(0); // Bits de uso
    let pointer = -1; // Ponteiro do relógio começa no índice 0

    let tableBody = document.getElementById('resultTable').querySelector('tbody');
    tableBody.innerHTML = ""; // Limpa resultados anteriores
    document.getElementById('resultTable').classList.add('visible'); // Mostra a tabela com animação

    pageSequence.forEach((page, step) => {
        let result = "";
        let hit = false;

        // Verifica se a página já está em um dos quadros (HIT)
        for (let i = 0; i < numFrames; i++) {
            if (frames[i] === page) {
                useBits[i] = 1; // Define bit de uso
                hit = true;
                result = "HIT";
                break;
            }
        }

        // Se não for HIT, então ocorre um MISS e substitui a página
        if (!hit) {
            result = "MISS";

            // Encontra o próximo quadro para substituir usando o algoritmo de Relógio
            while (useBits[pointer] === 1) {
                useBits[pointer] = 0; // Reseta o bit de uso
                pointer = (pointer + 1) % numFrames; // Move o ponteiro para o próximo quadro
            }

            frames[pointer] = page; // Substitui a página
            useBits[pointer] = 1; // Define o bit de uso para o quadro atual
        }

        // Adiciona o resultado à tabela
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${step + 1}</td>
            <td>${page}</td>
            <td>${frames.map(f => f === null ? '-' : f).join(', ')}</td>
            <td>${pointer + 1}</td> <!-- Exibe o valor do ponteiro corrigido -->
            <td class="${hit ? 'hit' : 'miss'}">${result}</td>
        `;
        tableBody.appendChild(row);

        // Atualiza a rotação do ponteiro
        movePointer(pointer, numFrames);
    });

    // Após a simulação, exibe o botão de nova simulação e esconde o botão de iniciar
    showNewSimulationButton();  // Mostra o botão "Nova Simulação"
    document.getElementById('startButton').style.display = 'none';  // Oculta o botão "Iniciar Simulação"
}

// Função para mover o ponteiro do relógio (simulação visual)
function movePointer(pointer, numFrames) {
    // Calcula o ângulo para o número de quadros
    const pointerAngle = (pointer * (360 / numFrames)) % 360;
    document.querySelector('.hand').style.transform = `rotate(${pointerAngle}deg)`;
}
