const { useEffect, useState, Fragment } = React
const { useParams, useNavigate } = ReactRouterDOM

import { noteService } from "../services/note.service.js"
import { NotePreview } from "../cmps/note-preview.jsx"

export function NoteDetails({ selectedNote, onEditNote, onRemoveNote }) {
    // * This component is all about the modal -> note display
    const [note, setNote] = useState(null)
    const [isFocused, setIsFocused] = useState(false)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadNote()
    }, [])

    function loadNote() {
        noteService.get(params.noteId)
            .then(setNote)
            .catch(err => {
                if (!note) return
                console.log('Had issues in note details:', err);
                navigate('/note')
            })
        if (selectedNote) {
            noteService.get(noteId)
                .then(setNote)
            console.log("triggered:", selectedNote)
        }
        setIsFocused(true)
    }

    function unfocusNote() {
        setIsFocused(false)
        console.log("unfocus called:")
        navigate('/note')
    }


    if (selectedNote === null) navigate('/note')
    if (!note) return

    return (
        <Fragment>
            {isFocused ? <div className="dimmer" onClick={unfocusNote}></div> : ''}
            <section className="note-details bglightgray round-corners">
                {console.log("typeof onEditNote from note-details:", typeof onEditNote)}
                    <NotePreview isFocused={isFocused} onEditNote={onEditNote} note={note} onRemoveNote={onRemoveNote} />
            </section>
        </Fragment>
    )
}