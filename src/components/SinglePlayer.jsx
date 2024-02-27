import { useEffect, useState } from "react"
import { getSinglePlayer } from "../API/index.js";
import { useParams } from "react-router-dom/dist/index.js";

export default function SinglePlayer(){
    const { id } = useParams()
    const [player, setPlayer] = useState(null);
    

    if (!player) {
        return <div>Loading Player {id}...</div>
    }
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
    
    return  <article key={player.id}>
                
                <h2>
                <img src={player.imageUrl} />
                {player.name}</h2>
                <p>{player.id}</p>
                <h3>{player.breed}</h3>
                <h3>{player.status}</h3>
            </article>
}