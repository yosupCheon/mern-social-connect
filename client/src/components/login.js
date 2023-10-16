import React, { useState } from "react";
import { useNavigate } from "react-router";
export default function Login() {
 const [form, setForm] = useState({ 
  name: "",
  userID: "",
  password: "",
 });
 const navigate = useNavigate();
  // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 async function onSubmit(e) {
  e.preventDefault();
   // When a post request is sent to the create url, we'll add a new record to the database.
  const newPerson = { ...form };
  const response = await fetch("http://localhost:5000/record/find", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  })
  .catch(error => {
    window.alert(error);
    return;
  });
   //setForm({ name:"", userID: "", password: "" });
   const record = await response.json();
   setForm(record);
   
   if (response.ok) {
        console.log(form.name); 
        navigate("/");

    } else {
        console.log('test else');
    }
    

   //navigate("/");
}




  // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Login</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="id">ID</label>
         <input
           type="text"
           className="form-control"
           id="userID"
           value={form.userID}
           onChange={(e) => updateForm({ userID: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input
           type="text"
           className="form-control"
           id="password"
           value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div> 
       <div className="form-group">
         <input
           type="submit"
           value="Login"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}