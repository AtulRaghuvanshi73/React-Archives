import { useState } from "react"

const Player = ({initialName, playerSymbol}) => {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing((editing) => !editing);
    }

    function handleChange(e){
        setPlayerName(e.target.value)
    }

    let editablePlayer = <span className="player-name">{playerName}</span>

    if(isEditing){
        editablePlayer = <input type="text" required defaultValue={playerName}  onChange={handleChange}/>
    }

  return (
            <li>
                <span className="player">
                    {editablePlayer}
                  <span className="player-symbol">{playerSymbol}</span>
                </span>
                <button
                    onClick={handleEditClick}
                >{isEditing ? 'Save' : 'Edit'}</button>
            </li>
  )
}

export default Player