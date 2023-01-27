import Encrypt from "./components/Encrypt";
import Decrypt from "./components/Decrypt";
import { useState } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  const isEncryptSelected = useSelector((state) => state.isEncryptSelected);

  return (
    <>
      <CustomNavbar />
      <MDBContainer className="mt-5">
        {isEncryptSelected ? <Encrypt /> : <Decrypt />}
      </MDBContainer>
    </>
  );
}

export default App;
