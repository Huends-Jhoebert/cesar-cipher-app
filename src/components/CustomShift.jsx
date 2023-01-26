import React, { useState } from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Increament, Decreament } from "../actions";
import { useSelector, useDispatch } from "react-redux";

function CustomShift() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <p className="text-center">Number of shift</p>
      <div className="d-flex mt-2 justify-content-center align-items-center">
        <MDBBtn floating tag="a" onClick={() => dispatch(Decreament())}>
          <MDBIcon fas icon="minus" />
        </MDBBtn>
        <h3 className="mt-2 ms-4 me-4">{counter}</h3>
        <MDBBtn floating tag="a" onClick={() => dispatch(Increament())}>
          <MDBIcon fas icon="plus" />
        </MDBBtn>
      </div>
    </>
  );
}

export default CustomShift;
