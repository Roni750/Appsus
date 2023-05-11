// note service
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const DB_KEY = 'notesDB'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getDefaultFilter,
    getEmptyNote,
    addNote,
    getEmptyTodo,
}

function query({ filterBy = {} }) {
    return storageService.query(DB_KEY)
        .then(notes => {
            console.log("notes", notes)
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regExp.test(note.title))
            }
            return notes
        })
}

function get(noteId) {
    return storageService.get(DB_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(DB_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(DB_KEY, note)
    } else {
        return storageService.post(DB_KEY, note)
    }
}

function addNote(note) {
    return Promise.resolve(save(note))
}

function _createNotes() {
    let notes = storageService.loadFromStorage(DB_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: 'n101',
                createdAt: 1112222,
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#00d'
                },
                info: {
                    txt: 'Fullstack Me Baby!'
                }
            },
            {
                id: 'n102',
                type: 'NoteImg',
                isPinned: false,
                info: {
                    url: 'https://www.limestone.edu/sites/default/files/styles/news_preview_image/public/2022-03/computer-programmer.jpg?h=2d4b268f&itok=JOcIEe9u',
                    title: 'Bobi and Me'
                },
                style: {
                    backgroundColor: '#00d'
                }
            },
            {
                id: 'n103',
                type: 'NoteTodos',
                isPinned: false,
                info: {
                    title: 'Get my stuff together',
                    todos: [
                        { txt: 'Driving license', doneAt: null },
                        { txt: 'Coding power', doneAt: 187111111 }
                    ]
                }
            }
        ]
    }
    storageService.saveToStorage(DB_KEY, notes)
}

function getEmptyTodo() {
    return {
        txt: '',
        doneAt: null
    }
}

function getEmptyNote() {
    return {
        createdAt: Date.now(),
        type: 'NoteTxt',
        isPinned: null,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            txt: ''
        }

    }
}

function getDefaultFilter() {
    return { txt: '' }
}