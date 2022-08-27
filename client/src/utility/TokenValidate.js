import axios from "axios";

const tokenValidate = async (token) => {

    await axios.post('http://localhost:5050/api/verify-token', { token }).then((res) => {
      return res.data
    }).catch(() => {
      return false
    })
}

export default tokenValidate