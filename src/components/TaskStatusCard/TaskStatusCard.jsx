import SelectedTicket from "../SelectedTicket/SelectedTicket";

const TaskStatusCard = ({ tickets,handleRemoveTickets,customerTikets }) => {
  // console.log(tickets);

  return (
    <div className="grid grid-cols-1 gap-3 mb-6">
      {tickets.map((ticket) => (
        <SelectedTicket key={ticket.id} tickets={tickets} ticket={ticket} handleRemoveTickets={handleRemoveTickets} customerTikets={customerTikets}></SelectedTicket>
      ))}
    </div>
  );
};

export default TaskStatusCard;
