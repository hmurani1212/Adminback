import React, { useState } from 'react';

const Contact = () => {
  const [form1, setForm] = useState(true);
  const [submit1, setSubmit] = useState(false);

  const submitHandle = () => {
    // Check if all required fields are filled
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');

    if (nameInput && emailInput && messageTextarea) {
      if (nameInput.value && emailInput.value && messageTextarea.value) {
        setForm(false);
        setSubmit(true);
      } else {
        alert('Please fill in all required fields.');
      }
    }
  };

  const handleForm = () => {
    setForm(true);
    setSubmit(false);
  };

  return (
    <>
      {form1 && (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
          <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
              <p className='text-gray-300 py-4'>Send me a message</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
            <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center' onClick={submitHandle}>
              Let's Collaborate
            </button>
          </div>
        </div>
      )}

      {submit1 && (
        <div name='contact' className='w-full h-screen text-white bg-[#0a192f] flex justify-center items-center p-4'>
          <div>Thanks For Contacting Us. We will Contact With You Soon</div>
          <p className="underline cursor-pointer mx-5" onClick={handleForm}>
            Submit Another Form
          </p>
        </div>
      )}
    </>
  );
};

export default Contact;
