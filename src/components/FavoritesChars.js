import React from 'react';

export const FavoritesChars = ({state}) => {
    const favCharList = state.filter(({like}) => like).map(({
                                                                name,
                                                                species,
                                                                gender,
                                                                location,
                                                                episode,
                                                                status,
                                                                created,id
                                                            }) => {
            const episodeList = episode.map(item => <li key={item}>{item}</li>)
            return <li key={id}>
                name: <span className='bold'>{name}</span>,
                species: <span className='bold'>{species}</span>,
                gender: <span className='bold'>{gender}</span>,
                <a className='italic' href={location.url}> location: {location.name}</a>,
                status: <span className='bold'>{status}</span>,
                created: <span className='bold'>{created.slice(0,-5)}</span>,
                <div>episode(s): <ul>{episodeList}</ul></div>
            </li>
        }
    )
    return (
        <ol>
            {favCharList}
        </ol>
    );
};
