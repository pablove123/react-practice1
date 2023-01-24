import Bread from "./Bread";
import Ham from "./Ham";
import Sauce from "./Sauce";
const Sandwhich = (props) => {
  return ( 
    <>
    <h1>Sandwich</h1>
    <div><Bread/></div>
    <div><Sauce/></div>
    <div><Ham/></div>
    <div><Sauce/></div>
    <div><Bread/></div>
    </>
   );
}
 
export default Sandwhich;