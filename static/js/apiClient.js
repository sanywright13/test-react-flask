import axios from 'axios';



class APIClient {

  createKudo(repo) {
let config = { headers: {
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': '*'}
             }
 axios.post("http://127.0.0.1:5000/addMovie",
             { item:repo}  , config
          ).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

 }

 }


export default APIClient;