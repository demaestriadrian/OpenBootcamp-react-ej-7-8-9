import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Contact from '../../models/contact.class'

function FormModal ({aceptarFormulario,cancelar,contact = new Contact()}) {

  const nameRef = useRef()
  const surnameRef = useRef()
  const emailRef = useRef()

  useEffect(() => {
    console.log(contact);
    nameRef.current.value = contact.name
    surnameRef.current.value = contact.surname
    emailRef.current.value = contact.email
  },[])

  const aceptar = ()=>{
      contact.name = nameRef.current.value
      contact.surname = surnameRef.current.value
      contact.email = emailRef.current.value
      aceptarFormulario(contact)
  }
  
  return (
    <div
      className={`
      absolute top-0 left-0
      h-screen w-screen 
      z-999 backdrop-blur-md
      pt-3 pb-52 flex items-center justify-center
      `}
      onClick={cancelar}
    >
      <div onClick={e => e.stopPropagation()} className={`
        bg-zinc-800 rounded-lg
        w-[400px] max-h-full min-h-[200px]
        p-3 relative drop-shadow-md
        flex flex-col items-center`}
      >
      
      <label htmlFor="nombre">Nombre</label>
      <input ref={nameRef} type="text" id='nombre' className='text-zinc-900' />

      <label htmlFor="apellido">Apellido</label>
      <input ref={surnameRef}  type="text" id='apellido' className='text-zinc-900' />

      <label htmlFor="email">Correo Electronico</label>
      <input ref={emailRef}  type="text" id='email' className='text-zinc-900' />

      <div className='flex gap-2 mt-12 mr-4 mb-3 self-end'>
      <button onClick={aceptar} className='p-2 border rounded-lg'>Aceptar</button>
      <button onClick={cancelar} className='p-2 border rounded-lg'>Cancelar</button>
      </div>

      </div>
    </div>
  )
}

FormModal.propTypes = {
  aceptarFormulario: PropTypes.func,
  cancelar: PropTypes.func.isRequired,
  contact: PropTypes.instanceOf(Contact)
}

export default FormModal
