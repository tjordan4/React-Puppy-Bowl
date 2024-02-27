import { useState, useEffect } from "react"
import { getAllPlayers } from "../API/index.js";
import { useNavigate } from "react-router-dom";

export default function AllPlayers(){
    const navigate = useNavigate()
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        async function fetchPlayers() {
            try {
                const players = await getAllPlayers()
                setPlayers(players)
            }  catch (err) {
                console.error(err)
            }
            
        }
        fetchPlayers();
    }, [])
    
    
    return <main>{
        players.map((player) => {
            return <article key={player.id}>
                <h2 onClick={() => navigate(`/players/${player.id}`)}>
                    <img src={player.imageUrl}/>
                    {player.name}
                </h2>
            </article>
        })
    }</main>
}