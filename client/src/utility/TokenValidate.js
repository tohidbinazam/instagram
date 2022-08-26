import axios from "axios";
import { useNavigate } from "react-router-dom";

const TokenValidate = (token, main) => {

    const navigate = useNavigate()

    axios.post('http://localhost:5050/api/verify-token', { token }).then((res) => {
      return res.data
    }).catch(() => {
      navigate(`/invalid-link${main}`)
    })
}

export default TokenValidate