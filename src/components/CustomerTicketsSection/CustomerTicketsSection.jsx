
import { use, useEffect } from "react";
import TaskStatusSidebar from "../TaskStatusSidebar/TaskStatusSidebar";
import TicketList from "../TicketList/TicketList";


const CustomerTicketsSection = ({ customerTicketPromis, tickets, setTickets,handleRemoveTickets,resolved, setResolved, setCustomerTicketsData, customerTicketsData }) => {
  const customerTikets = use(customerTicketPromis);
  // console.log(customerTikets);
  useEffect(() => {
    if (customerTikets) {
      setCustomerTicketsData(customerTikets);
    }
  }, [customerTikets, setCustomerTicketsData]); // Depend on customerTikets and setCustomerTicketsData to ensure it runs when either changes 
  
  return (
    <div className="max-w-[1200px] mx-auto pb-14 grid lg:grid-cols-3 gap-6">
      <TicketList customerTikets={customerTikets} tickets={tickets} setTickets={setTickets} setResolved={setResolved} setCustomerTicketsData={setCustomerTicketsData} customerTicketsData={customerTicketsData} ></TicketList>
      <TaskStatusSidebar tickets={tickets} handleRemoveTickets={handleRemoveTickets} customerTikets={customerTikets} resolved={resolved} setResolved={setResolved} ></TaskStatusSidebar>
    </div>
  );
};

export default CustomerTicketsSection;
