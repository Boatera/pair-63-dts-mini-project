import Footer from "../component/Footer";
import YoutubeEmbed from "../component/VideoPlayer";
import Navbar from "../component/Navbar";

const DetailMoviePage = () => {
  const path = window.location.pathname.split('/');
  const title = decodeURI(path[2]);
  return (
    <>
      <div className="root-container">
        {/* Navbar */}
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="title">{title}</div>
        <br />
        <YoutubeEmbed embedId="rokGy0huYEA" />
        <br />
        <br />
        <br />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default DetailMoviePage;
