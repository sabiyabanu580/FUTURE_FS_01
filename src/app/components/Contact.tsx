import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // later you can send to backend here
    console.log(formData);

    toast.success("Message sent successfully!");

    // reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 text-center bg-gray-50">
      <h2 className="text-3xl font-bold">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 space-y-4 bg-white p-8 rounded-xl shadow"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}