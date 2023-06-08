import React from 'react'
import Contact from '../../models/contact.class'
import dataContactArray from '../../data/contactList.data'
import ContactComponent from '../pure/contact'

function ContactList () {
  const contactList = dataContactArray.map(data => new Contact(data))
  return (
    <div className='bg-zinc-800 rounded-lg w-[400px] p-3 mx-auto'>
      <h1 className=' text-3xl text-center mb-10'> Contactos </h1>
      <ul>
        {contactList.map((contact, index) => (
          <ContactComponent key={index} propContact={contact} />
        ))}
      </ul>
    </div>
  )
}

export default ContactList
