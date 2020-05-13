import api from './api'

class UserService {
    static registerUser(name, email, password){
        return api.post('auth/register', {
            name: name,
            email: email,
            password: password
        })
    }

    static loginUser(email, password){
        return api.post('auth/authenticate', {
            email: email,
            password: password
        })
    }
}

export default UserService