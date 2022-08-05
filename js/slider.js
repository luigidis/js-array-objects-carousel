// console.log('slider') 
let ulElement = document.querySelector('.slides-wrapper');
console.log(ulElement);

let slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]
let index = 0;
let slidesElement = [];

// console.log(slidesMarkup)

//Genero il contenuto dello slider
for (let i = 0; i < slides.length; i++) {
    const src = slides[i].url;
    // console.log(src);
    // Creo il'li
    const li = document.createElement('li');
    // Aggiungo la classe slide a questo li
    li.className = 'slide';
    // gli metto la classe active
    if (i === index) {
        li.classList.add('active');
    };
    // Creo l'immagine
    const img = document.createElement('img');
    // assegno all'immagine creata il valore letto dall'array
    img.src = src;
    // console.dir(img);
	// creo il div per lo slide content
	const divAbsolute = document.createElement('div')
	// aggiungo la classe all'immagine
	divAbsolute.classList.add('slide__content')
	// creo l'h3 e il paragrafo
	const titleSlide = slides[i].title;
	const descriptionSlide = slides[i].description;
	// const title = document.createElement('h3');
	divAbsolute.innerHTML += `<h3 class="slide__title">${titleSlide}</h3>`;
	// const description = document.createElement('p')
	divAbsolute.innerHTML += `<p class="slide__description">${descriptionSlide}</p>`;
    // a questo punto appendo l'immagine dentro l'li creato
    li.append(img, divAbsolute);
    // Appendo il mio li creato con l'img dentro allo slide wrapper precendentemente selezionato
    ulElement.append(li);
    // le inserisco nel mio array vuoto precedentemente
    slidesElement.push(li);
}
// dichiaro con una variabile l'ultimo item dell'array dove pusho i miei elementi
let lastItem = slidesElement.length - 1
// Seleziono la mia freccia next
const nextArrowEl = document.querySelector('.arrow-next');
// Devo ascoltare l'evento click sulla arrow next
nextArrowEl.addEventListener('click', function () {
    // console.log('tasto next premuto');
    // togliere la classe active della slide attiva
    const slideAttiva = slidesElement[index];
    // console.log(slideAttiva);
    slideAttiva.classList.remove('active');
    // mi vado a inizializzare la slideSuccessiva e a fare un controllo dell'index per ripetere il ciclo delle immagini
    let slideSuccessiva
    if (index === lastItem) {
        index = 0
    } else {
        index++
    }
    // aggiungere la classe active alla slide successiva (se esiste)
    slideSuccessiva = slidesElement[index];
    // console.log(slideSuccessiva);
    slideSuccessiva.classList.add('active');
}); 
// Seleziono la mia freccia prev
const prevArrowEl = document.querySelector('.arrow-prev');
// Devo ascoltare l'evento click sulla arrow previous
prevArrowEl.addEventListener('click', function() {
    // console.log('tasto prev premuto');
    // tolgo la classe active dalla slide attiva che in questo caso sarà
    const slideAttiva = slidesElement[index];
    // console.log(slideAttiva);
    slideAttiva.classList.remove('active');
    // mi vado a inizializzare la slidePrecedente e a fare un controllo sull'index per ripete il ciclo delle img
    let slidePrecedente
    if (index === 0) {
        index = lastItem 
    } else {
        index--
    }
    // Aggiungo la classe active alla slide precedente
    slidePrecedente = slidesElement [index];
    // console.log(slidePrecedente)
    slidePrecedente.classList.add('active')
})	
	














