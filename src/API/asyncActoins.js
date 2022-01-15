import axios from "axios";

const initURL = 'https://rickandmortyapi.com/api/character' //our path

/** we use recursion to get one big array */
export const getAllChars = async (url = initURL) => await axios.get(url)
    .then(async result=> result.data.info.next
        ? [...result.data.results, ...await getAllChars(result.data.info.next)]
        : result.data.results)
