const WORKS = 'works';
const works = [
    'jogo_da_memoria',
    'jogo_da_velha',
    'churrascometro',
    'pagina_de_captura',
    'formulario',
    'calculadora'
];
const workGrid = document.getElementById('work_grid');

// cria um elemento para cada trabalho em works
works.forEach((element) => {return createWorkElement(element, WORKS, showDetails)});

function createWorkElement(element, c, f) {
    const div = document.createElement('div');
    const img = document.createElement('img');

    img.src = './assets/images/' + element + '.png';

    img.classList.add('img');

    div.appendChild(img);

    div.classList.add(c);
   
    div.addEventListener('click', f);

    workGrid.appendChild(div);
}

function showDetails() {
    const details = document.getElementById('details');

    details.innerHTML = 'Detalhes aqui'
}