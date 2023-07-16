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
        updateNote()
        navigate('/')
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

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <ArrowLeft onClick={handleSubmit}/>
                    <div>
                        <span className='note-button' name='delete-button' onClick={deleteNote}>Delete</span >
                    </div>
                </h3>
            </div>
            <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} defaultValue={note?.body}></textarea>
        </div>
    )
}

export default NotePage