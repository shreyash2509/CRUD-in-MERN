import {Table,TableBody,TableHead,TableCell,TableRow,styled,Button} from '@mui/material';
import {getUsers,deleteUser} from "../service/api";
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0 auto;
&>div{
    margin-top:20px;
    }
`
const Thead=styled(TableRow)`
background:#000000;
&>th{
color:#fff;
font-size:20px;
}
`
const TBody=styled(TableBody)`
&>tr>td{
    font-size:15px;
}
`
const AllUsers=()=>{
    const navigate=useNavigate();
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers= async ()=>{
        let response= await getUsers();
        setUsers(response.data);
    }
    const deleteUserDetails=async (id)=>{
        await deleteUser(id);
        getAllUsers();
    }
    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>username</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>phone</TableCell> 
                    <TableCell></TableCell> 
                </Thead>
            </TableHead>
            <TBody>
                {
                    users.map((user,i) =>(
                        <TableRow key={user._id}>
                            <TableCell>{i+1}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' color="primary" style={{marginRight:10}} onClick={()=>navigate(`/edit/${user._id}`)}>Edit</Button>
                                <Button variant='contained' color="error" onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                            </TableCell> 
                            
                        </TableRow>
                    ))
                }
            </TBody>
        </StyledTable>
    )
}

export default AllUsers;