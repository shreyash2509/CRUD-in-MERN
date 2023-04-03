import axios from 'axios';

const URL='http://localhost:8000';

export const addUser=async (data)=>{
  try{
    return await axios.post(`${URL}/add`,data);
  } catch(error){
    console.log("error while calling api ",error);
  }
}

export const getUsers=async()=>{
  try{
    return await axios.get(`${URL}/all`);
  }catch(error){
    console.log("error while calling getusers api ",error);
  }
}

export const getUser=async (id)=>{
  try{
    return await axios.get(`${URL}/${id}`);
  }catch(error){
    console.log("error in getuser of edit page ",error);
  }
}
export const editUser=async (user,id)=>{
  try{
    return await axios.post(`${URL}/${id}`,user);
  }catch(error){
    console.log("error in edituser of edit user ",error);
  }
}
export const deleteUser=async (id)=>{
  try{
    // console.log(id);
    return await axios.delete(`${URL}/${id}`);
  }catch(error){
    console.log("error in delete user ",error);
  }
}