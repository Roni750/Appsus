const { useState, useEffect } = React

import { noteService } from "../services/note.service.js"

export function NoteAdd({ setNotes, saveNote }) {
    const [isTitleFocused, setIsTitleFocused] = useState(false)
    const [isTextFocused, setIsTextFocused] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [noteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote())

    useEffect(() => {
        const handleClick = (event) => {
            if (!isTitleFocused && !isTextFocused) {
                onSaveNote()
                setIsFocused(false)
            }
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [isTitleFocused, isTextFocused])

    function handleChange({ target }) {
        const field = target.name
        const value = target.value

        if (value.includes(',')) {
            // * If text input is an array (todo list) separated by commas
            if (value.includes(',')) {
                const todosToAdd = value.split(',').map(todo => {
                    return { txt: todo.trim(), doneAt: null }
                })
                setNoteToAdd(note => ({
                    ...note,
                    type: 'NoteTodos',
                    info: {
                        ...note.info,
                        todos: todosToAdd
                    }
                }))
            }
        } else {
            // * If txt input is a regular note
            setNoteToAdd(note => ({ ...note, info: { ...note.info, [field]: value } }))
        }
    }

    function onSaveNote() {
        console.log("func called:")
        // if (noteToAdd.info.txt = "" || " ") return
        saveNote(noteToAdd)
        console.log("noteToAdd:", noteToAdd)
        setNoteToAdd(noteService.getEmptyNote())
    }

    return (
        <div className="input-wrapper">
            <div className="inputs-container" onClick={() => setIsFocused(true)}>
                {isFocused ? <input onFocus={() => setIsTitleFocused(true)} onBlur={() => setIsTitleFocused(false)} className="input-field title" onClick={() => setIsFocused(true)} placeholder="Title" onChange={handleChange} type="text" name="title" id="title" /> : ""}
                <input className="input-field" placeholder="Take a note..." onChange={handleChange} onFocus={() => setIsTextFocused(true)} onBlur={() => setIsTextFocused(false)} type="text" name="txt" id="txt" />
            </div>
        </div>
    )
}


// * Icons for choosing type of note
{/* <div className="icon-wrapper">
    <i className="fa-solid fa-font icon"></i>
    <i className="fa-solid fa-image icon"></i>
    <i className="fa-brands fa-youtube icon"></i>
    <i className="fa-solid fa-microphone icon"></i>
    <i className="fa-solid fa-list-ul icon"></i>
</div> */}