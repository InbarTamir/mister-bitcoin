import { storageService } from './storage.service'

const USER_KEY = 'loggedInUser'
const USERS_KEY = 'users'
let loggedUserName = ''

export const userService = {
  getUser,
  signup,
  addMove,
  getMovesForContact
}

const users = [{
  name: 'Ochoa Hyde',
  coins: 100,
  moves: []
}]

function getUser() {
  // return Promise.resolve(storageService.load(USER_KEY))
  return loggedUserName && {...users.find(user => user.name === loggedUserName)}
}

function signup(name) {
  const newUser = {
    name,
    coins: 100,
    moves: []
  }
  users.push(newUser)
  loggedUserName = newUser.name
  storageService.store(USER_KEY, newUser.name)
  return {...newUser}
}

function addMove(contact, amount) {
  const move = {
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount
  }
  const user = users.find(user => user.name === loggedUserName)
  user.moves.unshift(move)
  user.coins -= move.amount

  storageService.store(USERS_KEY, users)
  return {...move}
}

function getMovesForContact(contactId) {
  const user = getUser()
  return user.moves.filter(move => move.toId === contactId).map(move => ({...move, toId: ''})) 
}