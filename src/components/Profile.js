import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

export const Profile = ({state}) => {
    const navigate = useNavigate()
    const urlLocation = useLocation()

    const charId = urlLocation.pathname.slice(1)
    try {
        const {name, species, gender, location, episode, status, created} = state.find(({id}) => id === +charId)
        const episodesList = episode.map(item=><li key={item}>{item}</li>)
        return (
            <div>
                <h2>Name: {name}</h2>
                <h3>Species: {species}</h3>
                <h3>Gender: {gender}</h3>
                <h3>Status: {status}</h3>
                <h3>Created: {created.slice(0, -5)}</h3>
                <h4>location: <a className='italic' href={location.url}>{location.name}</a></h4>
                <h4>list of episodes: <ul>{episodesList}</ul></h4>
            </div>
        );
    }
    catch {
     navigate(`/`)
        return <div/>
    }

};
