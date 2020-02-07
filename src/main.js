module.exports = async() => {
    return require('./db/index.js')()
        .then(response =>  response.filter( (x) => parseInt(x.salary) > 500  ).map( (x) => x.forename + " " + x.surname))
        .catch(error => console.log(error) );
};
