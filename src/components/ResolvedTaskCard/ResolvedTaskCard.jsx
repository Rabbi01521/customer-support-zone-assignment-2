import ResolvedCard from "../ResolvedCard/ResolvedCard";

const ResolvedTaskCard = ({ resolved }) => {
  // console.log(resolved);
  return (
    <div>
      <h1 className="text-sx lg:text-2xl font-bold mb-3">Resolved Task</h1>
      {resolved.length === 0 ? (
        <div>
          <p className="font-light mb-3 text-gray-500">
            No resolved tasks yet.
          </p>
        </div>
      ) : <ResolvedCard resolved={resolved}/>}
    </div>
  );
};

export default ResolvedTaskCard;
