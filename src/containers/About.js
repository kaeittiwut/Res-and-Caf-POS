import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <div className="container col-md-5">
        <h3>เกี่ยวกับหลักสูตร</h3>
        <p>
          หลักสูตรที่คุณจะได้เรียนสร้าง Web ด้วยเทคโนโลยีล่าสุดของ Reactjs,
          Redux, React Routing, Next.js, Babel, Webpack และอื่นๆ
        </p>
        <h4 className="text-success">Res &amp; Caf</h4>
      </div>
      <Footer company="Developed with Mind" email="contact@devwithmind.com" />
    </div>
  );
};

export default About;
