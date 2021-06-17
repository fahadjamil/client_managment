import { useState,useEffect } from "react/cjs/react.development";
import React from "react";
import Loader from './Loader';
import { useContext } from "react";
import { BookContext } from "./BookContext";
import {useParams} from "react-router";


const EmployeeDetail = (props) => {
  const [selected_user,setSelected_user]=useState(null);
  const books=useContext(BookContext);
  console.log(books);
  const {id}=useParams();

  //console.log("",props.id);


  useEffect(() => {
    fetch(
      "http://ec2-13-59-60-23.us-east-2.compute.amazonaws.com:5000/api/admin/employee/"+id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer "+books.authToken,
        },
        body: null,
      }
    ).then((result) => {
       // console.log(result);
      result.json().then((data) => {
      
         setSelected_user(data.selectedUser);
        
       
      });
    });
  }, []);

  return (
    <>
    {!selected_user ?
    (
      <Loader/>
    ):
    (
    <React.Fragment> <div className="container  mt-2" style={{ backgroundColor:"#F1F1F1" }}>
      <div className="Card mb-3 p-2">
        <div className="row g-0 d-flex">
          <div className="col-md-3">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
              width="100px"
              height="100px"
              className="as-rounded mb-2 mx-5 my-3"
            />
            <div
              className="p-3 align: center"
              style={{ textAlign: "center" }}
            >
              <h5 class="m-0 text-primary font-weight-bold pb-1">
                {selected_user && selected_user.name}
              </h5>
              <h6 class="m-0 text-dark">{selected_user && selected_user.email}</h6>
            </div>
          </div>
          <div class="col-md-9 mt-3">
            <h5 class="border-bottom pb-2 text-primary">Emlpoyee Info</h5>
            <div>
              <p class="m-0 py-2 border-bottom pl-2">
                Workspace:{" "}
                <span class="font-weight-bold">{selected_user && selected_user.workspace}</span>
              </p>
              <p class="m-0 py-2 border-bottom pl-2">
                Date: <span class="font-weight-bold">{selected_user && selected_user.date}</span>
              </p>
              <div class="mt-3 py-2 text-right pr-2">
                <button
                  class="btn btn-sm btn-primary mr-2"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Assign Client
                </button>

                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                          Select a Client
                        </h5>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                      <div className="modal-body">
                        <div class="px-0 py-2 d-flex justify-content-center border-top w-100 col-md-12">
                          <div class="d-flex col-md-8 pl-md-0">
                            <p
                              class="m-0 p-0 col-md-5 font-weight-bold text-primary"
                              style={{ textAlign: "left" }}
                            >
                              Imtiaz
                            </p>
                            <p class="m-0 p-0 col-md-7">
                              Imtiaz99150@gmail.com
                            </p>
                          </div>
                          <div class="col-md-4 pr-md-0 text-right">
                            <select
                              class="py-1 px-2 border"
                              aria-label=".form-select-sm example"
                            >
                              <option value="null">Select a Role</option>
                              <option value="false">Read-Only</option>
                              <option value="true">Read-write</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="btn btn-sm btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop2"
                >
                  Enable this User
                </button>

                <div
                  className="modal fade"
                  id="staticBackdrop2"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      
                      <div className="modal-body">
                      <p class="text-secondary px-3 pt-3 pb-4 m-0">Are you sure you want to Disable this Employee's Account?</p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          No
                        </button>
                        <button type="button" className="btn btn-primary">
                          Yes I'm sure
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h5 class="pl-3  m-0 font-weight-bold d-flex align-items-center justify-content-center border-top pt-3">
          Assigned Clients:{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1.1"
            viewBox="0 0 16 16"
            class="text-primary ml-2"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.707 9.707l-5 5c-0.39 0.391-1.024 0.391-1.414 0l-5-5c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l3.293 3.293v-9.586c0-0.552 0.448-1 1-1s1 0.448 1 1v9.586l3.293-3.293c0.195-0.195 0.451-0.293 0.707-0.293s0.512 0.098 0.707 0.293c0.391 0.391 0.391 1.024 0 1.414z"></path>
          </svg>
        </h5>
      </div>
    </div>
    <div className="container">
      <div class="row mt-3 d-flex px-2">
        <div class="col-md-6 px-2 pb-3">
          <div class="bg-white py-2 d-flex align-items-center shadow">
            <p class="col-md-6 m-0 font-weight-bold">Fahad Jamil</p>
            <div class="col-md-6 m-0 text-right text-secondary">
              Role:<p class="m-0 badge badge-info px-2 py-1">Writable</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </React.Fragment>
    )}
     

    </>
  );
};
export default EmployeeDetail;
