import React from "react";

import Header from "./Header";

function Edashboard() {
  return (
    <>
    <Header/>

      <div className="container-fluid bg-light dashboard">
        <div className="row">
         
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4 pt-3">
                <div className="card text-center">
                  <div className="card-header bg-primary">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fillrule="evenodd" d="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5V6.85L8.129 8.947a.5.5 0 01-.258 0L0 6.85v5.65z" cliprule="evenodd"></path><path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v1.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z" cliprule="evenodd"></path></svg>
                      Total Client
                      </div>
                  <div className="card-body p-5">
                    
                  </div>
                  
                </div>

              </div>
              
             
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Edashboard;
