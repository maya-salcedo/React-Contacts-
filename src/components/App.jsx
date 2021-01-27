import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdoy3kG9fItlKA-fP-FHGG8y1V0pcCVQcO7A&usqp=CAU" />
      <Card 
        name = {contacts[0].name}
        imgURL = {contacts[0].imgURL}
        phone = {contacts[0].phone}
        email = {contacts[0].email}
      />; 
        <Card 
        name = {contacts[1].name}
        imgURL = {contacts[1].imgURL}
        phone = {contacts[1].phone}
        email = {contacts[1].email}
      />; 
        <Card 
        name = {contacts[2].name}
        imgURL = {contacts[2].imgURL}
        phone = {contacts[2].phone}
        email = {contacts[2].email}
      />; 
    </div>
  );
}


export default App;
