import { useState } from "react"
import { useNavigate } from "react-router-dom/dist";


export default function NewPlayerForm(){
    const navigate = useNavigate()
    
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [image, setImage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/tjordan4/players', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: name,
                    breed: breed,
                    imageUrl: image
                    })
                })
                const result = await response.json();
            }   catch(err){
            console.error(err)
        }

        navigate('/')
    }

    return <form onSubmit={handleSubmit}>
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

