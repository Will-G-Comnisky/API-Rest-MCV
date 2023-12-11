import {getUsers, searchUserId, searchUserIndex, getUserByName} from '../database/db.js'
import UserRepository from '../repositories/UserRepository.js';

class UserController {

    hello (req, res) {
        res.status(200).json({msn: "Oi! Tudo bom? Uma mensagem do json msn"}).send('Olá, o servidor está rodando com express e HTTP 2!!')
    }

    index (req, res) {
        const users = UserRepository.findAll();
        res.status(200).send(users);
    }

    //Listar por ID
    show(req, res){
        //lógica de consulta ao Banco de dados 
        const user = UserRepository.findById(req.params.id);
        res.status(200).json(user)
    }

    store(req, res) {
        UserRepository.create(req.body);
        res.status(201).send("Novo usuário cadastrado com sucesso!");
    }

    // Realizar o login (verificação se usuario e senha existem)
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

    // Atualizar usuario
    update(req,res) {
        const user = UserRepository.update(req.params.id, req.body)
        res.status(200).json(user);
    }

    // Deletar registro
    delete(req,res) {
        UserRepository.delete(req.params.id);
        res.status(200).send(`Usuário ${req.params.id} excluído com sucesso!`)
    }
}

export default new UserController