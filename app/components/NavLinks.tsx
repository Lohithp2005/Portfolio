import React from 'react'
import Link from 'next/link'

const navLinks = [
    { href: '/', title: 'Home' },
    { href: '#techstack', title: 'TechStack' },
    { href: '#projects', title: 'Projects' },
    { href: '#about', title: 'About me' },
    { href: '#contact', title: 'Contact' },
]
const NavLinks = () => {
    return (
        <ul className="text-slate-50/70 flex flex-col p-2  items-center justify-center gap-y-5   md:flex md:flex-row md:space-x-15 md:text-xl ">

            {navLinks.map((link) => (
                <li key={link.href} className="border-b md:border-none">
                    <Link href={link.href}>
                        {link.title}
                    </Link>
                </li>
            ))
            }
        </ul >

    )
}

export default NavLinks
