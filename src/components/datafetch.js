// importing axios - it is responsible module for fetching local data
import axios from 'axios';

// local data fetching 
dataFetch = () => {
    // local url of the static contact.json file
    const baseUrl = 'http://localhost:3000/contacts/contacts.json';
    axios.get(baseUrl)
        .then((response) => {
            // setting state after the data is fetched
            this.setState({
                contacts: response.data
            })
        })
        // error handling and description
        .catch((error) => {
            console.log(error);
        });
}

export default dataFetch;