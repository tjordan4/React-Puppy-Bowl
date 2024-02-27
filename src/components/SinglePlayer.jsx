import { useEffect, useState } from "react"
import { deletePlayer, getSinglePlayer } from "../API/index.js";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function SinglePlayer(){
    const { id } = useParams()
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        async function fetchSinglePlayer(){
            try {
                const player = await getSinglePlayer(id)
                setPlayer(player)
            }   catch(err){
                console.error(err)
            }
        }
        fetchSinglePlayer()
    }, [])

    async function deleteHandler(playerId){
        await deletePlayer(playerId)

        Navigate('/')
    }

    if (!player) {
        return <div>Loading Player {id}...</div>
    }
    
    return  <article key={player.id}>
                
                <h2>
                <img src={player.imageUrl} />
                {player.name}</h2>
                <p>{player.id}</p>
                <h3>{player.breed}</h3>
                <h3>{player.status}</h3>
                <button onClick={() => deleteHandler(id)}>Delete!</button>
            </article>
}