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

    createBoard()

})