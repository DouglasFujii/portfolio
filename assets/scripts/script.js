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
    const button = document.createElement('button');
    
    switch(this.id) {
        case 'jogo_da_memoria':
            h1.innerHTML = 'Jogo da Memória';
            p1.innerHTML = 'Esse jogo faz parte do curso de desenvolvimento web que estou fazendo. Após finalizado, foi adicionado uma tela de início, onde as cartas começam viradas para cima e quando começa o jogo, são viradas para baixo e embaralhadas. Além disso, foi adicionado um contador de tempo e outro de movimentos. Dependendo da quantidade de movimentos usados para terminar o jogo, a tela final mostra textos diferentes.';

            modal.appendChild(h1);
            modal.appendChild(p1);

            break;

        case 'jogo_da_velha':
            h1.innerHTML = 'Jogo da Velha';
            p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur leo mollis ipsum consequat, in fringilla sem sodales. Phasellus ultricies nec augue suscipit tincidunt. Nunc sagittis nulla at efficitur volutpat. Vestibulum turpis massa, vehicula quis faucibus non, condimentum eu metus. Aenean eleifend mi ut placerat facilisis. Pellentesque mollis eros eget leo dapibus fermentum sit amet ac nulla. Nullam lacinia odio sed venenatis laoreet. Suspendisse egestas laoreet massa sit amet dapibus. Quisque ac augue mattis, congue turpis vitae, cursus magna. Morbi in turpis libero. Aenean rhoncus nec ante ac lacinia. Praesent ac quam non arcu cursus aliquam in a dui. Etiam vitae arcu dictum, porta urna vel, pellentesque magna. Maecenas in risus diam. Nullam ultricies diam ut velit pellentesque, sed fringilla augue gravida.';

            modal.appendChild(h1);
            modal.appendChild(p);

            break;
        
        case 'churrascometro':
            h1.innerHTML = 'Churrascometro';
            p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur leo mollis ipsum consequat, in fringilla sem sodales. Phasellus ultricies nec augue suscipit tincidunt. Nunc sagittis nulla at efficitur volutpat. Vestibulum turpis massa, vehicula quis faucibus non, condimentum eu metus. Aenean eleifend mi ut placerat facilisis. Pellentesque mollis eros eget leo dapibus fermentum sit amet ac nulla. Nullam lacinia odio sed venenatis laoreet. Suspendisse egestas laoreet massa sit amet dapibus. Quisque ac augue mattis, congue turpis vitae, cursus magna. Morbi in turpis libero. Aenean rhoncus nec ante ac lacinia. Praesent ac quam non arcu cursus aliquam in a dui. Etiam vitae arcu dictum, porta urna vel, pellentesque magna. Maecenas in risus diam. Nullam ultricies diam ut velit pellentesque, sed fringilla augue gravida.';

            modal.appendChild(h1);
            modal.appendChild(p);

            break;

        case 'pagina_de_captura':
            h1.innerHTML = 'Página de Captura';
            p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur leo mollis ipsum consequat, in fringilla sem sodales. Phasellus ultricies nec augue suscipit tincidunt. Nunc sagittis nulla at efficitur volutpat. Vestibulum turpis massa, vehicula quis faucibus non, condimentum eu metus. Aenean eleifend mi ut placerat facilisis. Pellentesque mollis eros eget leo dapibus fermentum sit amet ac nulla. Nullam lacinia odio sed venenatis laoreet. Suspendisse egestas laoreet massa sit amet dapibus. Quisque ac augue mattis, congue turpis vitae, cursus magna. Morbi in turpis libero. Aenean rhoncus nec ante ac lacinia. Praesent ac quam non arcu cursus aliquam in a dui. Etiam vitae arcu dictum, porta urna vel, pellentesque magna. Maecenas in risus diam. Nullam ultricies diam ut velit pellentesque, sed fringilla augue gravida.';

            modal.appendChild(h1);
            modal.appendChild(p);

            break;
        
        case 'formulario':
            h1.innerHTML = 'Formulário';
            p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur leo mollis ipsum consequat, in fringilla sem sodales. Phasellus ultricies nec augue suscipit tincidunt. Nunc sagittis nulla at efficitur volutpat. Vestibulum turpis massa, vehicula quis faucibus non, condimentum eu metus. Aenean eleifend mi ut placerat facilisis. Pellentesque mollis eros eget leo dapibus fermentum sit amet ac nulla. Nullam lacinia odio sed venenatis laoreet. Suspendisse egestas laoreet massa sit amet dapibus. Quisque ac augue mattis, congue turpis vitae, cursus magna. Morbi in turpis libero. Aenean rhoncus nec ante ac lacinia. Praesent ac quam non arcu cursus aliquam in a dui. Etiam vitae arcu dictum, porta urna vel, pellentesque magna. Maecenas in risus diam. Nullam ultricies diam ut velit pellentesque, sed fringilla augue gravida.';

            modal.appendChild(h1);
            modal.appendChild(p);

            break;
        
        case 'calculadora':
            h1.innerHTML = 'Calculadora';
            p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur leo mollis ipsum consequat, in fringilla sem sodales. Phasellus ultricies nec augue suscipit tincidunt. Nunc sagittis nulla at efficitur volutpat. Vestibulum turpis massa, vehicula quis faucibus non, condimentum eu metus. Aenean eleifend mi ut placerat facilisis. Pellentesque mollis eros eget leo dapibus fermentum sit amet ac nulla. Nullam lacinia odio sed venenatis laoreet. Suspendisse egestas laoreet massa sit amet dapibus. Quisque ac augue mattis, congue turpis vitae, cursus magna. Morbi in turpis libero. Aenean rhoncus nec ante ac lacinia. Praesent ac quam non arcu cursus aliquam in a dui. Etiam vitae arcu dictum, porta urna vel, pellentesque magna. Maecenas in risus diam. Nullam ultricies diam ut velit pellentesque, sed fringilla augue gravida.';

            modal.appendChild(h1);
            modal.appendChild(p);

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