import { useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import UserCard from "../components/UserCard";
import * as URL from "./../APIConfig";

export default function Home(props) {
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
    <MDBContainer d-flex flex-column h-100>
      <h1>Users</h1>
      {DisplayUsers()}
      <MDBRow className="row-cols-1 row-cols-md-4 g-4">
        {data.map((user) => (
          <MDBCol>
            <UserCard
              key={user.id}
              user={user}
            ></UserCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
