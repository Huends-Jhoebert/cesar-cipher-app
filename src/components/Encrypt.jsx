import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBTextArea, MDBInput } from "mdb-react-ui-kit";
import CustomSelect from "./CustomeSelect";
import { encrypt } from "caesar-shift";
import CustomShift from "./CustomShift";
import { useSelector } from "react-redux";

const Encrypt = () => {
  const [userInput, setUserInput] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  const counter = useSelector((state) => state.counter);

  useEffect(() => {
    let encryptedText = encrypt(parseInt(counter), userInput);
    setEncryptedText(encryptedText);
  }, [counter]);

  const handleEncryption = (e) => {
    setUserInput(e.target.value);
    let encryptedText = encrypt(parseInt(counter), e.target.value);
    setEncryptedText(encryptedText);
  };

  return (
    <>
      <h1 className="mb-4">Encrypt</h1>
      <MDBRow className="align-items-center">
        <MDBCol size="5">
          <MDBTextArea
            label="Message"
            rows={10}
            value={userInput}
            onChange={handleEncryption}
          />
        </MDBCol>
        <MDBCol size="2">
          <CustomShift />
          <CustomSelect />
        </MDBCol>
        <MDBCol size="5">
          <MDBTextArea
            rows={10}
            label="Encrypted Message"
            value={encryptedText}
            disabled
          />
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Encrypt;
