let memoria = null
const positions = document.querySelectorAll("[data-cell]");
        const movePiece = (e) => {
        const piece = e.target.classList
            if (piece.length != 0 && memoria == null) {
                memoria = piece.value
                piece.remove(memoria)
                console.log("Valor: " + piece.value + "Memoria: " + memoria)
            } else {
                if (piece.length == 0 && memoria != null) {
                    piece.add(memoria)
                    memoria = null
                    console.log("Valor: " + piece.value + "Memoria: " + memoria)
                } else {
                    console.log("foi pra baixo\n"+"Valor: " + piece.value + "Memoria: " + memoria)
                    console.log(piece.length)
                }
            }
        };
    for (const position of positions) {  
        position.addEventListener('click', movePiece)
    }