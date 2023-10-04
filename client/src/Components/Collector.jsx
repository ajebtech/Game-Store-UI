import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import requests from "../Js/requests";
import axios from "../Js/axios";
import Filters from "./Filters";
import Search from "./Search";

function Collector() {
  useEffect(() => {
    const fetchData = async () => {};

    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-800  to-red-950 overflow-hidden  ">
      {false && <Sidebar />}
      <Search />
      <Filters />
    </div>
  );
}

export default Collector;
