import { Footer } from "flowbite-react"
import { Link } from 'react-router-dom'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

function FooterCom() {
    return (
        <Footer container className="border border-t-8 border-teal-500">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link to='/' className=' text-2xl font-bold dark:text-white'>
                            <span className='px-4 py-.9 bg-gradient-to-r from-indigo-500
                        via-purple-500 to-pink-600 rounded-xl text-white'>Wezz's</span>
                            Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="About" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                                    Outros Projetos
                                </Footer.Link>
                                <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                                    Wezz' Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://github.com/WesleyAlvess" target="_blank" rel="noopener noreferrer">
                                    Github
                                </Footer.Link>
                                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                                    Terms &amp; conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Wezz' blogs" year={new Date().getFullYear()} />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm: justify-center">
                        <Footer.Icon href="#" icon={BsLinkedin}/>
                        <Footer.Icon href="https://github.com/WesleyAlvess" icon={BsGithub}/>
                        <Footer.Icon href="https://www.linkedin.com/in/wesley-alves-pereira-27496920a/" icon={BsInstagram}/>
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterCom