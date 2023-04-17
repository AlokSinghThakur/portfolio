import React from 'react'
import { useState } from 'react';
import "./works.scss";

export default function Works() {
  const [currentSlide,setCurrentSlide] = useState(0);

  const data =[
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Rgyan",
      desc:
        "I am an experienced backend developer who has expertise in developing RESTful API endpoints using Node.js, Express.js, MySql, Javascript",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "CHALBO INDIA",
      desc:
        "Designed and developed the taxi booking web App",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Unscripted India",
      desc:
        "Implemented a website using wordpress.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    // {
    //   id: "3",
    //   icon: "./assets/writing.png",
    //   title: "Branding",
    //   desc:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //   img:
    //     "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    // },
  ]

const handleCLick = (way)=>{
  way === "left" 
  ? setCurrentSlide(currentSlide > 0 ? currentSlide-1: 2) 
  : setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0)
}

  return (
    <div className='works' id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (

        
        <div className="container">
          <div className="item">
            <div className="left">
             <div className="leftContainer">
              <div className="imgContainer">
                <img src={d.icon} alt="" />
              </div>
              <h2>{d.title}</h2>
              <p>{d.desc}</p>
              <span>Project</span>
             </div>
            </div>
            <div className="right">
              <img 
              src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930' 
              alt=''
              />
            </div>
          </div>
        </div>
         ))}
      </div>
      <img src="assets/arrow.png" className="arrow left"  alt="" onClick={()=>handleCLick("left")} ></img>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleCLick("right")} ></img>
    </div>
  );
}
