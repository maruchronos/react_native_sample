const endpoint = 'https://facebook.github.io/react-native/';

export default fetchData = async(field, callback) => {	
    return fetch(endpoint+field+'.json')
        .then((response) => response.json())
        .then((responseJson) => {
        	console.log(responseJson);
        	callback(responseJson, null);
        })
        .catch((error) => {
            callback(null, error);
        });    
}