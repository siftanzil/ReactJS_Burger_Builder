import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

function BuildControl(props) {
  return (
    <div className="d-flex">
      <div className="me-auto ml-5" style={{ fontWeight: "bold" }}>
        {props.label}
      </div>
      <button className=" btn btn-danger btn-sm m-1" onClick={props.removed}>
        Less
      </button>
      <button className="btn btn-success btn-sm m-1" onClick={props.added}>
        More
      </button>
    </div>
  );
}

function Controls(props) {
  return (
    <div className="container ml-md-5" style={{ textAlign: "center" }}>
      <Card
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <CardHeader
          style={{
            backgroundColor: "yellow",
            color: "black",
          }}
        >
          <h4>Add Ingredient</h4>
        </CardHeader>
        {/* 
        <CardBody>
          {controls.map((items) => {
            return buildControl(items.label, items.type, Math.random());
          })}
        </CardBody>
         */}
        <CardBody>
          {controls.map((item) => {
            return (
              <BuildControl
                label={item.label}
                type={item.type}
                key={Math.random()}
                added={() => props.ingredientAdded(item.type)}
                removed={() => props.ingredientRemoved(item.type)}
              />
            );
          })}
        </CardBody>

        <CardFooter>
          <h5>
            Price:<strong> {props.price} </strong> BDT
          </h5>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Controls;
