import { Link } from "react-router-dom"
import { Button, Label, TextInput } from 'flowbite-react'

function SignUp() {
    return (
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                {/* left */}
                <div className="flex-1">
                    <Link to='/' className=' text-4xl font-bold dark:text-white'>
                        <span className='px-4 py-.9 bg-gradient-to-r from-indigo-500
                        via-purple-500 to-pink-600 rounded-xl text-white'>Wezz's</span>
                        Blog
                    </Link>
                    <p className="text-sm mt-5">
                        Este é um projeto de demonstração. Você pode se inscrever com seu e-mail e senha
                        ou com o Google.
                    </p>
                </div>
                {/* right */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4">
                        <div>
                            <Label value='Nome de usuário' />
                            <TextInput
                                type="text"
                                placeholder="Username"
                                id="username"
                            />
                        </div>
                        <div>
                            <Label value='Email' />
                            <TextInput
                                type="text"
                                placeholder="Email"
                                id="email"
                            />
                        </div>
                        <div>
                            <Label value='Senha' />
                            <TextInput
                                type="password"
                                placeholder="Password"
                                id="password"
                            />
                        </div>
                        <Button gradientDuoTone='purpleToPink' type="submit">Cadastre-se</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Já tem uma conta?</span>
                        <Link to='/sign-in' className="text-blue-500">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
