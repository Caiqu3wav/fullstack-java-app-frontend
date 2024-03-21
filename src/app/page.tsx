'use client'
import Image from "next/image";
import NavBar from "./components/NavBar/NavBar"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";


export default function Home() {
  const [users, setUsers] = useState([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id: any) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };




  return (
    <div className="App">
    <NavBar/>
    <div className="container">
      <div className="py-4">
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
      users.map((user, index) => (
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <button className="btn btn-primary mx-2" onClick={(event) => handleSearch(user.id)}>
                      View
                    </button>
                    <button className="btn btn-outline-primary mx-2" onClick={(event) => handleSearch(user.id)}>
                     Edit
                    </button>
        <button onClick={() => deleteUser(user.id)} className="btn btn-danger mx-2">Delete</button>
      </tr>
      ))
    }

  </tbody>
</table>
      </div>
    </div>
    </div>
  );
}
