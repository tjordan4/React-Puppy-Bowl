const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/tjordan4/players'

export const getAllPlayers = async () => {
    const response = await fetch(APIURL)
    const result = await response.json()

    return result.data.players
} 