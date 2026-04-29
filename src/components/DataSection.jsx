export const DataSection = ({ data }) => {
  return (
    <div className="d-flex h-100 w-100 justify-content-center align-items-center">
      <div className="position-absolute card p-md-4">
        <div className="row ">
          {data.map((item, index) => (
            <div key={index} className="col-7 mx-auto col-md-6 col-lg-3 ">
              <span className="text-preset-6">{item.name}</span>
              <h3 className="text-preset-3">{item.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
