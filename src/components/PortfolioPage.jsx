import React from "react";
import profileImage from "../assets/images/profile.jpg";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
          Hello! I’m Mark Le, a passionate Data Analyst, Data Engineer, and Machine Learning Engineer with a deep enthusiasm for turning complex data into actionable insights and intelligent solutions. With a background in cybersecurity, finance, and business intelligence, I specialize in building scalable data pipelines, crafting impactful dashboards, and developing machine learning models that drive smarter decision-making. As a lifelong learner, I’m constantly exploring new technologies in data engineering and AI to push the boundaries of what data can achieve. Right now, I’m expanding my expertise in cloud platforms and real-time data processing to build robust, end-to-end data systems. I’m driven by a desire to solve meaningful problems, automate processes, and create data-driven solutions that deliver real-world value to businesses and communities.{" "}
            {/* <a className="text-[#4ECCA3] px-2" href="https://olova.js.org/">
              OlovaJS
            </a>{" "} */}

          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
