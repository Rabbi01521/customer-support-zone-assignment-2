
const ResolvedCard = ({ resolved }) => {
  return (
    <div className="grid grid-cols-1 gap-3 mb-6">
      {resolved.map((ticket) => (
        <div key={ticket.id} className="card bg-[#E0E7FF] card-md shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-xl">{ticket.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResolvedCard;
