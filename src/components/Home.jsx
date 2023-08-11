import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import images from "../utils/images";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div key={index} className="m-2">
            <Card imageSrc={image} index={index} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
