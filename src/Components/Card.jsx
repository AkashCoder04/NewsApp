import React from "react";
export default function Card({ item }) {
   
  console.log(item);
  return (
    <>
      <div className="row">
        {item.map((value,index) => {
          return (
            <div className="col-md-4 my-3" key={index}>
              <div
                className="card p-2"
                style={{ width: "21rem", maxHeight: "550px"  }}
              >
                <img
                  src={value.urlToImage}
                  className="card-img-top"
                  maxHeight="200px"
                  alt="..."
                />
                <div className="card-body" >
                  <h5 className="card-title">{value.title.slice(0,50) + "..."}</h5>
                  <hr /> 
                  <h6 className="bg-dark text-danger w-100 text-center p-2" style={{borderRadius:"3px"}}>{value.source.name}</h6>
                  <p className="card-text">
                    {value.description.slice(0, 120) + "..."}
                  </p>
                  <a href={value.url} className="btn btn-dark px-5"  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
