import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Added toast
// import "react-toastify/dist/React-Toastify.css";
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
  // tickets: Represents tickets currently "In Progress" (Task Status Section)
  const [tickets, setTickets] = useState([]);
  // resolved: Represents tickets that have been completed
  const [resolved, setResolved] = useState([]);
  // customerTicketsData: Represents the main list of available tickets
  const [customerTicketsData, setCustomerTicketsData] = useState([]);

  /**
   * handleRemoveTickets (The "Complete" Logic)
   * This function triggers when the "Complete" button is clicked in the Task Status.
   */
  const handleRemoveTickets = (taskTicket) => {
    // 1. Remove from "In Progress" (Right Side)
    // This removes the ticket from the task tracking area
    const updatedInProgress = tickets.filter(
      (ticket) => ticket.id !== taskTicket.id,
    );
    setTickets(updatedInProgress);

    // 2. Remove from "Customer Tickets" (Left Side / Available List)
    // This ensures the ticket is gone from the main list permanently
    const updatedCustomerData = customerTicketsData.filter(
      (cus) => cus.id !== taskTicket.id,
    );
    setCustomerTicketsData(updatedCustomerData);

    // 3. Add to "Resolved" List
    // This updates the Banner count for resolved tickets
    setResolved([...resolved, taskTicket]);

    // 4. Stylish Notification
    toast.success(`Ticket #${taskTicket.id} marked as Resolved!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Navbar />

      {/* StatusOverview acts as your Banner. 
          The counts are derived from: tickets.length (In Progress) and resolved.length (Resolved)
      */}
      <StatusOverview tickets={tickets} resolved={resolved} />

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-infinity loading-lg text-primary"></span>
          </div>
        }
      >
        <CustomerTicketsSection
          setTickets={setTickets}
          tickets={tickets} // Current In-Progress tickets
          customerTicketPromis={customerTicketPromise}
          handleRemoveTickets={handleRemoveTickets} // Passing the completion logic
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
