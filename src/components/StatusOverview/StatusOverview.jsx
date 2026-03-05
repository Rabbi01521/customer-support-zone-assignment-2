import vector from "../../assets/vector1.png";
import vector1 from "../../assets/vector2.png";

const StatusOverview = ({tickets,resolved}) => {

  // const handleProgress = () => {

  // }

  return (
    <div className="max-w-[1200px] md:max-w-[1200px] mx-auto py-16 px-3 lg:px-0">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="card text-white relative overflow-hidden rounded-box p-6 sm:p-8 md:p-10 lg:p-12 min-h-[180px] flex flex-col justify-center items-center">
          {/* Main background gradient layer for the card */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"></div>

          {/* Top-left background image pattern layer */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left-top opacity-30" // Adjust opacity as needed
            style={{
              backgroundImage: `url('${vector}')`,
              backgroundSize: "40% auto",
            }} // Adjust size as needed
          ></div>

          {/* Bottom-right background image pattern layer */}
          <div
            className="absolute bottom-0 right-0 w-full h-full bg-no-repeat bg-right-bottom opacity-30" // Adjust opacity as needed
            style={{
              backgroundImage: `url('${vector1}')`,
              backgroundSize: "40% auto",
            }} // Adjust size as needed
          ></div>

          {/* Card Content - ensure it's above all background layers and centered */}
          <div className="z-10 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 opacity-90">
              In-Progress
            </h2>
            <p className="text-5xl sm:text-6xl font-bold">{tickets.length}</p>
          </div>
        </div>
        <div className="card text-white relative overflow-hidden rounded-box p-6 sm:p-8 md:p-10 lg:p-12 min-h-[180px] flex flex-col justify-center items-center">
          {/* Main background gradient layer for the card */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#54CF68] to-[#00827A]"></div>

          {/* Top-left background image pattern layer */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left-top opacity-30" // Adjust opacity as needed
            style={{
              backgroundImage: `url('${vector}')`,
              backgroundSize: "40% auto",
            }} // Adjust size as needed
          ></div>

          {/* Bottom-right background image pattern layer */}
          <div
            className="absolute bottom-0 right-0 w-full h-full bg-no-repeat bg-right-bottom opacity-30" // Adjust opacity as needed
            style={{
              backgroundImage: `url('${vector1}')`,
              backgroundSize: "40% auto",
            }} // Adjust size as needed
          ></div>

          {/* Card Content - ensure it's above all background layers and centered */}
          <div className="z-10 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 opacity-90">
              Resolved
            </h2>
            <p className="text-5xl sm:text-6xl font-bold">{resolved.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusOverview;
