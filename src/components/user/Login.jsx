import React, { useState } from "react";
import Input from "../form/Input";
import { FormProvider, useForm } from "react-hook-form";
import { login_validation } from "../utils/userValidations";
import { Link } from "react-router-dom";

export default function LogIn() {
  const methods = useForm();

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);

    methods.reset();
    setShowSuccessAlert(true);

    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  });

  return (
    <>
      {showSuccessAlert && (
        <div
          className=" alert alert-success alert-dismissible fade show position-absolute translate-middle-x "
          role="alert"
          style={{ zIndex: 9999, right: "0" }}
        >
          Logedin successfully !
          <button
            type="button"
            className="btn-close me-auto"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShowSuccessAlert(false)}
          ></button>
        </div>
      )}

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center text-white-50 fs-2">
            Recipe-Book
          </div>
        </div>
        <div className=" row justify-content-center mb-4">
          <div className="col-md-6 text-center fs-3 text-secondary fw-bold ">
            Login
          </div>
        </div>
        <FormProvider {...methods}>
          <form noValidate onSubmit={(e) => e.preventDefault()}>
            <div className="d-flex justify-content-center align-items-center">
              <div className="mb-3" style={{ width: "25vw" }}>
                <Input {...login_validation.email} />
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="mb-3" style={{ width: "25vw" }}>
                <Input {...login_validation.password} />
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-2">
              <div className="" style={{ width: "25vw" }}>
                <button onClick={onSubmit} className="btn btn-primary fs-5">
                  LogIn
                </button>
                <span className="mx-3 fs-6">
                  New to Recipe-Book ?{" "}
                  <Link to="/signup" className="fs-5">
                    SignUp
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
