import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import CustomerTicketsSection from "./components/CustomerTicketsSection/CustomerTicketsSection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import StatusOverview from "./components/StatusOverview/StatusOverview";

// 1. Data fetching outside the component to prevent re-renders
const fetchCustomerTickets = async () => {
  const res = await fetch("./tickets.json");
  return res.json();
};

const customerTicketPromise = fetchCustomerTickets();

function App() {
  // --- STATE MANAGEMENT ---
  const [tickets, setTickets] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [customerTicketsData, setCustomerTicketsData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleRemoveTickets = (taskTicket) => {
    // 1. Remove from "In Progress" (Right Side)
    const updatedInProgress = tickets.filter(
      (ticket) => ticket.id !== taskTicket.id
    );
    setTickets(updatedInProgress);

    // 2. Remove from "Customer Tickets"
    const updatedCustomerData = customerTicketsData.filter(
      (cus) => cus.id !== taskTicket.id
    );
    setCustomerTicketsData(updatedCustomerData);

    // 3. Add to "Resolved" List
    setResolved([...resolved, taskTicket]);

    toast.success(`Ticket #${taskTicket.id} marked as Resolved!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Navbar />
      <StatusOverview tickets={tickets} resolved={resolved} />

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-infinity loading-lg text-primary"></span>
          </div>
        }
      >
        <CustomerTicketsSection
          setToggle={setToggle}
          toggle={toggle}
          setTickets={setTickets}
          tickets={tickets}
          customerTicketPromis={customerTicketPromise}
          handleRemoveTickets={handleRemoveTickets}
          resolved={resolved}
          setResolved={setResolved}
          customerTicketsData={customerTicketsData}
          setCustomerTicketsData={setCustomerTicketsData}
        />
      </Suspense>

      <Footer />

      {/* Required for React-Toastify to work */}
      <ToastContainer />
    </>
  );
}

export default App;
