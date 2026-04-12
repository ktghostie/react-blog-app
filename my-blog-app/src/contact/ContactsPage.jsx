import React, { useState } from 'react'

function ContactsPage() {
const [formInput, setFormInput] = useState({
  name: '',
  email: '',
  message: '',
});
const submitForm = (e) => {
  e.preventDefault();
  console.log(formInput);
};
  return (
        <div className="blog-container">
            <form onSubmit={submitForm}>
              <input placeholder='Name' 
                value={formInput.name} 
                onChange={e => setFormInput({...formInput, name: e.target.value})}> 
              </input>
              <input placeholder='Email'
                value={formInput.email} 
                onChange={e => setFormInput({...formInput, email: e.target.value})}>
              </input>
              <textarea placeholder='Message'
                value={formInput.message} 
                onChange={e => setFormInput({...formInput, message: e.target.value})}
              />
              <button type='submit'>Submit</button>
            </form>
        </div>
  )
}

export default ContactsPage