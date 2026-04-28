export const Home = () => {
  return (
    <main className="d-flex flex-column">
      <section className="upper-section d-flex flex-column align-items-center ">
        <h1 className="text-preset-1 text-light mt-5">IP Address Tracker</h1>
        <div className="search-bar d-flex mt-5 input-container">
          <input
            type="text"
            placeholder="Search for any IP address or domain......"
            className="form-control search-input"
          />
          <i className="bi bi-arrow-right-short bg-dark btn text-light search-button"></i>
        </div>
      </section>
      <section className="map-section"></section>
    </main>
  );
};
