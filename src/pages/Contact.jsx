import React from "react";

function ContactForm() {
  return (
    <div className="container flex-col justify-center items-center b mt-10 max-w-md  mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-white mt-16">Contact Us</h1>

      <div className="bg-gray-700 p-6 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block  font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input rounded-md shadow-sm w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input rounded-md shadow-sm w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="form-textarea rounded-md shadow-sm w-full"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
