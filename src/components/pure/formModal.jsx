import React from 'react'
import PropTypes from 'prop-types'
import Contact from '../../models/contact.class'

function FormModal ({aceptar,cancelar,contact = new Contact()}) {

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
      <input type="text" id='nombre' className='text-zinc-900' />

      <label htmlFor="nombre">Apellido</label>
      <input type="text" id='nombre' className='text-zinc-900' />

      <label htmlFor="nombre">Correo Electronico</label>
      <input type="text" id='nombre' className='text-zinc-900' />

      <div className='flex gap-2 mt-12 mr-4 mb-3 self-end'>
      <button className='p-2 border rounded-lg'>Aceptar</button>
      <button onClick={cancelar} className='p-2 border rounded-lg'>Cancelar</button>
      </div>

      </div>
    </div>
  )
}

FormModal.propTypes = {
  aceptar: PropTypes.func,
  cancelar: PropTypes.func.isRequired,
  contact: PropTypes.instanceOf(Contact)
}

export default FormModal
