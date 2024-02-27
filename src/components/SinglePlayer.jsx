import { useEffect, useState } from "react"
import { getSinglePlayer } from "../API/index.js";

export default function SinglePlayer(){
    const [player, setPlayer] = useState([]);
    useEffect(() => {
        async function fetchSinglePlayer(){
            try {
                const player = await getSinglePlayer
                setPlayer(player)

            }   catch(err){
                console.error(err)
            }
        }
        fetchSinglePlayer()
    })
    
    return <main>{
        player.map(() =>{
            return <div key={player.id}>
                <img src={player.imageUrl} alt="" />
                <h2>{player.name}</h2>
                <p>{player.id}</p>
                <h3>{player.breed}</h3>
                <h3>{player.status}</h3>
            </div>
        })
    }
    </main>
}