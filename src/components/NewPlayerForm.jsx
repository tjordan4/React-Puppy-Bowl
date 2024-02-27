import { useState } from "react"
import { addPlayer } from "../API"
import { useNavigate } from "react-router-dom/dist";


export default function NewPlayerForm(){
    const naviagte = useNavigate()
    
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [image, setImage] = useState('')

    async function handleSubmit(e) {
         e.preventDefault()
        const playerObject = {
            name: name,
            breed: breed,
            imageUrl: image,
        }
        await addPlayer(playerObject)

        navigate('/')
    }

    return <form>
        <h1>Add Player</h1>
        <div>
            <label >Name</label>
            <input name='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            <label >Breed</label>
            <input name='breed' value={breed} onChange={(e) => setBreed(e.target.value)}/>
        </div>
        <div>
            <label>Image URL</label>
            <input name='image' value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div>
            <input type="submit" />
        </div>
    </form>
}