import {getUsers, searchUserId, searchUserIndex, getUserByName} from '../database/db.js';

class UserRepository {

    //CRUD
    create(user){
        getUsers().push(user);
    }

    findAll() {
        return getUsers();
    }

    findById(id) {
        return searchUserId(id);
    }

    update(id, user) {
        const userInfo = searchUserId(id);
        const users = getUsers();
        userInfo.name = user.name;
        userInfo.password = user.password;
        return userInfo;
    }

    delete(id) {
        const userIndex = searchUserIndex(id);
        getUsers().splice(userIndex, 1);
    }
}

export default new UserRepository();