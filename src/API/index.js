const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/tjordan4/players'

export const getAllPlayers = async () => {
    const response = await fetch(APIURL)
    const result = await response.json()

    return result.data.players
} 

export const getSinglePlayer = async (playerId) => {
    const response = await fetch(`${APIURL}/${playerId}`)
    const result = await response.json()
    
    console.log(result.data.player)
    return result.data.player
}

export const deletePlayer = async (playerId) => {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/tjordan4/players/${playerId}`, {
                method: "DELETE"
        })
    }   catch(err){
        console.error(err)
    }
        
}