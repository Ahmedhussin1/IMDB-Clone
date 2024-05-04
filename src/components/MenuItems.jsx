import React from 'react'
import Link from 'next/link'
function MenuItems({title,address,Icon}) {
  return (
    <Link href={address} className='hover:text-amber-50'>
        <Icon className='text-2xl sm:hidden'/>
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItems