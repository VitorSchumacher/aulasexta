import React from "react";
import TopBar from "../../Components/TopBar/TopBar.tsx";
import AddEvento from "../../Components/AddEvento/AddEvento.tsx";

const Home = () => {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <div>
        <AddEvento />
      </div>
    </>
  );
};

export default Home;
