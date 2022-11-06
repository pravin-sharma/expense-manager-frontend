import axios from "axios";

const setTokenInHeader = () =>{
    const token = localStorage.getItem('token');
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;
    }else{
        axios.defaults.headers.common['x-auth-token'] = null;
    }
}

export default setTokenInHeader;