const { useEffect, useState } = React

import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteAdd } from "../cmps/add-note.jsx"
import { NoteDetails } from "./note-details.jsx"

export function NoteIndex() {
    const [selectedNote, setSelectedNote] = useState(null);
    const [notes, setNotes] = useState([])
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query(filterBy).then(notes => setNotes(notes))
    }

    function saveNote(noteToAdd) {
        noteService.addNote(noteToAdd)
            .then(newNote => setNotes([...notes, newNote]));
    }

    function onRemoveNote(noteId) {
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(note => note.id !== noteId)
            setNotes(updatedNotes)
        })
    }

    function onSelectNote(note) {
        // debugger
        console.log("note:", note)
        setSelectedNote(note)
        console.log("selectedNote:", selectedNote)
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }


    console.log("render")
    return (
        <section className="notes-index">
            <NoteAdd saveNote={saveNote} setNotes={setNotes} />
            <NoteList notes={notes} onSelectNote={onSelectNote} onRemoveNote={onRemoveNote} />
            {selectedNote && (
                <NoteDetails note={selectedNote}/>
            )}
        </section>
    )
}