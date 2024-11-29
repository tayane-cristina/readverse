import React from 'react';
import axios from 'axios'

const FecthBooksApi = () => {

async function getBooksApiData() {
    try {
        const response = await axios('https://www.googleapis.com/books/v1/volumes?q=JavaScript');
        console.log(response.data.items)
    } catch (error) {
        console.log(error)
    }
}

getBooksApiData()
return(
<div>

</div>

)
}
export default FecthBooksApi;