
 /* atividade switchcase */


let chessPiece = "BiShop";

switch (chessPiece.toLocaleLowerCase()) {
    case "bishop":
     console.log("diagonal");
     break;

    case "pawn":
     console.log ("one step foward");
     break;

    case "tower":
        console.log("four step foward");
        break;

    default: 
    console.log("undefied chess piece.");

}


