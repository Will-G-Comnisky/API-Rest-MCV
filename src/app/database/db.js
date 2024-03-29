//Mockup Maquete Modelo
const users = [
    {id: 1, name: "Will_Gispiela", password: '1642'},
    {id: 2, name: "Will_Comnisky", password: '1212'},
    {id: 3, name: "Will_03", password: '3030'}
] 

const getUsers = () => { 
    return users
}

const searchUserId = (id) => {
    return users.find(user => user.id == id)
}

const searchUserIndex = (id) => {
    return users.findIndex(user => user.id == id)
}

const getUserByName = (name) => {
    return users.find(user => user.name === name)
}


export {getUsers, searchUserId,searchUserIndex, getUserByName}

