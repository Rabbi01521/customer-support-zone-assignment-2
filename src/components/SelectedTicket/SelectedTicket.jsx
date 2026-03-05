const SelectedTicket = ({ticket,handleRemoveTickets}) => {

    const handleRemoveTask = () =>{
    console.log(ticket)
    handleRemoveTickets(ticket)
  }

    return (
        <div className="card bg-base-100 card-xs shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{ticket.title}</h2>
            <button onClick={handleRemoveTask} className="btn btn-block btn-success text-amber-50">Complete</button>
          </div>
        </div>
    );
};

export default SelectedTicket;