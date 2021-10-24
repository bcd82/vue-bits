import { loadFromStorage, saveToStorage } from '../services/storage.service'
import { contactService } from '../services/contact.service'

const HC_USERS =
    [{
        username: "muki",
        password: "123",
        balance: 200,
        _id: 'u101',
        moves: [],
    },
    {
        username: "dudeman",
        password: "123",
        balance: 123,
        _id: 'u102',
        moves: []
    },
    {
        username: "mandude",
        password: "123",
        balance: 666,
        _id: 'u103',
        moves: []
    },

    ]

export const userService = {
    getUser,
    updateUser,
    transfer,
    login,
    logout
}

export async function getUser() {
    const localUser = loadFromStorage('user')
    const user = localUser ? localUser : null
    return Promise.resolve(user)
}

export async function updateUser() {
    console.log('updating user')
}

export async function transfer(amount, contactId) {
    const user = loadFromStorage('user')
    user.moves.unshift({
        amount,
        balanceBefore: user.balance,
        contact: await contactService.getById(contactId),
        transferedAt: Date.now(),
        id: Date.now() % 1000
    })
    user.balance -= amount;
    saveToStorage('user', user)
    const users = loadFromStorage('userDb')
    const userIdx = users.findIndex(u => u._id === user._id)
    users[userIdx] = user;
    saveToStorage('userDb', users)
    return Promise.resolve()
}

async function login(creds) {
    let users = loadFromStorage('userDb')
    if (!users?.length) {
        saveToStorage('userDb', HC_USERS)
        users = HC_USERS;
    };
    const user = users.find(user => user.username === creds.username && user.password === creds.password)
    if (user) {
        saveToStorage('user', user)
        return Promise.resolve(user)
    }
    return Promise.reject('no user found')
}

function logout() {
    localStorage.removeItem('user')
    return Promise.resolve()
}

function signUp(creds) {

}