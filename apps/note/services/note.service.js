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
    duplicateNote,
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
    return Promise.resolve(storageService.remove(DB_KEY, noteId))
}

function save(note) {
    if (note.id) {
        return storageService.put(DB_KEY, note)
    } else {
        return storageService.post(DB_KEY, note)
    }
}

function duplicateNote(note) {
    note.id = null
    return storageService.post(DB_KEY, note)
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
                    title: 'Future me:',
                    txt: 'Check out this awesome Sablé cookies recipe: https://foodiesrecipes.com/עוגיות-סבלה-שוקולד/'
                }
            },
            {
                id: 'n102',
                type: 'NoteTxt',
                isPinned: false,
                info: {
                    title: 'github pages sucks',
                    txt: 'sry mate I really do think so'
                }
            },
            {
                id: 'n103',
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#00d'
                },
                info: {
                    title: 'Todo:',
                    txt: 'Get your shit together when the bootcamp ends. So many errands are being postponed..'
                }
            },
            {
                id: 'n104',
                type: 'NoteTxt',
                isPinned: false,
                info: {
                    title: '10 Cool Javascript Hacks',
                    txt: 'Check out these amazing Javascript tips and tricks!'
                }
            },
            {
                id: 'n105',
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#ff9800'
                },
                info: {
                    title: 'To future me:',
                    txt: 'Check out this awesome React tutorial https://www.youtube.com/watch?v=F627pKNUCVQ'
                }
            },
            {
                id: 'n106',
                type: 'NoteTxt',
                isPinned: false,
                info: {
                    title: 'React vs Angular',
                    txt: 'Which frontend framework is better - React or Angular? Let\'s compare!'
                }
            },
            {
                id: 'n107',
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#8bc34a'
                },
                info: {
                    title: 'The Art of Gardening',
                    txt: 'Discover the therapeutic benefits of gardening!'
                }
            },
            {
                id: 'n108',
                type: 'NoteTxt',
                isPinned: false,
                info: {
                    title: 'Best Vegan Restaurants',
                    txt: 'Looking for some delicious vegan food? Check out these top-rated vegan restaurants!'
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