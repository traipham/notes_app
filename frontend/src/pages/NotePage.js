import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// Assets
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
    let { id } = useParams()
    let [note, setNote] = useState(null)
    let navigate = useNavigate()

    useEffect(() => {
        getNote()
    }, [id])

    let getNote = (async() => {
        if (id === 'new'){
            return
        }
        let response = await fetch(`/api/notes/${id}/`)
        let data = await response.json()
        setNote(data)
    })

    let updateNote = async () => {
        // Call api url to update
        fetch(`/api/notes/${id}/update/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(note)
            }
        )
    } 

    let handleSubmit = () => {  
        if (note === null) {
            navigate('/')
            return
        }
        if (id !== 'new' && note.body === ''){
            deleteNote()
        } else if (id !== 'new'){
            updateNote()
        } else if (id === 'new' && note.body !== null){
            createNote()
        }
        navigate('/')
    }

    let enterKeyHandler = (e) => {
        if(e.key === 'Enter' && !e.shiftKey){
            handleSubmit()
        }
    }

    let deleteNote = async () => {
        fetch(`/api/notes/${id}/delete/`, {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        navigate('/')
    }

    let createNote = async () => {
        // Call api url to update
        fetch(`/api/notes/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        }
        )
    } 

    let handleChange = (val) =>{
        setNote({ ...note, 'body': val })
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <ArrowLeft onClick={handleSubmit}/>
                </h3>
                {id !== 'new' ? (                
                    <div>
                        <span className='note-button' name='delete-button' onClick={deleteNote}>Delete</span >
                    </div>
                ) : (
                    <div>
                        <span className='note-button' name='done-button' onClick={handleSubmit}>Done</span >
                    </div>
                )}
            </div>
            <textarea onChange={(e) => {handleChange(e.target.value)}} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage