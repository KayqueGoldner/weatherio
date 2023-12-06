'use client'
 
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,
}: {
  error: Error
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='grow mt-32 flex flex-col justify-start items-center'>
      <h1 className='text-6xl font-semibold'>Oops!</h1>
      <h3 className='mt-3 text-lg'>ALGO DEU ERRADO.</h3>
      <Link
        href="/"
        className='btn-border px-3 py-2 rounded-md mt-4'
      >
        Voltar para página inicial
      </Link>
    </div>
  )
}