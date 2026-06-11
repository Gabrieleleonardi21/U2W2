const prodotti = [
  {
    id: 1,
    nome: 'Sneaker Run',
    prezzo: 89.00,
    categoria: 'scarpe',
    descrizione: 'Scarpa da corsa leggera e traspirante, ideale per allenamenti quotidiani.',
    img: 'https://placehold.co/300x180?text=Sneaker+Run',
  },
  {
    id: 2,
    nome: 'Stivaletto Urban',
    prezzo: 120.00,
    categoria: 'scarpe',
    descrizione: 'Stivaletto in pelle sintetica, perfetto per la città in ogni stagione.',
    img: 'https://placehold.co/300x180?text=Stivaletto+Urban',
  },
  {
    id: 3,
    nome: 'T-shirt Basic',
    prezzo: 19.00,
    categoria: 'abbigliamento',
    descrizione: 'Maglia in cotone 100% disponibile in vari colori, comoda per ogni occasione.',
    img: 'https://placehold.co/300x180?text=T-shirt+Basic',
  },
  {
    id: 4,
    nome: 'Giacca Denim',
    prezzo: 65.00,
    categoria: 'abbigliamento',
    descrizione: 'Giacca in denim classica, vestibilità relaxed e ottima per le mezze stagioni.',
    img: 'https://placehold.co/300x180?text=Giacca+Denim',
  },
  {
    id: 5,
    nome: 'Borsa City',
    prezzo: 49.00,
    categoria: 'accessori',
    descrizione: 'Borsa versatile in ecopelle, ideale per l\'uso quotidiano in città.',
    img: 'https://placehold.co/300x180?text=Borsa+City',
  },
  {
    id: 6,
    nome: 'Cintura Intrecciata',
    prezzo: 28.00,
    categoria: 'accessori',
    descrizione: 'Cintura in cuoio intrecciato, disponibile in marrone e nero.',
    img: 'https://placehold.co/300x180?text=Cintura+Intrecciata',
  },
];

// Crea un elemento DOM con attributi e figli senza mai toccare innerHTML
function make(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, v);
  }
  for (const child of children) {
    el.appendChild(child instanceof Node ? child : document.createTextNode(child));
  }
  return el;
}

function renderProdotti(lista) {
  const contenitore = document.getElementById('contenitore-prodotti');
  contenitore.textContent = '';

  lista.map(p => {
    const img    = make('img', { src: p.img, alt: p.nome, class: 'card-img-top' });

    const titolo = make('h5', { class: 'card-title' });
    titolo.textContent = p.nome;

    const testo  = make('p', { class: 'card-text' });
    testo.textContent = p.descrizione;

    const prezzo = make('p', { class: 'fw-bold fs-5 m-0' });
    prezzo.textContent = `€ ${p.prezzo}`;

    const cardBody = make('div', { class: 'card-body' }, titolo, testo, prezzo);
    const card     = make('div', { class: `card h-100 ${p.categoria}` }, img, cardBody);
    return           make('article', { class: 'col-12 col-sm-6 col-xl-4 mb-3' }, card);
  }).forEach(a => contenitore.appendChild(a));
}

const toggle = document.getElementById('toggle-tema');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark')
    ? 'Tema chiaro'
    : 'Tema scuro';
});

renderProdotti(prodotti);
