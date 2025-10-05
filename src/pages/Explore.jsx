import React, { useState } from "react";
import "./Explore.css";

const exploreItems = [
  {
    title: "Aurora Over Earth",
    type: "video",
    src: "/explore/GSFC_20171107_Ionosphere_m12532_ICON~small.mp4",
    desc: "Earth’s atmosphere glows with dancing auroras caused by solar energy.",
  },
  {
    title: "Solar Storm CME",
    type: "video",
    src: "/explore/GSFC_20180309_CME_m12890_3DCME~small.mp4",
    desc: "A coronal mass ejection bursting from the Sun — space weather in action.",
  },
  {
    title: "Saturn’s Rings",
    type: "video",
    src: "/explore/GSFC_20181217_Saturn_m12672_Rings~small.mp4",
    desc: "Marvel at Saturn’s famous rings spinning in motion.",
  },
  {
    title: "Northern Lights from Space",
    type: "video",
    src: "/explore/How Can I See the Northern Lights~small.mp4",
    desc: "A breathtaking view of auroras from above Earth’s surface.",
  },
  {
    title: "Mercury",
    type: "image",
    src: "/explore/mercury.jpg",
    desc: "The smallest planet, closest to the Sun, covered with craters.",
  },
  {
    title: "Venus Mission",
    type: "video",
    src: "/explore/NASA's Return to Venus~small.mp4",
    desc: "A new NASA mission returning to study Earth’s fiery twin, Venus.",
  },
  {
    title: "Neptune",
    type: "image",
    src: "/explore/neptune.jpg",
    desc: "A deep blue planet with strong winds and dark storms.",
  },
  {
    title: "Aurora (Photo)",
    type: "image",
    src: "/explore/aurora.jpg",
    desc: "A beautiful natural light display caused by solar particles hitting Earth’s atmosphere.",
  },
  {
    title: "Earth from Space",
    type: "image",
    src: "/explore/earth img.jpg",
    desc: "Our home — a planet full of life, water, and wonder.",
  },
  {
    title: "Uranus",
    type: "image",
    src: "/explore/uranus.jpg",
    desc: "A mysterious icy planet that spins on its side!",
  },
  {
    title: "Stars of Cepheus",
    type: "video",
    src: "/explore/20190530-SPITZRF-0001-Stars of Cephus~small.mp4",
    desc: "A tour through the bright stars of the Cepheus constellation.",
  },
];

export default function Explore() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="explore-container">
      <h1 className="explore-title">🌌 Explore NASA Wonders</h1>
      <p className="explore-subtitle">
        Watch fascinating NASA visuals — planets, auroras, and space weather in action!
      </p>

      <div className="explore-grid">
        {exploreItems.map((item, i) => (
          <div
            key={i}
            className="explore-card"
            onClick={() => setSelected(item)}
          >
            {item.type === "video" ? (
              <video src={item.src} muted loop autoPlay playsInline />
            ) : (
              <img src={item.src} alt={item.title} />
            )}
            <div className="explore-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {selected.type === "video" ? (
              <video src={selected.src} controls autoPlay />
            ) : (
              <img src={selected.src} alt={selected.title} />
            )}
            <h2>{selected.title}</h2>
            <p>{selected.desc}</p>
            <button className="close-btn" onClick={() => setSelected(null)}>
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
