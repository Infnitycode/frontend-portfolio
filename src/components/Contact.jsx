import React from "react";

const Contact = () => {
  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      const res = await fetch("https://portfoliobackend-edh1.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully! 🎉");
        e.target.reset();
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Server error! Please try later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-xl p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl shadow-xl border border-gray-700">
        
        <h2 className="text-4xl font-extrabold text-center mb-2">Contact Us</h2>
        <p className="text-center text-gray-400 mb-8">
          We'd love to hear from you. Fill out the form below!
        </p>

        {/* CONTACT FORM */}
        <form onSubmit={handleSubmit} className="grid gap-6">
          
          {/* Name */}
          <div className="grid gap-2">
            <label className="text-gray-300 text-sm">Name *</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:border-blue-500 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <label className="text-gray-300 text-sm">Email *</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:border-blue-500 outline-none"
              required
            />
          </div>

          {/* Message */}
          <div className="grid gap-2">
            <label className="text-gray-300 text-sm">Message *</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message"
              className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:border-blue-500 outline-none resize-none"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
