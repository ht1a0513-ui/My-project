function Events() {

    const events = [
        {
            id:1,
            name:"React Workshop",
            date:"20 July 2026",
            venue:"Seminar Hall"
        },
        {
            id:2,
            name:"Hackathon",
            date:"25 July 2026",
            venue:"Auditorium"
        },
        {
            id:3,
            name:"AI Bootcamp",
            date:"30 July 2026",
            venue:"Lab-2"
        }
    ];

    return(
        <div>

            <h1>Events</h1>

            <table border="1" cellPadding="10">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Venue</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        events.map((event)=>(
                            <tr key={event.id}>
                                <td>{event.id}</td>
                                <td>{event.name}</td>
                                <td>{event.date}</td>
                                <td>{event.venue}</td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default Events;