import React, { Fragment,useContext, useState } from "react";
import { BookContext } from "./BookContext";



function Client(props) {
  

  const books=useContext(BookContext);
  console.log(books.client);
  const [allClients, setallClients] = useState([]);
  const [alldata,setAllData]=useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const[address,setaddress]=useState("");
  let item = { name,email,address,number};
  const [Api,setApi]=useState(null);
  const submit=(c)=>{
    console.log(name,email,number,address);
    c.preventDefault();
    let result = fetch("http://ec2-13-59-60-23.us-east-2.compute.amazonaws.com:5000/api/admin/addclient",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer "+books.authToken,
      },
      body: JSON.stringify(item),
    }).then((result) => {
          console.log(result);
      result.json().then((data) => {
        console.log(data);
        
      })
    })
     
  }
  
 
  
 
  console.log(props.CToken);
  console.log(alldata);
 
 

  return (
    <React.Fragment>
    



      <div className="container-fluid p-5 bg-light">
        <h2>Client Details</h2>
        <hr></hr>
        <button
          type="button"
          class="btn btn-primary my-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Update Client Details
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-primary">
                <h5 class="modal-title" id="exampleModalLabel">
                  Update Client Details
                </h5>
              </div>
              <div class="modal-body bg-light">
                <form className="row g-3 mb-5">
                  <div className="col-md-6">
                    <label for="validationServer01" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(c) => setname(c.target.value)}
                      id="validationServer01"
                      required
                    ></input>
                  </div>
                  <div className="col-md-6">
                    <label for="validationServer01" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={(c) => setemail(c.target.value)}
                      class="form-control "
                      id="validationServer02"
                      required
                    ></input>
                  </div>
                  <div className="col-md-6  mt-2">
                    <label for="validationServer01" class="form-label">
                      Phone Number
                    </label>
                    <input
                      type="int"
                      class="form-control "
                      onChange={(c)=>setnumber(c.target.value)}
                      id="validationServer03"
                      required
                    ></input>
                  </div>
                  <div className="col-md-8 mt-2">
                    <label for="validationServer01" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      onChange={(c)=>setaddress(c.target.value)}
                      class="form-control "
                      id="validationServer04"
                      required
                    ></input>
                  </div>
                  <div class="col-12 mt-3">
                      <button
                      type="button"
                      class="btn btn-secondary mx-1"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button class="btn btn-primary mx-1" onClick={submit} type="submit" >
                      Submit form
                    </button>
                      </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <table class="table  table-striped">
          <thead class="table-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
             
            </tr>
          </thead>
          <tbody>
            {books.client.map((user, index) => {
                return (
                  <tr>
                    <th scope="row">{1+index}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.number}</td>
                   
                  </tr>
                );
              })}
          </tbody>
        </table>
       
      </div>
     
    </React.Fragment>
  );
}
export default Client;
