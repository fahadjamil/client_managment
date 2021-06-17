import React, { useContext,useState,useEffect } from "react";
import {BookContext} from "./BookContext";

import "./Dashboard.css";
import Loader from './Loader';

function Dashboard(props) {
  const [allemployees, setallemployees] = useState([]);
  const [allClients, setallClients] = useState([]);
  const books=useContext(BookContext)
  console.log(books)

  useEffect(() => {
    fetch(
      "http://ec2-13-59-60-23.us-east-2.compute.amazonaws.com:5000/api/admin/606c4bfd1b9b9af585c95ab9/employees",
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
        console.log(result);
      result.json().then((data) => {
         console.log(data.employees);
        setallemployees(data);
       
      });
    });
  }, []);
  useEffect(() => {  
    fetch(
      "http://ec2-13-59-60-23.us-east-2.compute.amazonaws.com:5000/api/admin/606c4bfd1b9b9af585c95ab9/clients",
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
        //console.log(result);
      result.json().then((data) => {
        //  console.log(data.);
        setallClients(data.clients);
      });
    });
  }, []);

props.Capi(allClients);
props.Eapi(allemployees);


  return (
    <React.Fragment>
       {!allemployees.employees && !allClients.clients ?
(
  <Loader/>
):
(<React.Fragment>
      <div className="container-fluid bg-light dashboard">
        <div className="row">
          <div className="col-md-2 "></div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6 pt-3">
                <div className="card text-center">
                  <div className="card-header bg-success">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fillrule="evenodd" d="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5V6.85L8.129 8.947a.5.5 0 01-.258 0L0 6.85v5.65z" cliprule="evenodd"></path><path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v1.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z" cliprule="evenodd"></path></svg>
                      Total Client
                      </div>
                  <div className="card-body p-5">
                  <h2> {allClients.length}</h2>
                  </div>
                  
                </div>

              </div>
              <div className="col-md-6 p-3">
              <div className="card text-center">
                  <div className="card-header bg-info">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" cliprule="evenodd"></path></svg>
                      Total Employee</div>
                  <div className="card-body p-5">

                   <h2> {allemployees.employees.length}</h2>
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
)};
    </React.Fragment>
  );
  
}

export default Dashboard;
