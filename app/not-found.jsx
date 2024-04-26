import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='container h-screen flex flex-col gap-5 justify-center items-center'>
        <h2>Não encontrado</h2>        
        <p>Não foi possível encontrar o recurso solicitado</p>
        <Link href="/">Voltar</Link>
    </div>
  )
}

export default NotFound