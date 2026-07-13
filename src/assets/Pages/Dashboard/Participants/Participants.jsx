function Participants(){

    const participants=[
        {
            id:1,
            name:"Rahul",
            event:"React Workshop"
        },
        {
            id:2,
            name:"Sneha",
            event:"Hackathon"
        },
        {
            id:3,
            name:"Kiran",
            event:"AI Bootcamp"
        }
    ];

    return(

        <div>

            <h1>Participants</h1>

            <ul>

                {
                    participants.map((participant)=>(
                        <li key={participant.id}>
                            {participant.name} - {participant.event}
                        </li>
                    ))
                }

            </ul>

        </div>

    );
}

export default Participants;