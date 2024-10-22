import { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_d9fw6bo",
        "template_ms41ok9",
        formData,
        "qiflrocz0ILREp7YJ"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  return (
    <>
      <div>
        If you'd like to work with me or discuss anything Tech, feel free to get
        in touch!
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 mt-5 margin-x-10  ">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-1/2 p-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ContactMe;
