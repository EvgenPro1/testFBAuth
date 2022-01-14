// import initialListProducts from "../initialListProducts";
// import axios from "axios";
// // import {BUY_PRODUCT, DECREMENT_PRODUCT, DELETE_PRODUCT, HANDLE_COUNT_PRODUCT, INCREMENT_PRODUCT} from '../actions'
//
import {useEffect} from "react";
import axios from "axios";
import {getAllChars} from "../../API/asyncActoins";
import {GET_ALL_CHARS} from "../actions";

/** useEffect(async ()=>{
//     setCharArr(await getAllChars())
// }, [])
//*/
const initURL = 'https://rickandmortyapi.com/api/character'



// const getAllChars = async (url = initURL) => await axios.get(`${url}`)
//     .then(async result=> result.data.info.next
//         ? [...result.data.results, ...await getAllChars(result.data.info.next)]
//         : result.data.results)
//

export const charReducer = (state = [], {type, payload}) => { //приходит криейтор и целый обект товара
    switch (type) {
        case GET_ALL_CHARS:
            console.log(payload);
            return payload

//         // case BUY_PRODUCT:
//         //     const newStateBuy = state.map((item) => ({...item})) // зная уровень вложенности копируем стейт, чтоб не мутировать
//         //     const productBuy = newStateBuy.find(({id}) => payload.id === id) //определяем есть ли продукт в корзине
//         //     const indexBuy = newStateBuy.findIndex(({id}) => id === payload.id) // находим индекс товара или -1
//         //     if (productBuy) {  // если товар есть но жмакаем "купить товар" а не "+"...
//         //         ((() => {
//         //             newStateBuy[indexBuy].quantity++ //добавляем 1
//         //         })())
//         //     }
//         //     newState = productBuy ? [...newStateBuy] : [...newStateBuy, payload] //если товара нет добавляем его
//         //     localStorage.setItem('listProduct', JSON.stringify(newState))
//         //     return newState
//         //
//         // case INCREMENT_PRODUCT:
//         //     const newStateInc = state.map((item) => ({...item}))
//         //     const productInc = newStateInc.find(({id}) => payload.id === id) // нашли в корзине присланый товар
//         //     productInc.quantity++
//         //     localStorage.setItem('listProduct', JSON.stringify([...newStateInc]))
//         //     return   [...newStateInc]
//         //
//         //
//         // case DECREMENT_PRODUCT:
//         //     const newStateDec = state.map((item) => ({...item}))
//         //     const productDec = newStateDec.find(({id}) => payload.id === id)  //копипаста предыдущего
//         //     if (productDec.quantity) {
//         //         productDec.quantity--
//         //     }
//         //     if (!productDec.quantity) { //обязательно проверили остался ли товар
//         //         const indexDec = newStateDec.findIndex(({id}) => id === payload.id)
//         //         newStateDec.splice(indexDec, 1) // если нет, удалили со списка объект
//         //     }
//         //     localStorage.setItem('listProduct', JSON.stringify([...newStateDec]))
//         //     return [...newStateDec]
//         //
//         // case HANDLE_COUNT_PRODUCT:
//         //     const newHandleCount = state.map((item) => ({...item}))
//         //
//         //           const handleCount = newHandleCount.find(({id}) => payload[0].id === id)  //копипаста предыдущего
//         //
//         //           if (!+payload[1] && window.confirm('Точно хотите удалить товар из корзины?') ) { //обязательно проверили остался ли товар
//         //               const indexHandleCount = newHandleCount.findIndex(({id}) => id === payload[0].id)
//         //               newHandleCount.splice(indexHandleCount, 1) // если нет, удалили со списка объект
//         //           }
//         //     if (+payload[1]) {
//         //         handleCount.quantity = Math.floor(+payload[1],0)
//         //     }
//         //     localStorage.setItem('listProduct', JSON.stringify([...newHandleCount]))
//         //     return [...newHandleCount]
//         //
//         // case DELETE_PRODUCT: // тут просто нашли индекс товара в корзине и удалили товар
//         //     const newStateDel = state.map((item) => ({...item}))
//         //     const indexDel = newStateDel.findIndex(({id}) => id === payload.id)
//         //     newStateDel.splice(indexDel, 1)
//         //     localStorage.setItem('listProduct', JSON.stringify([...newStateDel]))
//         //     return [...newStateDel]
//
        default:
            // const newState = payload.map(item=>({...item, like:false, dislike:false}))
            // localStorage.setItem('charArr', JSON.stringify([...newState]))
            return state
    }
}
