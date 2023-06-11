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

  const aceptar = e =>{
    // e.preventDefault()
    contact.name = nameRef.current.value
    contact.surname = surnameRef.current.value
    contact.email = emailRef.current.value
    aceptarFormulario(contact)
  }

  const handleFormKeys = e =>{
    e.ctrlKey 
      ? e.key === "Enter" && cancelar()
      : e.key === 'Enter' && aceptar()
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
      <form onKeyDown={handleFormKeys} onSubmit={aceptar} onClick={e => e.stopPropagation()} className={`
        bg-zinc-800 rounded-lg
        w-[400px] max-h-full min-h-[200px]
        p-8 relative drop-shadow-md
        flex flex-col gap-2`}
      >

        <div className='flex flex-col gap-2'>
          <label htmlFor="nombre">Nombre</label>
          <input ref={nameRef} tabIndex={1} autoFocus className='capitalize lg:w-[70%] bg-zinc-700 py-1 px-3 rounded-lg' type="text" id='nombre' />
        </div>
        <div className=' flex flex-col gap-2'>
          <label htmlFor="apellido">Apellido</label>
          <input ref={surnameRef} tabIndex={2} className='capitalize lg:w-[70%] bg-zinc-700 py-1 px-3 rounded-lg' type="text" id='apellido'/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email">Email</label>
          <input ref={emailRef} tabIndex={3} className='lg:w-[70%] bg-zinc-700 py-1 px-3 rounded-lg' type="text" id='email'/>
        </div>

        {/* Botones //////////////////////////// */}
        <div className='flex flex-row-reverse gap-2 mt-8 self-end'>
        <button onClick={cancelar} tabIndex={5} className='p-2 border rounded-lg shadow-lg'>Cancelar</button>
        <button tabIndex={4} className='p-2 border rounded-lg shadow-lg'>Aceptar</button>
        
        </div>

      </form>
    </div>
  )
}

FormModal.propTypes = {
  aceptarFormulario: PropTypes.func,
  cancelar: PropTypes.func.isRequired,
  contact: PropTypes.instanceOf(Contact)
}

export default FormModal
