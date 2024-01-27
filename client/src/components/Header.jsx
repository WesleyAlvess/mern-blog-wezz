import { Navbar, NavbarCollapse, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'

import { AiOutlineSearch } from "react-icons/ai"
import { FaMoon } from "react-icons/fa6"

function Header() {
    const path = useLocation().pathname

    return (
        <Navbar className='border-b-2' >
            <Link to='/' className='self-center whitespace-nowrap 
            text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-2 bg-gradient-to-r from-indigo-500
                via-purple-500 to-pink-600 rounded-lg text-white'>Wezz's</span>
                Blog
            </Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='Pesquisar...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                />
            </form>
            <button className='w-12 h-10 lg:hidden border border-gray-500 rounded-full 
            flex items-center justify-center'>
                <AiOutlineSearch />
            </button>
            <div className='flex gap-2 md:order-2'>
                <button className='w-12 h-10  border border-gray-300 rounded-full 
                flex items-center justify-center' >
                    <FaMoon />
                </button>
                <Link to='/sign-in'>
                    <button className='w-18 h-10  border border-blue-500 rounded-md  
                    flex items-center justify-center text-white text-sm bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-5 py-3 font-medium transition duration-200 hover:shadow-md hover:shadow-[#4481EB]/50 '>
                        Sign In
                    </button>
                </Link>
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to="/">
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={ path === "/about" } as={'div'}>
                    <Link to="/about">
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={ path === "/projects" } as={'div'}>
                    <Link to="/projects">
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
