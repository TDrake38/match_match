document.addEventListener('DOMContentLoaded', () => {

    //card option
    const cardArray = [
        {
            name: 'circle',
            img: 'images/MMCard_circle.png'
        },
        {
            name: 'circle',
            img: 'images/MMCard_circle.png'
        },
        {
            name: 'eye',
            img: 'images/MMCard_eye.png'
        },
        {
            name: 'eye',
            img: 'images/MMCard_eye.png'
        },
        {
            name: 'face',
            img: 'images/MMCard_face.png'
        },
        {
            name: 'face',
            img: 'images/MMCard_face.png'
        },
        {
            name: 'ladder',
            img: 'images/MMCard_ladder.png'
        },
        {
            name: 'ladder',
            img: 'images/MMCard_ladder.png'
        },
        {
            name: 'mouse',
            img: 'images/MMCard_mouse.png'
        },
        {
            name: 'mouse',
            img: 'images/MMCard_mouse.png'
        },
        {
            name: 'hat',
            img: 'images/MMCard.png'
        },
        {
            name: 'hat',
            img: 'images/MMCard.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for ( let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/MMCard_back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches 
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            //TODO: change the alert to something else 
            //alert('Match!!')
            cards[optionOneId].setAttribute('src', 'images/MMCard_blank.png')
            cards[optionTwoId].setAttribute('src', 'images/MMCard_blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/MMCard_back.png')
            cards[optionTwoId].setAttribute('src', 'images/MMCard_back.png')
            //TODO: change the alert to something else 
            //alert('Sorry, try again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats, you got em all!!'
        }
    }

    //flip the card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})