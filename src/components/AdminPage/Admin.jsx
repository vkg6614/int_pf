import React from "react";
import { NavLink } from "react-router-dom";


// import Form from "@rjsf/bootstrap-4";
import Form from "react-jsonschema-form";
import AdminMenu from "../../components/AdminPage/AdminMenu";

import hambargar_menu from "../../components/hambargar_menu.svg"

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


let menuLists = [
  "Create a quote",
  "Quotes",
  "Policies",
  "Clients",
  "Entity",
  "Users",
  "Configuration",
  "Product builder",
];


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

  const [isActive, setIsActive] = useState(null);
  const [isActiveFirst, setIsActiveFirst] = useState(true);

  const hadleMenuListControl = (item, index) => {
    setIsActiveFirst(false);
    setIsActive(item);
  };

  return (
    <>
      <div className="right_side">
        <div className="heading">
        Create a quote
        
        
        <button class="btn btn-primary offcanvas_button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <img src={hambargar_menu} className="" loading="lazy" alt="" />
        </button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
              <button type="button" class="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            {/* <AdminMenu /> */}
            <div
        style={{
          position: "fixed",
          top: 0,
          // width: "14%",
        }}
        className="menu_container"
      >
        <div className="logo_container">
          <span className="main_logo">INT Origin</span>
          <hr class="hr-dashed hr-menu" />
        </div>
        <ul>
          {menuLists.map((item, index) => (
            <li
              key={index + 1}
              onClick={() => hadleMenuListControl(item, index)}
              className={`${isActive === item && "active"}`}
              style={
                isActiveFirst === true && index === 0
                  ? // ? { backgroundColor: "#1e1f57" }
                    {}
                  : null
              }
            >
              <NavLink
                to={
                  index === 0
                    ? `/api`
                    : index === 1
                    ? `/api/quotes`
                    : index === 2
                    ? "/api/policies"
                    : index === 3
                    ? "/api/clients"
                    : index === 4
                    ? "/api/entity"
                    : index === 5
                    ? "/api/users"
                    : index === 6
                    ? "/api/configuration"
                    : index === 7
                    ? "/api/product_builder"
                    : "api"
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
          </div>
        </div>


        </div>
        
        <div className="right_side_inner">
        <div
          // style={{
          //   width: "100%",
          //   margin: "0px auto",
          //   // fontWeight: "bold",
          //   padding: "30px",
          //   marginBottom: "20px",
          // }}
          className="radioButtonGroup card card_spaching"
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
            className="card card_spaching "
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
            // style={{
            //   // border: "1px solid #CCCCCC",
            //   // width: "70%",
            //   margin: "0px auto",
            //   fontWeight: "bold",
            //   padding: "30px",
            //   marginBottom: "20px",
            // }}
            className="button_sideBySide card card_spaching"
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
          // style={{
          //   width: "100%",
          //   margin: "0px auto",
          //   fontWeight: "bold",
          //   padding: "30px",
          //   marginBottom: "20px",
          // }}
          className="card card_spaching"
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
      </div>
    </>
  );
};

export default Admin;
