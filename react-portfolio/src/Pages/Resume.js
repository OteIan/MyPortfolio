import React from 'react';
// import { saveAs } from 'file-saver';

const Resume = () => {
  // const handleDownload = () => {
  //   saveAs('/path/to/cv.pdf', 'MayaNelson_CV.pdf');
  // };

  return (
    <section className="resume-section">
      <h2 className="section-title">Resume</h2>
      {/* <button className="download-btn" onClick={handleDownload}>DOWNLOAD CV</button> */}
      <div className="experience">
        <h3>Experience</h3>
        <div className="job">
          <h4>2015 - Present</h4>
          <h5>JOB POSITION</h5>
          <p>Company Name</p>
          <p>Company Location</p>
          <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
          <p>I'm a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
