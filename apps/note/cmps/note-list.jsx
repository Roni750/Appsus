import { Toolbar } from "./toolbar.jsx"
import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, onRemoveNote, onNoteDuplicate, onEditNote }) {
    return (
        <ul className="note-list">
            {notes.map(note => (
                <li key={note.id}>
                    <div className="note-card">
                        <NotePreview
                            note={note}
                            onEditNote={onEditNote}
                            onRemoveNote={onRemoveNote}
                            onNoteDuplicate={onNoteDuplicate}
                        />
                        <Toolbar note={note} onRemoveNote={onRemoveNote} onNoteDuplicate={onNoteDuplicate} />
                    </div>
                </li>
            ))
            }
        </ul >
    )
}
