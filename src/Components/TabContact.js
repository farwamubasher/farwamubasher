import React from 'react';

const TabContact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>Feel free to get in touch with me.</p>
      <form action="https://formspree.io/f/{your_id}" method="POST">
        <input type="email" name="email" required />
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default TabContact;
