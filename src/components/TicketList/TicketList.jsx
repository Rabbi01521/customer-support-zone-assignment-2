import { toast } from "react-toastify";
import TicketCard from "../TicketCard/TicketCard";
const TicketList = ({ tickets, setTickets, customerTicketsData, setToggle }) => {


  const handleTickets = (ticketData) =>{
    // console.log(ticketData.id)
    setToggle(true);
    // console.log(customerTicketsData)
    const newTaskStatus = [...tickets, ticketData]
    setTickets(newTaskStatus)

    const handleDisableTicketCard = customerTicketsData.find(ticket => ticket.id === ticketData.id);
    console.log(handleDisableTicketCard)

    toast.info(`Ticket #${ticketData.id} is now In Progres`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  }

  return (
    <div className="col-span-2 px-3 lg:px-0">
      <h1 className="mb-4 text-2xl font-bold">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {customerTicketsData.map((ticket) => (
          <TicketCard key={ticket.id} handleTickets={handleTickets} ticket={ticket}></TicketCard>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
