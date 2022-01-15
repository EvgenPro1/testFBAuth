import React, {useState} from 'react';
import {Link} from "react-router-dom";

export const CharsList = ({state, handleChange, handleAddPhoto}) => {
    const [modalId, setModalId] = useState(false) //keep id of char for adding photo
    const [link, setLink] = useState('') //keep link of char for adding photo

    const handler = (id, e) => {
        e.preventDefault()
        if (e.target.attributes.oppositename) { //just protection from error
            const {name, oppositename} = e.target.attributes
            handleChange(id, name.value, oppositename.value)//connect pair of relate fields
        }
    }

    const handleOpenCloseModal = (id = false) => {
        setModalId(typeof id === "number" ? id : false) //if user clicks anywhere but not input for links modal-window will close
        setLink('')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLink(e.target.value)
        handleAddPhoto(modalId, link)
        setModalId(false)
    }


    const list = state.map(({name, status, id, like, dislike, photo}) =>
            <li key={id}>
                <div className='listRow'>
                    <Link className='pointer' to={`/${id}`}>
                        name: <span className='bold'>{name}</span>
                        , status: <span className='bold'>{status}</span>
                    </Link>
                    <span className='bold pointer p-2' onClick={(e) => handler(id, e)}>
<span className={like ? "likes m-2" : 'm-2'} name='like' oppositename='dislike'>&#128402;</span>
<span className={dislike ? "dislikes m-2" : 'm-2'} name='dislike' oppositename='like'>&#128403;</span>
</span>
                    <span className='bold pointer' onClick={() => handleOpenCloseModal(id)}>add photo (link)</span>
                    {photo && <img src={photo} className='photo' alt="wrong path" height='50px' width='50px'/>}
                </div>
            </li>
    )

    return (
        <>
            <ol>
                {list}
            </ol>
            {modalId && <>
                <div className='background-gray' onClick={handleOpenCloseModal}/>
                <div className='modal'>
                    <h3>Add photo (link) to {state[modalId-1].name}</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <input required={true} onChange={(e) => setLink(e.target.value)} value={link}/>
                        <button type='submit'>add photo</button>
                        <div onClick={handleOpenCloseModal} className='close pointer bold'>x</div>
                    </form>
                </div>
            </>
            }
        </>
    );
};
