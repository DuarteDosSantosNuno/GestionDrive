import * as MDB from "mdb-react-ui-kit";

export default function UserCard(props) {
  const { user } = props;
  
  return (
    <MDB.MDBCard className="h-100 shadow-custom" style={{ maxWidth: "16rem" }}>
      <MDB.MDBCardBody>
        <MDB.MDBCardTitle>{user.email}</MDB.MDBCardTitle>
      </MDB.MDBCardBody>
    </MDB.MDBCard>
  );
}
