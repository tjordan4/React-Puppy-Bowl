const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/tjordan4/players'

export const getAllPlayers = async () => {
    const response = await fetch(APIURL)
    const result = await response.json()

    return result.data.players
} 

export const getSinglePlayer = async (playerId) => {
    try{
    
    const response = await fetch(`${APIURL}/players/${playerId}`)
    const result = await response.json()
    
    return result.data
    
    } catch(err){
        console.error(err)
    }
}