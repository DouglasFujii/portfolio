const WORKS = 'works';
const works = [
    'jogo_da_memoria',
    'jogo_da_velha',
    'churrascometro',
    'site-momo-lamen',
    'formulario',
    'calculadora'
];
const workGrid = document.getElementById('work_grid');
const modal = document.getElementById('modal');

workElement(works)

function workElement(works) {
    // cria um elemento para cada trabalho em works
    works.forEach((element) => {
        return createWorkElement(element, WORKS, showDetails)
    });
}

function createWorkElement(element, c, f) {
    const workElement = document.createElement('div');
    const workImage = document.createElement('img');

    workImage.src = './assets/images/' + element + '.png';

    workImage.classList.add('img');

    workElement.appendChild(workImage);

    workElement.id = element;

    workElement.classList.add(c);

    workElement.addEventListener('click', f);

    workGrid.appendChild(workElement);
}

function showDetails() {
    const h1 = document.createElement('h1');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const gitHub = document.createElement('a');
    const button = document.createElement('button');

    switch (this.id) {
        case 'jogo_da_memoria':
            // título
            h1.innerHTML = 'Jogo da Memória';

            // descrição
            p1.innerHTML = 'Esse jogo faz parte do curso de desenvolvimento web que estou fazendo. Após finalizado, foi adicionado uma tela de início, onde as cartas começam viradas para cima e quando começa o jogo, são viradas para baixo e embaralhadas. Além disso, foi adicionado um contador de tempo e outro de movimentos. Dependendo da quantidade de movimentos usados para terminar o jogo, a tela final mostra textos diferentes.';

            // texto para github
            p2.innerHTML = 'Confira o código no ';

            // link para github
            gitHub.href = 'https://github.com/DouglasFujii/jogo-da-memoria'
            gitHub.innerHTML = 'GitHub';
            gitHub.target = '_blank'

            // adiciona os elementos html
            modal.appendChild(h1);
            modal.appendChild(p1);
            p2.appendChild(gitHub);
            modal.appendChild(p2);

            break;

        case 'jogo_da_velha':
            // titulo
            h1.innerHTML = 'Jogo da Velha';

            // descrição
            p1.innerHTML = 'Projeto desenvolvido durante o curso de desenvolvimento web. Primeiro projeto utilizando HTML, CSS e JavaScript da prática em um projeto. Muito interessante ver como as tecnologias vão se complementando e como o javascript manipula os elementos HTML e o estilo também.';

            // texto para github
            p2.innerHTML = 'Confira o código no ';

            // link para github
            gitHub.href = "https://github.com/DouglasFujii/jogo-da-velha"
            gitHub.innerHTML = 'GitHub';
            gitHub.target = '_blank';

            // adiciona os elementos html
            modal.appendChild(h1);
            modal.appendChild(p1);
            p2.appendChild(gitHub);
            modal.appendChild(p2);

            break;

        case 'churrascometro':
            // titulo
            h1.innerHTML = 'Churrascometro';

            // descrição
            p1.innerHTML = 'Esse projeto faz parte do curso de desenvolvimento web para fixar conhecimentos básicos em JavaScript adquiridos até o momento. Foi interessante ver a linguagem manipulando os elementos HTML, realizando condicionais e fazendo os cálculos.';

            // texto para github
            p2.innerHTML = 'Confira o código no ';

            // link para github
            gitHub.href = 'https://github.com/DouglasFujii/churrascometro';
            gitHub.innerHTML = 'GitHub';
            gitHub.target = '_blank';

            // adiciona os elementos html
            modal.appendChild(h1);
            modal.appendChild(p1);
            p2.appendChild(gitHub);
            modal.appendChild(p2);

            break;

        case 'site-momo-lamen':
            // titulo
            h1.innerHTML = 'Site Momo Lamen';

            // descrição
            p1.innerHTML = 'Site desenvolvido para um cliente fictício, utilizando HTML e CSS. Esse projeto foi ótimo para fixar conhecimentos e ter a experiência de desenvolver um projeto próprio do zero.';

            // texto para gitHub
            p2.innerHTML = 'Confira o código no ';

            // link para github
            gitHub.href = 'https://github.com/DouglasFujii/site-momo-lamen';
            gitHub.innerHTML = 'GitHub';
            gitHub.target = '_blank';

            // adiciona os elementos html
            modal.appendChild(h1);
            modal.appendChild(p1);
            p2.appendChild(gitHub);
            modal.appendChild(p2);

            break;

        case 'formulario':
            // titulo
            h1.innerHTML = 'Formulário';

            // descrição
            p1.innerHTML = 'Esse formulário foi desenvolvido para estudar as tags HTML necessárias para se criar um formulário. Esse tipo de demanda é muito comum, então resolvi praticar mais com esse projeto.';

            // texto para gitHub
            p2.innerHTML = 'Confira o código no ';

            // link para github
            gitHub.href = 'https://github.com/DouglasFujii/form';
            gitHub.innerHTML = 'GitHub';
            gitHub.target = '_blank';

            // adiciona os elementos html
            modal.appendChild(h1);
            modal.appendChild(p1);
            p2.appendChild(gitHub);
            modal.appendChild(p2);

            break;

        case 'calculadora':
            // titulo
            h1.innerHTML = 'Calculadora';

            // descrição
            p1.innerHTML = 'Projeto de uma calculador utilizando JavaScript, com o objetivo de estudar e fixar a linguagem.';

            // texto para gitHub
            p2.innerHTML = 'Confira o código no ';

            // link pra github
            gitHub.href = 'https://github.com/DouglasFujii/calculadora';
            gitHub.innerHTML = 'GitHub';
            gitHub.target = '_blank';

            // adiciona os elementos html
            modal.appendChild(h1);
            modal.appendChild(p1);
            p2.appendChild(gitHub);
            modal.appendChild(p2);

            break;
    }

    // criando botao
    button.type = 'button';
    button.classList.add('border');
    button.innerHTML = 'Voltar';
    button.addEventListener('click', hideModal);
    modal.appendChild(button);

    // fazendo o modal aparecer
    modal.style.display = 'block';
}

function hideModal() {
    modal.innerHTML = '';
    modal.style.display = 'none';
}