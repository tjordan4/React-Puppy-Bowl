import { useState, useEffect } from "react"
import { getAllPlayers } from "../API/index.js";

export default function AllPlayers(){
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        async function fetchPlayers() {
            try {
                const players = await getAllPlayers()
                setPlayers(players)
                // console.log("Players: ", players)
            }  catch (err) {
                console.error(err)
            }
            
        }
        fetchPlayers();
    }, [])
    
    
    return <main>{
        players.map((player) => {
            return <article key={player.id}>
                <h2>
                    <img src={player.imageUrl}/>
                    {player.name}
                </h2>
            </article>
        })
    }</main>
}