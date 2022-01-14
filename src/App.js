import './App.css';
import {useEffect, useState} from "react";
import {CharsList} from "./components/CharsList";
import {getAllChars} from "./API/asyncActoins";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {FavoritesChars} from "./components/FavoritesChars";
import {AutoSearch} from "./components/AutoSerch";
import {Profile} from "./components/Profile";
import AuthFb from "./components/AuthFB";

function App() {
    const [state, setState] = useState([])
    const setStateToLocalStorage = () => {
        localStorage.setItem('charList', JSON.stringify(state))
    }
    useEffect(async () => {
        // localStorage.setItem('charList', JSON.stringify([...newHandleCount]))
        const oldState = localStorage.getItem('charList')
        if (oldState) {
            setState(JSON.parse(oldState))
        } else {
            const newState = await getAllChars()
            setState(await newState.map(item => ({...item, like: false, dislike: false, photo: null})))

        }
    }, [])

    useEffect(()=> {
        setStateToLocalStorage()
    },[state])

    const handleChange = (itemId, action, oppositeName) => {
        const indexId = state.findIndex(({id}) => id === itemId)
        const newItem = {...state[indexId]}
        newItem[action] = !(state[indexId][action])
        newItem[oppositeName] = false
        const newState = [...state]
        newState[indexId] = newItem
        setState(() => newState)
    }

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
