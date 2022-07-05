let memoria = null
let itYourTurn = true
let player = ""
const pecasPretas = ["peaopreto", "torrepreta", "cavalopreto", "bispopreto", "rainhapreta", "reipreto"]
const pecasBrancas = ["peaobranco", "torrebranca", "cavalobranco", "bispobranco", "rainhabranca", "reibranco"]
const swapTurn = () => {
    itYourTurn = !itYourTurn
}
const sideMenu = document.querySelector(".telamenu")
sideMenu.innerHTML = "Bem vindo ao jogo, ainda faltam algumas implementações."
const p = document.createElement('p')
sideMenu.append(p)


const positions = document.querySelectorAll("[data-cell]");
        const movePiece = (e) => {
        if (itYourTurn) {
            player = "jogador das peças claras"
        } else { player = "jogador das peças escuras"}
        const piece = e.target.classList
        const pieceToMove = itYourTurn ? pecasBrancas.filter((value)=>{
            return piece.value == value
        }) : pecasPretas.filter((value) => {
            return piece.value == value
        });
        console.log(itYourTurn) 
        console.log(pieceToMove)
        console.log(piece.value)  
        if (piece.value == pieceToMove && memoria == null) {
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
