import axios from 'axios';

export async function getFavs() {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            let { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/favs`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            return data.favs;
        } catch (e) {
            console.log(e);
        }
    }
}

export async function deleteFav(id) {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            await axios.delete(`${process.env.REACT_APP_BASE_URL}/favs/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export async function addFav(id) {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                await axios.post(`${process.env.REACT_APP_BASE_URL}/favs/${id}`, {}, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
            } catch (e) {
                console.log(e);
            }
        }
}