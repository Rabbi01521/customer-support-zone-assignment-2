
const ResolvedCard = ({ resolved }) => {
  return (
    <div className="grid grid-cols-1 gap-3 mb-6">
      {resolved.map((ticket) => (
        <div class="card bg-[#E0E7FF] card-md shadow-sm">
          <div class="card-body">
            <h2 class="card-title text-xl">{ticket.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResolvedCard;
