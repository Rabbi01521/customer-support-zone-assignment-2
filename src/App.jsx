import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import CustomerTicketsSection from "./components/CustomerTicketsSection/CustomerTicketsSection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import StatusOverview from "./components/StatusOverview/StatusOverview";

const fetchCustomerTickets = async () => {
  const res = await fetch("./tickets.json");
  return res.json();
};

const customerTicketPromise = fetchCustomerTickets();

function App() {
  const [tickets, setTickets] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [customerTicketsData, setCustomerTicketsData] = useState([])

  // console.log(tickets)

  const handleRemoveTickets = (taskTicket) => {
    console.log(taskTicket);
    const filterData = tickets.filter((ticket) => ticket.id !== taskTicket.id);
    console.log(filterData);
    setTickets(filterData);

    const updatedCustomerData = customerTicketsData.filter(cus => cus.id !== taskTicket.id)

    setCustomerTicketsData(updatedCustomerData);
    console.log(updatedCustomerData);

    // console.log(resolved)
  };

  // console.log(customerTickets)

  return (
    <>
      <Navbar></Navbar>
      <StatusOverview tickets={tickets} resolved={resolved} />
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <span className=" loading loading-infinity loading-xl"></span>
          </div>
        }
      >
        <CustomerTicketsSection
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

      <ToastContainer />
    </>
  );
}

export default App;
