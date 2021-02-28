document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'fries',
            image: 'images/fries.png'
        },
        {
            name: 'fries',
            image: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            image: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            image: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            image: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            image: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            image: 'images/pizza.png'
        },
        {
            name: 'pizza',
            image: 'images/pizza.png'
        },
    ]

    cardArray.sort(() => Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        }
            else {
             cards[optionOneId].setAttribute('src', 'images/blank.png')
             cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulation! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        var cardID = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardID].name)
        cardsChosenId.push(cardID)
        this.setAttribute('src', cardArray[cardID].image)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})