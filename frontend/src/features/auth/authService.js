import axios from 'axios'

const signup = async (user) => {
    const response = await axios.post('http://localhost:5000/api/users/Signup',user)
    return response.data
}
const login = async (user) => {
    const response = await axios.post('http://localhost:5000/api/users/login',user)
    const {token, data} = response.data
    if(token){
        localStorage.setItem('token',token)
        localStorage.setItem('user', JSON.stringify(data))
    }
    return response.data
}


const authService = {
    signup,
    login
}


export default authService