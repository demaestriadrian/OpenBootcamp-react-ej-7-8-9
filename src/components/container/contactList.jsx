import React, { useEffect, useState } from 'react'
import Contact from '../../models/contact.class'
import dataContactArray from '../../data/contactList.data'
import ContactComponent from '../pure/contact'


function ContactList () {

  const [contactList, setContacts] = useState(dataContactArray.map(data => new Contact(data)))

  const deleteContact = contact =>{
    setContacts(contactList.filter(filterContact => filterContact !== contact ))
  }

  // useEffect(()=>window.contactList = contactList,[contactList])

  return (
    <div className='bg-zinc-800 rounded-lg w-[400px] p-3 mx-auto'>
      <h1 className=' text-3xl text-center mb-10'> Contactos </h1>
      <ul>
        {contactList.map((contact) => (
          <ContactComponent key={contact.id} propContact={contact} deleteContact = {deleteContact} />
        ))}
      </ul>
    </div>
  )
}

export default ContactList
