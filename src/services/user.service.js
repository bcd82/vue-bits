import {loadFromStorage,saveToStorage} from '../services/storage.service'
const HC_USER = { 
    username:"Muki D",
    balance:100,
    moves:[]
}

export async function getUser() {
    const localUser = loadFromStorage('user')
    const user =  localUser ? localUser : HC_USER
    saveToStorage('user',user)
    return Promise.resolve(user)
}

export async function updateUser() {
    console.log('updating user')
}

