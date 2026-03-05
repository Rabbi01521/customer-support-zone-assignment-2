import ResolvedTaskCard from "../ResolvedTaskCard/ResolvedTaskCard";
import TaskStatusCard from "../TaskStatusCard/TaskStatusCard";

const TaskStatusSidebar = ({tickets, handleRemoveTickets, customerTikets,resolved, setResolved}) => {
  // console.log(tickets)
  return (
    <div className="px-3 lg:px-0">
      <div>
        <h1 className="text-sx lg:text-2xl font-bold mb-3">Task Status</h1>
        {
          tickets.length === 0 ? <p className="font-light mb-3 text-gray-500">
          Select a ticket to add to Task Status
        </p> : <TaskStatusCard tickets={tickets} handleRemoveTickets={handleRemoveTickets} customerTikets={customerTikets}></TaskStatusCard>
        }
      </div>
      <ResolvedTaskCard tickets={tickets} resolved={resolved} setResolved={setResolved}></ResolvedTaskCard>
    </div>
  );
};

export default TaskStatusSidebar;
