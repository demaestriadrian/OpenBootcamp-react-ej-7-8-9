import React, { useEffect, useState } from 'react'
import Contact from '../../models/contact.class'
import dataContactArray from '../../data/contactList.data'
import ContactComponent from '../pure/contact'

function ContactList() {
  const [contactList, setContacts] = useState(
    dataContactArray.map(data => new Contact(data))
  )

  const deleteContact = contact => {
    setContacts(contactList.filter(filterContact => filterContact !== contact))
  }

  // useEffect(()=>window.contactList = contactList,[contactList])

  return (
    <div className='bg-zinc-800 rounded-lg w-[400px] max-h-full p-3 relative flex flex-col items-center'>
      <h1 className=' text-3xl text-center mb-10 select-none'> Contactos </h1>
      {contactList.length !== 0 ? (
        <>
          <span className='material-symbols-outlined absolute  p-2 top-3 right-3 rounded-lg cursor-pointer opacity-50 hover:bg-zinc-700 hover:text-green-400 select-none'>
            person_add
          </span>

          <ul className='self-stretch max-h-[80vh] overflow-y-auto'>
            {contactList.map(contact => (
              <ContactComponent
                key={contact.id}
                propContact={contact}
                deleteContact={deleteContact}
              />
            ))}
          </ul>
        </>
      ) : (
        <>
          <p className='text-center opacity-50'>Aún no hay contactos</p>
          <div className='flex gap-2 mt-2 px-4 py-1 rounded-lg cursor-pointer opacity-80 text-green-400 hover:bg-green-900 hover:text-current select-none'>
            <span className='material-symbols-outlined'>person_add</span>
            <h2>Crear Contacto</h2>
          </div>
        </>
      )}
    </div>
  )
}

export default ContactList
