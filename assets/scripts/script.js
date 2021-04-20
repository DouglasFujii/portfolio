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
    const details = document.createElement('div');

    details.id = 'details';

    workGrid.appendChild(details)

    console.log(this.id);
}