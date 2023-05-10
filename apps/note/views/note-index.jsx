const { useEffect, useState } = React

import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteAdd } from "../cmps/add-note.jsx"

export function NoteIndex() {

    const [notes, setNotes] = useState([])
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        loadNotes()
    }, [])

    function onRemoveNote(noteId) {
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(note => note.id !== noteId)
            setNotes(updatedNotes)
        })
    }

    function onEditNote(noteId) {
        
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    function loadNotes() {
        noteService.query(notes).then(notes => setNotes(notes))
    }
    console.log("render")
    return (
        <section className="notes-index">
            <NoteAdd />
            <NoteList notes={notes} onRemoveNote={onRemoveNote} onEditNote={onEditNote} />
        </section>
    )
}