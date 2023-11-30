import axios from 'axios';
const Backend_ENDPOINT= "https://qtify-backend-labs.crio.do";
export const fetchTopAlbums =async()=>{
try{
const response= await axios.get(`${Backend_ENDPOINT}/albums/top`)
return response.data;
}catch(e){
    console.log(e)
}

}
export const fetchNewAlbums=async()=>{
    try{
        const response= await axios.get(`${Backend_ENDPOINT}/albums/new`)
        return response.data;
        }catch(e){
            console.log(e)
        }         
                 

} 

export const fetchSongs=async()=>{
    try{
        const response= await axios.get(`${Backend_ENDPOINT}/songs`)
        return response.data;
        }catch(e){
            console.log(e)
        }         
                 

} 

export const fetchFilters= async()=>{
    try{
        const response= await axios.get(`${Backend_ENDPOINT}/genres`)
        console.log(response.data)
        return response.data;
        }catch(e){
            console.log(e)
        }         
                 

} 




