import { useState, useEffect } from "react";
import * as MDB from "mdb-react-ui-kit";
import * as URL from "../../APIConfig";
import UserCard from "../../components/Users/UserCard";

export default function FindAll(props) {
  const [data, setData] = useState([]);

  function DisplayUsers() {
    useEffect(() => {
        getAllUsers();        
      }, []);
      console.log(data);
  }

  const getAllUsers = async () => {
    const endpoint = URL.AUTHENTICATE + "findall";

    fetch(endpoint) // URL sur le serveur
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(
                (result) => {
                    console.log(result);
                    setData(result);
                },
                (error) => {
                    console.log(error);
                })
  };
  
  return (
    <MDB.MDBContainer d-flex flex-column h-100>
      <h1>All Users</h1> <br/>
      {DisplayUsers()}
      <MDB.MDBTable>
          <MDB.MDBTableHead>
            <th>Prenom</th>
            <th>Nom</th>
            <th>Email</th>
          </MDB.MDBTableHead>

          <MDB.MDBTableBody>
          {data.map((user) => (
            <tr>
                <td>
                    {user.nom}
                </td>
                <td>
                    {user.prenom}
                </td>
                <td>
                    {user.email}
                </td>
            </tr>
        ))}
          </MDB.MDBTableBody>
      </MDB.MDBTable>
    </MDB.MDBContainer>
  );
}
