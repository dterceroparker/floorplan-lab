import Kitchen from "./src/Kitchen";
import LivingRoom from "./src/LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = () => {
  return ( 
    <div>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1} />
      <Bedroom bedNum={2} />
      <Bedroom bedNum={3} />
      <Bath />
    </div>
  );
}

export default FloorPlan