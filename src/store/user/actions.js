import axios from 'axios'

export const fetchUsers = async ({commit}) => {
    let response = await axios.get('http://localhost:5000/api/user/get-all-user');
    if(response.data.error === false){
        commit('setUsers',response.data.data);
    }
}