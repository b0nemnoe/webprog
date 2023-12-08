const cards = [
  { id: 1, value: 'A' },
  { id: 2, value: 'B' },
  { id: 3, value: 'C' },
  { id: 4, value: 'D' },
  { id: 5, value: 'E' },
  { id: 6, value: 'F' },
  { id: 7, value: 'G' },
  { id: 8, value: 'H' },
];

let shuffledCards = [];
let selectedCards = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function renderBoard() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = '';

  shuffledCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.id = card.id;
    cardElement.textContent = card.value;
    cardElement.addEventListener('click', handleCardClick);
    setTimeout(1000)
    gameBoard.appendChild(cardElement);
  });
}

function handleCardClick() {

  const clickedCard = this;
  if (selectedCards.length < 2 && !selectedCards.includes(clickedCard)) {
    selectedCards.push(clickedCard);
    clickedCard.textContent = clickedCard.dataset.id; // kártya megjelenítése
    clickedCard.classList.add('selected'); // háttér megváltoztatása

    if (selectedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }
}

function checkMatch() 
{
  const [card1, card2] = selectedCards;

  if (card1.dataset.id === card2.dataset.id) 
  {
    // Match
    card1.removeEventListener('click', handleCardClick);
    card2.removeEventListener('click', handleCardClick);

    selectedCards = [];

    if (document.querySelectorAll('.card').length === 0) {
      setTimeout(() => {
        alert('Gratulálok! Minden kártya párt megtaláltál!');
        startGame();
      }, 500);
    }
  } else {
    // Not a match
    card1.textContent = '';
    card2.textContent = '';
    card1.classList.remove('selected');
    card2.classList.remove('selected');
    selectedCards = [];
  }
}

function startGame() {
  shuffledCards = shuffle([...cards, ...cards]);
  renderBoard();

  setTimeout(() => {
    document.querySelectorAll('.card').forEach(card => {
      card.textContent = ''; // kártyák megfordítása 5mp után
    });
  }, 5000);
}

startGame();