import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTextArea,
  MDBInput,
} from "mdb-react-ui-kit";

import CustomeSelect from "./CustomeSelect";
import { useState } from "react";

const Decrypt = () => {
  const [encryptValue, setEncryptValue] = useState("");
  const [key, setKey] = useState(1);
  const [decryptValue, setDecryptValue] = useState("");

  return (
    <>
      <h1 className="mb-4">Decrypt</h1>
      <MDBRow className="align-items-center">
        <MDBCol size="5">
          <MDBTextArea rows={10} />
        </MDBCol>
        <MDBCol size="2">
          <MDBInput
            label="Number of shift"
            id="typeNumber"
            type="number"
            value={key}
          />
          <CustomeSelect />
        </MDBCol>
        <MDBCol size="5">
          <MDBTextArea rows={10} />
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Decrypt;
