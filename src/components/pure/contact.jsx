import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Contact from '../../models/contact.class'

function ContactComponent ({ propContact, deleteContact, editContact }) {
  const [connected, SetConnected] = useState(propContact.connected)
  const [img, setImg] = useState(propContact.img)

  useEffect(() => {
    
    if(!propContact.img) { 
      propContact.img = `https://ui-avatars.com/api/?name=${propContact.name}+${propContact.surname}`
      setImg(propContact.img)
    }
    
    propContact.connected = !propContact.connected
  }, [connected])



  return (
    <>
      {/* <hr className="bg-slate-200 w-1/2 self-center first:hidden" /> */}
      <li className='flex py-4 px-2  hover:bg-zinc-700 hover:rounded-lg group/li'>
        <picture className='h-10 w-10 rounded-xl overflow-hidden relative'>
          <img
            className='object-cover w-full h-full select-none'
            src={img}
            alt='imagen del contacto'
          />
        </picture>

        <span
          onClick={() => SetConnected(!connected)}
          className='relative flex h-3 w-3 right-2 -top-1 cursor-pointer'
        >
          {connected ? (
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
          ) : (
            ''
          )}
          <span
            className={`relative inline-flex rounded-full h-3 w-3 ${
              connected ? 'bg-green-500' : 'bg-red-600'
            }`}
          ></span>
        </span>

        <div className='ml-3 overflow-hidden'>
          <p className='text-sm font-medium text-zinc-50 capitalize'>
            {`${propContact.name} ${propContact.surname}`}
          </p>
          <p className='text-sm text-zinc-400 truncate'>{propContact.email}</p>
        </div>

        <div className='flex flex-1 justify-end pr-3 items-center invisible group-hover/li:visible'>
          <span 
            onClick={() => editContact(propContact)}
            className='material-symbols-outlined p-1 text-zinc-500 hover:text-zinc-300 hover:cursor-pointer select-none'
          >
            edit_square
          </span>

          <span
            onClick={() => deleteContact(propContact)}
            className='material-symbols-outlined opacity-50 text-red-300 mt-1 p-1 hover:opacity-90 hover:text-red-500 hover:cursor-pointer rounded-lg select-none'
          >
            delete
          </span>
        </div>
      </li>
    </>
  )
}

ContactComponent.propTypes = {
  propContact: PropTypes.instanceOf(Contact).isRequired,
  deleteContact: PropTypes.func,
  editContact: PropTypes.func
}

export default ContactComponent
