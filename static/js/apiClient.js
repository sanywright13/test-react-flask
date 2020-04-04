import axios from 'axios';
 const   BASE_URI='http://127.0.0.1:5000';

 const   client = axios.create({
 baseURL: BASE_URI,
 json: true
});

class APIClient {


    constructor() {
        this.movies = [];
    }

    createKudo(repo) {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
        axios.post("http://127.0.0.1:5000/addMovie",
            {item: repo}, config
        ).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });

    }

    getAllMovies(method = 'get', resource = '/getmovies', data) {

        return client({
            method,
            url: resource,
            data,

        }).then(resp => {
            return resp.data ? resp.data : [];
        })
    }

    delete(item) {
        axios.delete("http://127.0.0.1:5000/remove", {
            data: {
                source: item
            }
        });

    }
}






export default APIClient