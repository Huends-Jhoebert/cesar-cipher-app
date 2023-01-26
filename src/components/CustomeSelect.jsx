import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { isSelectEncrypt } from "../actions";

function CustomeSelect() {
  const dispatch = useDispatch();

  const isEncryptSelected = useSelector((state) => state.isEncryptSelected);

  const handleClick = () => {
    dispatch(isSelectEncrypt());
  };

  return (
    <>
      {isEncryptSelected ? (
        <MDBBtn className="me-1 mt-3 ms-5" onClick={handleClick}>
          Decrypt
        </MDBBtn>
      ) : (
        <MDBBtn className="me-1 mt-3 ms-5" onClick={handleClick}>
          Encrypt
        </MDBBtn>
      )}
    </>
  );
}

export default CustomeSelect;
