import Encrypt from "./components/Encrypt";
import Decrypt from "./components/Decrypt";
import { useState } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const isEncryptSelected = useSelector((state) => state.isEncryptSelected);

  return (
    <>
      <MDBContainer className="mt-5">
        {isEncryptSelected ? <Encrypt /> : <Decrypt />}
      </MDBContainer>
    </>
  );
}

export default App;
