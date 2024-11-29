import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/s9.JPG",
      title: "ACS College of Engineering",
    },
    {
      id: 2,
      url: "/s10.JPG",
      title: "Football Team",
    },
    {
      id: 3,
      url: "/s8.JPG",
      title: "Fashion Walk",
    },
    {
      id: 4,
      url: "/s7.JPG",
      title: "Kabadi Team",
    },
    {
      id: 5,
      url: "/s6.JPG",
      title: "Hacker Team",
    },
    {
      id: 6,
      url: "/s5.JPG",
      title: "Dance",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>Gallery</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
