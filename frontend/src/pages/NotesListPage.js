import {useState, useEffect} from 'react'

import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'
const NotesListPage = () => {
    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    // async = function always return a promise 
    // await = only works inside async functions, waits until promise settles and return its result
    //      - does not cost CPU resources and does it in the background
    let getNotes = async () => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        setNotes(data)
    }

    return(
        <div className='notes'>
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782; Notes</h2>
                <p className='notes-count'>count: {notes.length}</p>
            </div>
            <div className='notes-list'>
                {notes.map((note, index) => {
                    return <ListItem key={index} note={note} />
                })}
            </div>
            <AddButton/>
        </div>
    )
}

export default NotesListPage