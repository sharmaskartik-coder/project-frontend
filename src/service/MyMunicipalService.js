import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth";

const MyMunicipalService = {
    signIn: (usernameOrEmail, password) =>
        axios.post('${API_URL}/signin', {usernameOrEmail, password}),

    registerUser: (user) => axios.post('${API_URl}/signup', user),

    forgotPassword: (forgotPasswordDTO) => axios.post('${API_URL}/forgotpassword', forgotPasswordDTO),

};

export default MyMunicipalService;