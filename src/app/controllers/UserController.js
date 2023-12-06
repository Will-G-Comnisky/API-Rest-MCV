import {getUserByName} from '../database/db.js'

class UserController {
    login(req,res) {
        const {user, password} = req.body;
        const resultUser = getUserByName(user);
        if (!resultUser) {
            return res.status(401).send({'message': 'User not found'});
        } 
        if (resultUser.password !== password) {
            return res.status(401).send({'message': 'Password mismatch'});
        }
        res.status(200).send({'message': 'Você foi logado com sucesso'});
    }
}

export default new UserController