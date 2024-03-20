'use client'
import Image from "next/image";
import NavBar from "./components/NavBar/NavBar"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {

  const [users, setUsers] = useState([]);

useEffect(() => {
  
});

const loadUsers = () => {
      const result = axios.get("")
}

  return (
    <div>
    <NavBar/>
    <div className="container">
      <div className="py-4">
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
    </div>
  );
}
