import { mockIpData } from "../data/mockIpdata";
import { DataSection } from "../components/DataSection";
import { useState, useEffect } from "react";
import { fetchIpData } from "../services/ipServices";
export const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async (ip) => {
    try {
      setLoading(true);
      const data = await fetchIpData(ip);
      setData(data);
      console.log(data);
    } catch (error) {}
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getData(search);
  };
  useEffect(() => {
    getData("");
  }, []);
  const mapIpData = (data) => [
    {
      name: "IP Address",
      value: data.ip,
    },
    {
      name: "Location",
      value: data.location.city + ", " + data.location.region,
    },
    {
      name: "Timezone",
      value: "UTC " + data.location.timezone,
    },
    {
      name: "ISP",
      value: data.isp,
    },
  ];
  return (
    <main className="d-flex flex-column position-relative">
      <section className="upper-section d-flex flex-column align-items-center ">
        <h1 className="text-preset-1 text-light mt-5">IP Address Tracker</h1>
        <div className="search-barmt-5 input-container">
          <form className=" d-flex " onSubmit={handleSubmit}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for any IP address or domain......"
              className="form-control search-input"
            />
            <i className="bi bi-arrow-right-short bg-dark btn text-light search-button"></i>
          </form>
        </div>
      </section>

      <DataSection data={data ? mapIpData(data) : []}></DataSection>
      <section className="map-section"></section>
    </main>
  );
};
