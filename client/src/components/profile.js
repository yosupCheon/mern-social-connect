import React, { useState } from "react";
import { useNavigate } from "react-router";
export default function Profile({ userName }) {
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
  // This function will handle the submission.
 async function onSubmit(e) {  }
  // This following section will display the form that takes the input from the user.
 return (
   <div>
    <h3>Welcome User!</h3>
   </div>
   
 );
}