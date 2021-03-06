import axios from "axios";

const url = 'http://localhost:3000/api/login'

const login = async (loginData) => {
    try {
        const res = await axios.post(url, loginData)
        return res
    } catch (error) {
        return error
    }
}

export { login }