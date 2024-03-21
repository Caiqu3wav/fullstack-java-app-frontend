'use client'
import Link from "next/link";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import axios from 'axios';
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function EditUser({
  searchParams,
}: {
  searchParams: { query: string };
}) {

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const {name, username, email} = user;

  const onInputChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if ({searchParams.query}) {
      fetchUser();
    }
  }, [{searchParams.query}]);

  if (!user) {
    return <div>Loading...</div>;
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.put(`http://localhost:8080/user/${id}`, user);
    } catch(error){
        console.log("Erro ao editar usuário", error);
    }
    }

  return (
    <div className="container">
      <NavBar/>
     <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit User</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)
              } />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control"
              placeholder="Enter your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)
              } />
            </div><div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" className="form-control"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)
              } />
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link href="/" className="btn btn-outline-danger mx-2">Cancel</Link>
            </form>
        </div>
     </div>
    </div>
  )
}
