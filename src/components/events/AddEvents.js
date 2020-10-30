import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddEvent = () => {
  let history = useHistory();
  const [event, setEvent] = useState({
    name: "",
    venue: "",
    timing: "",
    date:"",
    organiser:""
  });

  const { name, venue, timing, date, organiser } = event;
  const onInputChange = e => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/events", event);
    history.push("/");
  };
  return (
    <div className="container">
      <br/>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add a Food Item</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control form-control-lg" required
              placeholder="Enter name of the item"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Seller</label>
            <input
              type="text"
              className="form-control form-control-lg" required
              placeholder="Enter seller of the item"
              name="venue"
              value={venue}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Rating</label>
            <input
              type="text"
              className="form-control form-control-lg" required
              placeholder="Enter rating of the item"
              name="timing"
              value={timing}
              onChange={e => onInputChange(e)}
            />
          </div>
          
         <div className="form-group">
         <label>Price</label>
            <input
              type="text"
              className="form-control form-control-lg" required
              placeholder="Enter Price of the item" 
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Weight or Volume</label>
            <input
              type="text"
              className="form-control form-control-lg" required
              placeholder="Enter weight(in Kg) or volume of the item(in litres)"
              name="organiser"
              value={organiser}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block">Add the Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
