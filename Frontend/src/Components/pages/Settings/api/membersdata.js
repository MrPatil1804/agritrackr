import axios from 'axios'
import API from '../../../../utils/api'

export const getMembers = async()=>{
    try {
        const response =  await API.get('/member/data');
        return response.data;
    } catch (error) {
        console.log(error)
    }
}