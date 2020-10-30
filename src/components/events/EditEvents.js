import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditEvent = () => {
  let history = useHistory();
  const { id } = useParams();
  const [event, setEvent] = useState({
    name: "",
    venue: "",
    timing: "",
    date: "",
    organiser: ""
  });

  const { name, venue, timing, date, organiser } = event;
  const onInputChange = e => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEvent();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/events/${id}`, event);
    history.push("/");
  };

  const loadEvent = async () => {
    const result = await axios.get(`http://localhost:3003/events/${id}`);
    setEvent(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit a Food Item</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
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
            <input
              type="text"
              className="form-control form-control-lg" required
              placeholder="Enter price of the item"
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg" required
              placeholder="Enter name of the weight or volume of the item"
              name="organiser"
              value={organiser}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Item Details</button>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
