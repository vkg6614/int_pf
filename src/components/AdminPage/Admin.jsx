import React from "react";

import Form from "@rjsf/bootstrap-4";

import {
  schema1,
  uiSchema1,
  schema2,
  uiSchema2,
  schema3,
  uiSchema3,
  schema4,
  uiSchema4,
  schema5,
  uiSchema5,
} from "../Schemas/Schemas.js";
// import axios from "axios";
import validator from "@rjsf/validator-ajv8";
import { Fragment, useEffect } from "react";
import { useState } from "react";
function ErrorListTemplate(props) {
  const { errors } = props;
  console.log(errors);
  return (
    <div>
      <h2>Custom error list</h2>
      <ul>
        {errors.map((error) => (
          <li key={error.stack}>{error.stack}</li>
        ))}
      </ul>
    </div>
  );
}

const Admin = () => {
  const [checkType, setcheckType] = useState({});
  const onError = (errors) => console.log(errors);

  const onSubmit = ({ formData }, e) => {
    console.log("Data submitted: ", formData);
  };

  console.log(checkType, "c");
  const onChangeHandle = (formData) => {
    setcheckType(formData);
  };

  // console.log(checkType, "c");

  const customValidate = (formData, errors) => {
    if (formData.firstName === undefined) {
      errors.firstName.addError("firstName required");
    }
    return errors;
  };

  useEffect(() => {
    getSchema();
  }, []);
  const getSchema = async () => {
    // let { data } = await axios.get("/api");
    // console.log(data, "D");
  };

  return (
    <>
      <div className="right_side">
        <div
          style={{
            width: "100%",
            margin: "0px auto",
            // fontWeight: "bold",
            padding: "30px",
            marginBottom: "20px",
          }}
          className="radioButtonGroup card"
        >
          <Form
            className="foo-bar radioButtonGroup_outer"
            schema={schema1}
            uiSchema={uiSchema1}
            customValidate={customValidate}
            noHtml5Validate={true}
            showErrorList={true}
            onChange={({ formData }) => onChangeHandle(formData)}
            ErrorList={ErrorListTemplate}
            formData={checkType}
            onError={onError}
            onSubmit={onSubmit}
            validator={validator}
          >
            <Fragment />
          </Form>
        </div>
        {checkType.client === "Yes" ? (
          <div
            // style={{
            //   border: "1px solid #CCCCCC",
            //   width: "70%",
            //   margin: "0px auto",
            //   fontWeight: "bold",
            //   padding: "30px",
            //   marginTop: "50px",
            //   marginBottom: "20px",
            // }}
            className="card"
          >
            <Form
              schema={schema2}
              uiSchema={uiSchema2}
              customValidate={customValidate}
              noHtml5Validate={true}
              showErrorList={true}
              ErrorList={ErrorListTemplate}
              onError={onError}
              onSubmit={onSubmit}
              validator={validator}
            />
          </div>
        ) : null}

        {checkType.client_Type === "Corporate" && checkType.client === "No" ? (
          <div className="corporate_form card">
            <div
              // style={{
              //   fontWeight: "bold",
              //   padding: "30px",
              //   marginBottom: "20px",
              // }}
              className="corporate_form_box1 button_sideBySide"
            >
              <Form
                schema={schema3}
                uiSchema={uiSchema3}
                customValidate={customValidate}
                noHtml5Validate={true}
                showErrorList={true}
                ErrorList={ErrorListTemplate}
                onError={onError}
                onSubmit={onSubmit}
                validator={validator}
              />
              <button
                type="button"
                className="btn btn-success btn-md button_sideBySide_next"
              >
                Next
              </button>
            </div>
            {/* <div
            style={{
              fontWeight: "bold",
              padding: "30px",
            }}
            className="button_sideBySide"
          >
            <Form
              schema={schema3}
              uiSchema={uiSchema3}
              customValidate={customValidate}
              noHtml5Validate={true}
              showErrorList={true}
              ErrorList={ErrorListTemplate}
              onError={onError}
              onSubmit={onSubmit}
              validator={validator}
            />
            <button
              type="button"
              className="btn btn-success btn-md button_sideBySide_next"
            >
              Next
            </button>
          </div> */}
          </div>
        ) : checkType.client === "No" ? (
          <div
            style={{
              border: "1px solid #CCCCCC",
              width: "70%",
              margin: "0px auto",
              fontWeight: "bold",
              padding: "30px",
              marginBottom: "20px",
            }}
            className="button_sideBySide"
          >
            <Form
              schema={schema4}
              uiSchema={uiSchema4}
              customValidate={customValidate}
              noHtml5Validate={true}
              showErrorList={true}
              ErrorList={ErrorListTemplate}
              onError={onError}
              onSubmit={onSubmit}
              validator={validator}
            />
            <button
              type="button"
              className="btn btn-success btn-md button_sideBySide_next"
            >
              Next
            </button>
          </div>
        ) : null}
        <div
          style={{
            width: "100%",
            margin: "0px auto",
            fontWeight: "bold",
            padding: "30px",
            marginBottom: "20px",
          }}
          className="card"
        >
          <Form
            schema={schema5}
            uiSchema={uiSchema5}
            customValidate={customValidate}
            noHtml5Validate={true}
            showErrorList={true}
            ErrorList={ErrorListTemplate}
            onError={onError}
            onSubmit={onSubmit}
            validator={validator}
          />
        </div>
      </div>
    </>
  );
};

export default Admin;
