import Link from 'next/link'
import React from 'react'

// component for link
const Links = ({ name, path, fun, currentPath }) => {
    return (
        <Link href={path} onClick={fun} className={`hover:bg-gray-200 py-3 px-5 flex flex-row items-center justify-between ${currentPath === path ? "text-red-700" : ""}`}>
            <span>{name}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M9 18l6-6-6-6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Link>
    )
}

export default Links