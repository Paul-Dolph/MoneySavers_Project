//Flipping card
const card = document.querySelector('.card__inner'); //constant variable

card.addEventListener('click', function (x) {
  card.classList.toggle('is-flipped'); //action of flipping the card
});


//Typing animation
const texts = ['finacially', 'manage', 'save :)' ];
let count = 0; //counting words
let index = 0; //index/position of letters
let present_text = ''; //the current letter
let letter = ''; //the letter selected

(function type() {
  if (count == texts.length) {
    count = 0;
  }
  present_text = texts[count];
  letter = present_text.slice(0, ++index); //goes over each word of given text and adds letters to var

  document.querySelector('.typing').textContent = letter;
  if (letter.length === present_text.length) {
    //if the length of the word is equal to the current word
    count++; //Change words
    index = 0; //Loop the order of words
  }
  setTimeout(type, 600);
})();
