const { useEffect, useState, useRef } = React
const { Outlet, NavLink, useNavigate } = ReactRouterDOM

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

        const handler = (e) => {
            if (e.target) {
                setSelectedNote(false)
            }
        }
        document.addEventListener("mousedown", handler)
    }, [filterBy])

    function loadNotes() {
        noteService.query(filterBy).then(notes => setNotes(notes))
    }

    function onEditNote(newContent, noteId) {
        console.log("func called:")
        noteService.get(noteId)
            .then(editedNote => {
                editedNote.info.txt = newContent
                noteService.save(editedNote)
            })
    }

    function saveNote(noteToAdd) {
        // * Disable creation of empty notes
        if (!noteToAdd.info.title && !noteToAdd.info.txt) return
        noteService.addNote(noteToAdd)
            .then(newNote => setNotes([...notes, newNote]));
    }

    function onRemoveNote(noteId) {
        console.log("remove function called:")
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(note => note.id !== noteId)
            setNotes(updatedNotes)
        })
    }

    function onNoteDuplicate(noteId) {
        console.log("note duplication func called:", noteId)
        noteService.get(noteId).then(note => {
            noteService.duplicateNote(note).then(newNote => {
                setNotes(prevNotes => [...prevNotes, newNote]);
                setSelectedNote(newNote);
            })
        })
    }

    function onSelectNote(note) {
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
            <NoteList notes={notes} onEditNote={onEditNote} onSelectNote={onSelectNote} onNoteDuplicate={onNoteDuplicate} onRemoveNote={onRemoveNote} />
            {selectedNote && (
                <NoteDetails onRemoveNote={onRemoveNote} onEditNote={onEditNote} note={selectedNote} />
            )}
            <Outlet />
        </section>
    )
}