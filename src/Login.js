import React from "react";
import { useState, useEffect } from "react";
import "./login.css";

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [workspace, setworkspace] = useState("");
  const [authData, setAuthData] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [author, setAuth] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(email, password, workspace);
    let item = { email, password, workspace };
    let result = fetch(
      "http://ec2-13-59-60-23.us-east-2.compute.amazonaws.com:5000/api/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
        },
        body: JSON.stringify(item),
      }
    ).then((result) => {
         console.log(result);
      result.json().then((data) => {
        console.log(data);
        setAuthData(data);



        if (data.token) {
         // props.login();
          props.authToken(data.token);
          props.author(data);
        }
      });
    });
    
  };
  console.log(authToken);
  console.log(author)
  // useEffect(() => {
  //   if (authData != false) {
  //     props.login();
  //   }
  // }, [authData]);

  return (
    <React.Fragment>
      <div className="container-fluid wall">
        <div className="row">
          <div className="col-md-5 login">
            <div className="p-5 form-in">
              <h3 className="text">Login</h3>
              <hr></hr>
              <form>
                <input
                  type="email"
                  className="form-control mt-3 mb-3 "
                  placeholder="Email"
                  onChange={(e) => setemail(e.target.value)}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                ></input>

                <input
                  type="password"
                  className="form-control mt-3 mb-3"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                  id="exampleInputPassword1"
                  required
                ></input>

                <input
                  type="text"
                  className="form-control  mt-3 mb-3"
                  placeholder="Workspace"
                  onChange={(e) => setworkspace(e.target.value)}
                  id="exampleInputworkspace"
                  required
                ></input>

                <button onClick={submit} className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
