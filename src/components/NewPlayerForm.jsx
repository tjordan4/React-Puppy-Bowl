// import { useState } from "react"
// import { addPlayer } from "../API"
// import { useNavigate } from "react-router-dom/dist";


// export default function NewPlayerForm(){
//     const [name, setName] = useState('')
//     const [breed, setBreed] = useState('')
//     const [image, setImage] = useState('')

//     async function handleSubmit(e) {
        //  e.preventDefault()
//         const playerObject = {
//             name: name,
//             breed: breed,
//             imageUrl: image,
//         }
        // await addPlayer(playerObject)

        // navigate('/')
//     }

//     return <form>
//         <label >Name</label>
//         <input name='name' value={name} onChange={(e) => setName(e.target.value)}/>
//         <label >Breed</label>
//         <input name='breed' value={breed} onChange={(e) => setBreed(e.target.value)}/>
//         <label>Image URL</label>
//         <input name='image' value={image} onChange={(e) => setImage(e.target.value)}/>
//         <input type="submit" />
//     </form>
// }