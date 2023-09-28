import axios from 'axios'

const getCars = async () => {
    const response = await axios.get('http://localhost:5000/api/cars/')
    return response.data
}

const getCar = async (id) => {
    const response = await axios.get('http://localhost:5000/api/cars/'+id)
    return response.data
}


const carService = {
    getCars,
    getCar
}


export default carService