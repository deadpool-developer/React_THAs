import React from "react";
import { Card } from "react-bootstrap";
import {ListGroupItem  } from "react-bootstrap";
import {ListGroup  } from "react-bootstrap";
import "./day25.css"
import wallpaper from "./wallpaper.jpg" 

function Bootstrap() {
  return (
      <div>
          <div className="boot">
      <Card style={{ width: "18rem", border: "2px solid black",color:"olivedrab" }}>
      <Card.Body>
        <Card.Title>Card Using Bootstrap</Card.Title>
        <Card.Text>
          Install Bootstrap in react app. Then import every component in the jsx file 
          to make the things work. You can also style the components using custom CSS or tailwind CSS.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" style ={{border: "1px solid black"}}>
        <ListGroupItem>Used Card Component</ListGroupItem>
        <ListGroupItem>Used ListGroupItem Component</ListGroupItem>
        <ListGroupItem>Used ListItem Component</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div >
     

    </div>
    <div className="tail">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={wallpaper} alt="Display" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2"> 
         <b>Card Using Tailwind CSS</b> 
        </div>
        <p className="text-gray-700 text-base ">
          When i’m not coding i switch to netflix with biscuits and cold tea as my companion. <span></span>😜
        </p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Bootstrap;
