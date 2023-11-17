    import axios from "axios";


    let jwtToken = localStorage.getItem(`Token`);
    let authHeader = `Bearer ${jwtToken}`;

    export const HEADERS = {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
    }

    const URI = 'http://localhost:8181'

    const academicPost = (academicDetails) => axios.post(`${URI}/api/academic/post`,academicDetails,{ headers : HEADERS})
    const applicationsPost = async (application) => await axios.post(`${URI}/api/applications/post`,application,{ headers : HEADERS})
    const applicationsGet = (user) => axios.get(`${URI}/api/applications/user`, user, { headers : HEADERS})
    const applicationsGetId = async (id) => {
        const response = await axios.get(`${URI}/api/applications/user/${id}`,{ headers : HEADERS})
        return response;
    }
    const applicationsPut = async (id,data) => await axios.put(`${URI}/api/applications/put/${id}`,data,{ headers : HEADERS})
    const applicationsDelete = async (id) => await axios.delete(`${URI}/api/applications/delete/${id}`,{ headers : HEADERS})
    
    const getUserbyId = async (id) => await axios.get(`${URI}/api/user/get/${id}`,{headers: HEADERS})
    
    const userLogin = (signin) => axios.post(`${URI}/api/auth/login`, signin)
    const userRegister = (register) => axios.post(`${URI}/api/auth/register`, register)
    const adminLogin = (signin) => axios.post(`${URI}/admin/login`, signin, { headers : HEADERS})




    export { adminLogin,userLogin,userRegister,academicPost,applicationsPost,applicationsGet, applicationsGetId ,applicationsPut,applicationsDelete,getUserbyId}

