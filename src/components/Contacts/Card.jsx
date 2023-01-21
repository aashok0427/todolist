import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
import Title from "./Title";

function Card(props) {
  return (
    <div className="card">
      <div className="top">     
        <Title name={props.name} />
        <Avatar image={props.image} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.tel} />
        <Details detailInfo={props.email} />
        <Details detailInfo={props.zip} />
      </div>
    </div>
  );
}

export default Card;
