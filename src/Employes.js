import React, { useState,useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { BookContext } from "./BookContext";




function Employes(props) {
  const [count, setCount] = useState(0);
  const [allemployees, setallemployees] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password,setpassword] = useState("");
  let item = { name,email,password};
  
   
  const books=useContext(BookContext);
  console.log(books.employee);

  const submit=(e)=>{
    console.log(name,email,password);
    e.preventDefault();
    let result = fetch("http://ec2-13-59-60-23.us-east-2.compute.amazonaws.com:5000/api/admin/createuser",
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
  
 

  // useEffect(() => {
  //   fetch(
  //     "http://ec2-13-59-60-23.us-east-2.compute.amazonaws.com:5000/api/admin/606c4bfd1b9b9af585c95ab9/employees",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization:
  //           "Bearer "+props.Token,
  //       },
  //       body: null,
  //     }
  //   ).then((result) => {
  //       console.log(result);
  //     result.json().then((data) => {
  //       //  console.log(data.employees);
  //       setallemployees(data);
       
  //     });
  //   });
  // }, []);

 
  
 
  return (
    <React.Fragment>
      

      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-2 "></div>
          <div className="col-md-10">
            <h2>Employee Details</h2>
            <hr></hr>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Update Employee Details
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
                      Update Employee Details
                    </h5>
                  </div>
                  <div class="modal-body">
                    <form className="row g-3 m-2  bg-light">
                      <div className="col-md-6">
                        <label for="validationServer01" class="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setname(e.target.value)}
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
                          class="form-control "
                          onChange={(e) => setemail(e.target.value)}
                          id="validationServer02"
                          required
                        ></input>
                      </div>
                      <div className="col-md-6  mt-2">
                        <label for="validationServer01" class="form-label">
                         Password
                        </label>
                        <input
                          type="password"
                          class="form-control "
                          onChange={(e) => setpassword(e.target.value)}
                          id="validationServer03"
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
                    <button class="btn btn-primary mx-1" onClick={()=>submit} type="submit">
                      Submit form
                    </button>
                      </div>

                    </form>
                  </div>
                  
                </div>
              </div>
            </div>

            <table class="table  table-striped  mt-3">
              <thead class="table-primary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date of Joining</th>
                  <th></th>
                  
                </tr>
              </thead>
              <tbody>
                
                { books.employee.employees?.map((user, index) => {
                  
                  return (
                    
                    <tr>
                      
                      <td>{index + 1} </td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.date}</td>
                    
                   
             <span className="input-group-btn">
              
               <Link to={"/EmployeeDetail/"+user._id} 
              >Click for Detail</Link>
               
             </span>
                    </tr> 

                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     
    </React.Fragment>
  );
}
export default Employes;
