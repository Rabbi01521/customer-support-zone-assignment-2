import { faCalendarAlt, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
const TicketList = ({ tickets, setTickets, customerTicketsData }) => {

  const handleTickets = (ticketData) =>{
    // console.log(ticketData)
    const newTaskStatus = [...tickets, ticketData]
    setTickets(newTaskStatus)
    toast("Customer Ticket Added Succsessfully")
  }

  return (
    <div className="col-span-2 px-3 lg:px-0">
      <h1 className="mb-4 text-2xl font-bold">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {customerTicketsData.map((ticket) => (
          <div onClick={()=> handleTickets(ticket)} key={ticket.id} className="link no-underline card bg-base-100 card-sm shadow-sm">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-xs md:text-sm">{ticket.title}</h2>
                <span
                  className={`${ticket.status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"} p-2 rounded-3xl text-xs md:text-sm`}
                >
                  <FontAwesomeIcon
                    icon={faCircle}
                    className={`${ticket.status === "Open" ? "text-[#0B5E06]" : "text-[#FEBB0C]"}`}
                  />{" "}
                  {ticket.status}
                </span>
              </div>
              <p className="text-[#627382]">{ticket.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span>#{ticket.id}</span>
                  <span
                    className={`font-light ml-3 ${
                      ticket.priority.toUpperCase() === "HIGH"
                        ? "text-red-500"
                        : ticket.priority.toUpperCase() === "MEDIUM"
                          ? "text-yellow-500"
                          : ticket.priority.toUpperCase() === "LOW"
                            ? "text-green-500"
                            : "text-gray-500" // Default color
                    }`}
                  >
                    {ticket.priority} PRIORITY
                  </span>
                </div>
                <div>
                  <span className="text-[#627382]">{ticket.assignee}</span>
                  <span className="text-[#627382]">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="text-[14px] ml-3 text-[#627382] font-bold"
                    />
                    {ticket.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
