import React from "react";
import Footer from "../../components/Footer/Index"
import Photos from "../Photos/Index"
import Navbar from "../../components/Navbar/Index"

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <p>this is home</p>
        <Photos />
        <Footer />
      </div>
    )
  }
}

export default Home;