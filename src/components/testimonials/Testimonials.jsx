import React from 'react';
import "./testimonials.scss";

export default function testimonials() {

  const data = [
    {
      id: 1,
      name: "ABC",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Updating Soon",
    },
    {
      id: 2,
      name: "XYZ",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Updating Soon",
      featured: true,
    },
    {
      id: 3,
      name: "PQR",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
      "Updating Soon",
    },
  ];

  return (
    <div className='testimonials' id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d)=>(
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src= "assets/right-arrow.png" className='left' alt="" />
            <img className="user" src= {d.img} alt="" />
            <img className="right" src= {d.icon} alt="" />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h3>{d.title}</h3>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
