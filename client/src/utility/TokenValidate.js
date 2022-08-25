import axios from "axios";
import { useNavigate } from "react-router-dom";

const TokenValidate = async (token, main) => {

    const navigate = useNavigate()

    await axios.post('http://localhost:5050/api/verify-token', { token }).then((res) => {
      return res.data
    }).catch(() => {
      return navigate(`/invalid-link${main}`)
    })
}

export default TokenValidate