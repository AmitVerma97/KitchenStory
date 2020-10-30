import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewEvent = () => {
  const [event, setEvent] = useState({
    name: "",
    venue: "",
    timing: "",
    date: "",
    organiser: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadEvent();
  }, []);
  const loadEvent = async () => {
    const res = await axios.get(`http://localhost:3003/events/${id}`);
    setEvent(res.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4">Payment Successful !!!!. </h1>
      <br/>
      <h3>Details of your purchase are : </h3>
      <hr />
      <ul className="list-group w-50 py-4">
        <li className="list-group-item">Item Id: {id}</li>
        <li className="list-group-item">Item Name: {event.name}</li>
        <li className="list-group-item">Seller: {event.venue}</li>
        <li className="list-group-item">Rating: {event.timing}</li>
        <li className="list-group-item">Weight or Volume: {event.organiser}</li>
        <li className="list-group-item">Amount Paid: {event.date}</li>
        
        <br/>
        <Link className="btn btn-primary" to="/">
        return to Home
      </Link>
      </ul>
    </div>
  );
};

export default ViewEvent;
