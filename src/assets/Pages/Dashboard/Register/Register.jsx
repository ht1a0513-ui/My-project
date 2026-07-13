import { useState } from "react";

function Register(){

    const[data,setData]=useState({
        name:"",
        email:"",
        event:""
    });

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        alert("Registration Successful");

        console.log(data);

        setData({
            name:"",
            email:"",
            event:""
        });
    };

    return(

        <div>

            <h1>Register Participant</h1>

            <form onSubmit={handleSubmit}>

                <input
                type="text"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                />

                <br/><br/>

                <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                />

                <br/><br/>

                <select
                name="event"
                value={data.event}
                onChange={handleChange}
                >
                    <option>Select Event</option>
                    <option>React Workshop</option>
                    <option>Hackathon</option>
                    <option>AI Bootcamp</option>
                </select>

                <br/><br/>

                <button>Register</button>

            </form>

        </div>

    );

}

export default Register;