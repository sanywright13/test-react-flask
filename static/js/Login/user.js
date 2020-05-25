import axios from "axios";
 const   BASE_URI='http://127.0.0.1:5000';

 const   client = axios.create({
 baseURL: BASE_URI,
 json: true
});

export const Register =(user)=>{
return axios({
    method: 'post',
    url: 'http://127.0.0.1:5000/users/register',
    data: { first_name: user.name,
      last_name: user.lastName,
      email: user.email,
      password: user.password}
})
.then(function (reponse) {
    console.log(reponse.data);
    return reponse.data

})
.catch(function (erreur) {
    console.log(erreur);
});

}

export const Login =(user)=>{
return axios({
    method: 'post',
    url: 'http://127.0.0.1:5000/users/signin',
    data: {
      email: user.email,
      password: user.password}
})
.then(function (reponse) {
    console.log(reponse);
    return reponse.data

})
.catch(function (erreur) {
    console.log(erreur);
});

}


export const  LogOut=(method = 'get', resource = '/logout', data) =>{

        return client({
            method,
            url: resource,
            data,

        }).then(resp => {
            return resp.data ? resp.data : [];
        })
    }