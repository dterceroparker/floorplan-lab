import Kitchen from "./src/Kitchen";
import LivingRoom from "./src/LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = () => {
  return ( 
    <div id="floorplan">
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bath size="Full " />
      <Bedroom bedNum={2} />
      <LivingRoom />
      <Bath size="Half " />
      <Bedroom bedNum={3} />
    </div>
  );
}

export default FloorPlan