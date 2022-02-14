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

    const grid = document.querySelector('.grid')
    const cardsChosen = []
    const cardsChosenId = []

    //create your board
    function createBoard() {
        for ( let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/MMCard_back.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //check for matches 
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
    }

    //flip the card
    function flipcard() {
        const cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})