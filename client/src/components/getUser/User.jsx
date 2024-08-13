import React, { useEffect, useState } from 'react';
import './User.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import toast from 'react-hot-toast';

const User = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const deleteUser = (id) => {
        axios.get(`http://localhost:8000/api/delete/${id}`)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-right" });
                setUsers(users.filter(user => user._id !== id));
                navigate("/");
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/getall");
                setUsers(response.data.res);
                console.log(response.data.res);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="table">
                <Link to={"/add"} className='addUser'>
                    Add User
                </Link>
                <table border={1} cellSpacing={0} cellPadding={10}>
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>User name</th>
                            <th>User Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.fname} {user.lname}</td>
                                <td>{user.email}</td>
                                <td className='icons'>
                                    <button className='deleteButton' onClick={() => deleteUser(user._id)}>
                                        <MdDelete className='icon1' />
                                    </button>
                                    <Link to={`/edit/` + user._id}><FaRegEdit className='icon2' /></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default User;
