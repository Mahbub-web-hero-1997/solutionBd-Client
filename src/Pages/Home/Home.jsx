import Banner from "../Banner/Banner";
import About from "./About/About";
import Address from "./Address/Address";
import Services from "./Services/Services";
// import Service from "./Services/Service";


const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      {/* <Service/> */}
      <Address />    
    </div>
  );
};

export default Home;
