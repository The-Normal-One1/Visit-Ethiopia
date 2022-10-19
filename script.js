const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navi-menu');
const nav = document.querySelector('.nav');

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  nav.classList.toggle('active');
}
hamburger.addEventListener('click', mobileMenu);

const naviLink = document.querySelectorAll('.navi-link');

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  nav.classList.remove('active');
}

naviLink.forEach((n) => n.addEventListener('click', closeMenu));

//for the speakers section

const speakersData = [{
  imageSrc:'./images/Hugh-Jackman.jpg',
  imageDescription: 'Hugh Jackman',
  speechTitle: 'Hugh Jackman', 
  profession: 'An Australian actor',
  quotes: '“I don’t think I knew how going to Ethiopia would affect my life, through a very simple choice of buying fair-trade coffee, we can take part in change.”',
}, 
{
  imageSrc: './images/Oprah Winfrey.jpg',
  imageDescription: 'Oprah Winfray',
  speechTitle: 'Oprah Winfray',
  profession: 'An American talk show host, television producer, actress, author, and philanthropist',
  quotes: '“There were no ugly people in Ethiopia”',
}, 
{
  imageSrc: './images/Nelson Mandela.jpg',
  imageDescription: 'Nelson Mandela',
  speechTitle: 'Nelson Mandela',
  profession: 'Former President of South Africa',
  quotes: '“Ethiopia always has a special place in my imagination and the prospect of visiting Ethiopia attracted me more strongly than a trip to France, England, and America combined. I felt I would be visiting my own genesis, unearthing the roots of what made me an African.”',
  }, 
  {
    imageSrc: './images/Colin Firth.jpg',
    imageDescription: 'Colin Firth',
    speechTitle: 'Colin Firth',
    profession: 'An English Actor',
    quotes: '“When I visited coffee farms in Ethiopia, the farmers could not believe we spend a week’s wages in their country on a cup of coffee in ours, because they see so little of the profits. Oxfam’s fair trade campaign helps right this wrong.”',
    }, 
    {
      imageSrc: './images/HaileGebreslassie.jpg',
      imageDescription: 'Haile Gebreslassie',
      speechTitle: 'Haile Gebreslassie',
      profession: 'An Ethiopian retired long-distance track, road running athlete, and businessman',
      quotes: '“Many people know that Ethiopia is poor. When I break a world record, maybe people get to know something else about Ethiopia, something good. We can’t make planes or cars, we don’t have the materials. We do what we can.”',
      }, 
      {
        imageSrc: './images/Marcus Samuelsson.jpg',
        imageDescription: 'Marcus Samuelsson',
        speechTitle: 'Marcus Samuelsson',
        profession: 'Ethiopian-Swedish chef',
        quotes: '“In Ethiopia, food is often looked at through a strong spiritual lens, stronger than anywhere else I know. It’s the focal point of weddings, births, and funerals and is a daily ceremony from the preparation of the meal and the washing of hands to the sharing of meals.”',
        }
      ];

const speakersElement = document.querySelector('.personal-info');

// speakersElement.forEach()

for (let i = 0; i < speakersData.length; i += 1) {
speakersElement.innerHTML += `
  <div class="single">
    <img
      class="img-speaker"
      src="${speakersData[i].imageSrc}"
      alt="${speakersData[i].imageDescription}"
    />
    <div class="speeches">
      <h3 class="speech-title">${speakersData[i].speechTitle}</h3>
      <p class="profesion">${speakersData[i].profession}</p>
      <hr class="pro-break" />
      <p class="quotes">
        ${speakersData[i].quotes}
      </p>
    </div>
  </div>`;
};