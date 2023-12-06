//Mockup Maquete Modelo
const users = [
    {id: 1, name: "Will_Gispiela", password: '1642'},
    {id: 2, name: "Will_Comnisky", password: '1212'},
    {id: 3, name: "Will_03", password: '3030'}
] 

export const getUserByName = (name) => {
    return users.find(user => user.name === name)
}