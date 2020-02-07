module.exports= () => new Promise(resolve => {
    const data = [
        {
            forename: 'Camila',
            surname: 'Muñoz',
            salary: '300'
        },
        {
            forename: 'Juan',
            surname: 'Pablo',
            salary: '2200'
        },
        {
            forename: 'Gerónimo',
            surname: 'Serrano',
            salary: '5000'
        },
    ];

    setTimeout(() => resolve(data), 2);
});
