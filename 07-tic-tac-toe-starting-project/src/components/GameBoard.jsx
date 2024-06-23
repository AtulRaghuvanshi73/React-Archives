
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectSquare, turns }){

    

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelection(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     })

    //     onSelect();
    // }

   return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <oL>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={onSelectSquare}>{playerSymbol}</button>
                </li>)}
            </oL>
        </li>)}
   </ol>
}