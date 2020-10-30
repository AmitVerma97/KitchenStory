import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home=()=>{

    const [events, setEvent] = useState([]);
    const [search, setSearch] = useState("");
  

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const result = await axios.get("http://localhost:3003/events");
    setEvent(result.data);
    console.log(result);
  };

  const deleteEvent = async id => {
    await axios.delete(`http://localhost:3003/events/${id}`);
    loadEvents();
  };

  

  const filterFood=events.filter(event=>{
    return event.name.toLowerCase().includes(search.toLowerCase())
  })

    return(
        <div className="container">
            <div className="py-2">
                <h2>Welcome to Kitchen Story</h2>
                <br/>
                <h4>Look for all the food items here...</h4>
                <br/>
                <br/>
                <Link className="btn btn-outline-dark" to="/events/add">Add a Food Item</Link>
                <br/>
                <br/>
                <input type="text" placeholder="Search items" onChange={e=>setSearch(e.target.value)} />
                
                <br/>
                <br/>
                
                <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Item Id</th>
              <th scope="col">Item Name</th>
              <th scope="col">Seller</th>
              <th scope="col">Price(in INR)</th>
              <th>Manage Food Items</th>
            </tr>
          </thead>
          <tbody>
            {filterFood.map((event, index) => (
              <tr key={event.id}>
                <th scope="row">{event.id}</th>
                <td>{event.name}</td>
                <td>{event.venue}</td>
                <td>{event.date}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/events/${event.id}`}>
                    Purchase
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/events/edit/${event.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEvent(event.id)}
                  >
                    Delete
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>

        

        
        
            </div>
        </div>
    );
};

export default Home;