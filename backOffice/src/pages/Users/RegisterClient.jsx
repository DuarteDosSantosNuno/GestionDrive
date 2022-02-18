// import { useState, useEffect } from "react";
// import * as MDB from "mdb-react-ui-kit";
// import * as URL from "../../APIConfig";

// export default function RegisterClient(props) {
//   const [data, setData] = useState([]);

//   // function DisplayUsers() {
//   //   useEffect(() => {
//   //       getAllUsers();        
//   //     }, []);
//   //     console.log(data);
//   // }

//   const newUser = async () => {
//     const endpoint = URL.AUTHENTICATE + "register-client";

//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       //body: JSON.stringify({ title: 'React POST Request Example' })
//       body: JSON.stringify()
// };

//     fetch(endpoint, requestOptions) // URL sur le serveur
//             .then(function (response) {
//                 console.log(response);
//                 return response.json();
//             })
//             .then(
//                 (result) => {
//                     console.log(result);
//                     setData(result);
//                 },
//                 (error) => {
//                     console.log(error);
//                 })
//   };
  
//   return (
//     <div>
//         <h1>Sign Up</h1>

//             <form method="post">
//               <label htmlFor="email">Email</label>
//               <input name="email" placeholder="jane@acme.com" type="email" /> <br/>
              
//               <label htmlFor="password">Password</label>
//               <input name="password" type="password" /> <br/>
    
//               <button type="submit" onClick="newUser();">
//                 Submit
//               </button>
//             </form>
//       </div>
//   );
// }

import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as URL from "../../APIConfig";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Example(props) {

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}

        onSubmit={async (values) => {
          await sleep(500);

          const endpoint = URL.AUTHENTICATE + "register-client";

          const requestOptions = {
             method: 'POST',
            // mode: 'no-cors',
            headers: {
              //'Content-Type': 'application/json', 
              //'Content-Type': 'text/plain', 
              // 'access-control-allow-origin': '*',
              //'Content-Type': 'application/x-www-form-urlencoded',
              //'Content-Type': 'multipart/form-data',
              //'Content-Encoding': 'utf-8', 
              'Accept': '*',
              //'Content-Type': 'application/*+json; charset=utf-8', 
              //'Accept': 'application/json',
            },
            body: JSON.stringify(values, null, 2)
          };

          await fetch(endpoint, requestOptions) // URL sur le serveur
                  .then(function (response) {
                      console.log(response);
                      return response.json();
                  })
                  .then(
                      (result) => {
                          console.log(result);
                      },
                      (error) => {
                          console.log(error);
                      })


          //alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="jane@acme.com" type="email" />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
