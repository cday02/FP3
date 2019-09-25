import axios from "axios" 

const SteamAPIs = "VJBSHGT9Bryfs1_1mqvCk83urCw"
const URL="http://api.steamapis.com/market/items/489940?api_key=" + SteamAPIs
export default {
    searchItem: function(query){
    return axios.get(`${URL}${query}`)
    }
}