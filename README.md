# Simulação de Substituição de Páginas - Algoritmo do Relógio (FIFO Circular)

Este projeto é uma simulação interativa do **Algoritmo de Substituição de Páginas - Relógio (FIFO Circular)**, utilizado em **Sistemas Operacionais** para gerenciar a memória virtual. A interface permite inserir uma sequência de páginas e simular a substituição de páginas utilizando o algoritmo do Relógio, com visualização dos resultados passo a passo.

## 📑 Índice

- [Introdução](#introdução)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Autores](#autores)
- [Licença](#licença)

## 📚 Introdução

Este projeto simula o **algoritmo de substituição de páginas do relógio**, uma variação do FIFO (First-In-First-Out) circular. Ele utiliza um ponteiro circular e bits de uso para determinar qual página deve ser substituída quando não há quadros de página disponíveis. O objetivo principal é fornecer uma ferramenta educativa e interativa para aprender sobre gerenciamento de memória em sistemas operacionais.

## ✨ Funcionalidades

- Interface intuitiva para simulação do algoritmo de substituição de páginas.
- Permite inserir o número de quadros de página e uma sequência de páginas.
- Mostra o estado dos quadros, o ponteiro, e os resultados (HIT/MISS) a cada passo.
- Tabela com o histórico detalhado da simulação.
- GIF animado de um relógio como visualização do algoritmo.
- Botão "Nova Simulação" para reiniciar a simulação.
- Página informativa sobre o algoritmo, acessada pelo botão "Saiba Mais".

🚀 Como Usar
Insira o número de quadros de página: No campo correspondente, insira o número de quadros disponíveis.

Digite a sequência de páginas: Forneça uma sequência de páginas, separadas por vírgulas. Exemplo: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5.

Clique em "Iniciar Simulação": O algoritmo será executado, mostrando o estado dos quadros, o ponteiro, e se houve um HIT ou MISS.

Resultados: A tabela exibirá os resultados detalhados da simulação, incluindo os quadros atuais, o ponteiro, e os bits de uso.

Botão "Nova Simulação": Após a execução, você pode clicar em "Nova Simulação" para reiniciar o processo.

Saiba mais: Clique no botão "Saiba Mais" para ser redirecionado à página de explicação detalhada sobre o algoritmo.

🛠️ Tecnologias Utilizadas
HTML5: Para a estrutura da página.
CSS3: Para a estilização e layout.
JavaScript: Para a lógica da simulação e manipulação de DOM.
GIF animado: Utilizado para visualizar o ponteiro do relógio na simulação.
👥 Autores
O projeto foi desenvolvido por:

Guilherme Lima
Thiago Costa
Felipe Mattei
Este projeto foi desenvolvido como parte da disciplina de Sistemas Operacionais na Universidade Federal do Sul e Sudeste do Pará (Unifesspa).

📝 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
