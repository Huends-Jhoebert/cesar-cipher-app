import React from "react";
import CustomShift from "./CustomShift";
import { MDBRow, MDBCol, MDBTextArea } from "mdb-react-ui-kit";
import CustomeSelect from "./CustomeSelect";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { decrypt } from "caesar-shift";

const Decrypt = () => {
  const [encryptValue, setEncryptValue] = useState("");
  const [decryptValue, setDecryptValue] = useState("");

  const counter = useSelector((state) => state.counter);

  useEffect(() => {
    let dencryptedText = decrypt(parseInt(counter), encryptValue);
    setDecryptValue(dencryptedText);
  }, [counter]);

  const handleDencryption = (e) => {
    setEncryptValue(e.target.value);
    let encryptedText = decrypt(parseInt(counter), e.target.value);
    setDecryptValue(encryptedText);
  };

  return (
    <>
      <h1 className="mb-4 text-uppercase">Decrypt</h1>
      <MDBRow className="align-items-center">
        <MDBCol size="5">
          <MDBTextArea
            rows={10}
            value={encryptValue}
            onChange={handleDencryption}
            label="Encrypted Message"
          />
        </MDBCol>
        <MDBCol size="2">
          <CustomShift />
          <CustomeSelect />
        </MDBCol>
        <MDBCol size="5">
          <MDBTextArea
            rows={10}
            value={decryptValue}
            label="Decrypt Message"
            disabled
          />
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Decrypt;
