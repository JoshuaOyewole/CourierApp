import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/ServiceCard/Card";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./_home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Slideshow />
      <section className="tracker container">
        <h2 className="secondary-header">Enter your tracking Number</h2>
        <form className="tracking">
          <input
            type="number"
            name="trackingNo"
            className="input-field"
            placeholder="Tracking Number"
          />
          <input
            type="submit"
            value="Track your Cargo"
            className="btn primary-btn"
          />
        </form>
      </section>

      {/* SOLUTIONS */}
      <section className="solutions container">
        <h4 className="title-inner">
          COURIERPLUS NIGERIA SERVICES
          <span
            className="highlight-line"
            style={{ backgroundColor: "#fd8c40" }}
          ></span>
        </h4>
        <h2 className="section-title">
          You have a need,
          <span className="break">
            we have the <span className="primary-color">SOLUTION</span>
          </span>
        </h2>
        <div className="col-3">
          <div className="row">
            <Card 
              title={'COURIER'}
              info={'For our same-day service, shipments received before 10:00am are guaranteed to be delivered to selected airport cities'}
              link="/read-more"
            />
            <Card 
              title={'LOGISTICS'}
              info={'Our Domestic Economy Service has been specifically designed to suit both individual and corporate organisations'}
              link="/read-more"
            />
            <Card 
              title={'E- COMMERCE'}
              info={'Our e-Commerce services can save you time and money in an increasingly competitive and fast changing business landscape.'}
              link="/read-more"
            />
            <Card 
              title={'INTERNATIONAL'}
              info={'Our international express service delivers time sensitive documents and parcels nationwide to over 200 countries'}
              link="/read-more"
            />
            <Card 
              title={'SPECIALISED SOLUTIONS'}
              info={'Our customised business solutions can either address your entire supply chain or smaller elements within it such'}
              link="/read-more"
            />
            <Card 
              title={'CUSTOM SOLUTIONS'}
              info={'Every business has different supply chain challenges; which means that standard solutions are rarely effective'}
              link="/read-more"
            />

           
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
