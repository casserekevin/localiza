import api from './api'

class UserService {
    static registerUser(name, email, password){
        return api.post('auth/register', {
            name: name,
            email: email,
            password: password
        })
    }
}

export default UserService