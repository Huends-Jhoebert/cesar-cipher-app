import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

export default function CustomNavbar() {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarNav className="d-flex flex-row">
          <MDBNavbarItem className="me-3 me-lg-0">
            <MDBNavbarLink
              href="https://github.com/Huends-Jhoebert/cesar-cipher-app"
              target="_blank"
            >
              <MDBIcon fab icon="github" size="lg" />
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}
