let memoria = null
let itYourTurn = true

const swapTurn = () => {
    itYourTurn = !itYourTurn
}

const positions = document.querySelectorAll("[data-cell]");
        const movePiece = (e) => {
        const piece = e.target.classList
        const pieceToMove = itYourTurn ? "circulocreme" : "circulobrown" 
        console.log(itYourTurn) 
        console.log(piece.value)  
        if (pieceToMove == piece.value && memoria == null) {
            if (piece.length != 0 && memoria == null) {
                memoria = piece.value
                piece.remove(memoria)
            } } else if (piece.length == 0 && memoria != null) {
                piece.add(memoria)
                memoria = null
                swapTurn()
            } else {
            }
        };
    for (const position of positions) {  
        position.addEventListener('click', movePiece)
    }
