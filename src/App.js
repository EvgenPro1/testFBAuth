import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

import {AutoSearch} from "./components/AutoSerch";
import {Profile} from "./components/Profile";
import AuthFb from "./components/AuthFB";
import {FavoritesChars} from "./components/FavoritesChars";
import {getAllChars} from "./API/asyncActoins";
import {CharsList} from "./components/CharsList";

import './App.css';

function App() {
    const [state, setState] = useState([]) //here we will keep our arr of characters

    const setStateToLocalStorage = () => { // this function update localStorage
        localStorage.setItem('charList', JSON.stringify(state))
    }
    useEffect(async () => {
        //here we check is any thing (charList) in LS
        const oldState = localStorage.getItem('charList')
        if (oldState) {
            //if we have charList we don't send any requests because we know that info on server won't updates
            setState(JSON.parse(oldState))
        } else {
            //we send request at first visiting our page
            const newState = await getAllChars()
            //we add some new fields for correct working
            setState(await newState.map(item => ({...item, like: false, dislike: false, photo: null})))
        }
    }, [])

    //if users something change on page we update LS and save this changing
    useEffect(() => {
        setStateToLocalStorage()
    }, [state])

    //this function controls likes/dislikes and updates state
    const handleChange = (itemId, action, oppositeName) => {
        const indexId = state.findIndex(({id}) => id === itemId)
        const newItem = {...state[indexId]}
        newItem[action] = !(state[indexId][action])
        newItem[oppositeName] = false
        const newState = [...state]
        newState[indexId] = newItem
        setState(() => newState)
    }

    // this function adds links to photos for characters witch users choose
    const handleAddPhoto = (itemId, link) => {
        const indexId = state.findIndex(({id}) => id === itemId)
        const newItem = {...state[indexId]}
        newItem.photo = link
        const newState = [...state]
        newState[indexId] = newItem
        setState(() => newState)
    }

    return (
        <BrowserRouter>
            <div className="app">
                <div className='container'>
                    <div className="navbar">
                        <Link className='m-5' to='/'><span className='pointer navText'>Main page</span></Link>
                        <Link className='m-5' to='/Favorites_Chars'><span className='pointer navText'>Favorite's chars
                            page</span></Link>
                        <AuthFb/>
                    </div>
                    <AutoSearch state={state}/>
                    <Routes>
                        <Route path='/' element={<CharsList state={state} handleChange={handleChange}
                                                            handleAddPhoto={handleAddPhoto}/>}/>
                        <Route path='/Favorites_Chars' exact element={<FavoritesChars state={state}/>}/>
                        <Route path='/:id' exact element={<Profile state={state}/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
