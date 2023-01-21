//get data from axios using react  

let baseURL = 'https://stamp.webapi.stage.westerndigital.com:8443/v2/ords/svcusr/api'


let cardURL= baseURL + '/user/getalluserdetails';

axios.get(cardURL).then((response) => {
    const data = response.data;
});

export default data;