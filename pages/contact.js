import "./contact.css";
const Contact = () => {
  return (
      <div className="contact-container">
        <h1>Contact Shri Vishnu Engineering College for Women</h1>
        <div className="address">
          <h2>Address</h2>
          <p>
            Shri Vishnu Engineering College for Women,
            Vishnupur, Bhimavaram - 534202,
            West Godavari District,
            Andhra Pradesh, India
          </p>
        </div>
        <div className="phone">
          <h2>Phone</h2>
          <p>+91 8816 224848, +91 8816 224849</p>
        </div>
        <div className="email">
          <h2>Email</h2>
          <p>info@svecw.edu.in</p>
        </div>
        <div className="website">
          <h2>Website</h2>
          <p><a href="http://www.svecw.edu.in/">http://www.svecw.edu.in/</a></p>
        </div>
      </div>
  );
};

export default Contact;
