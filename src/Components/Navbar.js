import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <h4>Products</h4>
        <MDBBtn color="dark">CART(0)</MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
