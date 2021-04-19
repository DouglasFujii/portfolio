const WORKS = 'works';
const works = [
    'jogo da memória',
    'jogo da velha',
    'churrascometro',
    'pagina de captura',
    'formulário',
    'calculadora'
];
const workGrid = document.getElementById('work_grid');

// cria um elemento para cada trabalho em works
works.forEach(() => {return createWorkElement(WORKS, showDetails)});

function createWorkElement(c, f) {
    const div = document.createElement('div');

    div.classList.add(c);
   
    div.addEventListener('click', f);

    workGrid.appendChild(div);
}

function showDetails() {
    const details = document.getElementById('details');

    details.innerHTML = 'Detalhes aqui'
}