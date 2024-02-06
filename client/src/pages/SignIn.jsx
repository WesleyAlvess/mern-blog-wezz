import { Link, useNavigate } from "react-router-dom"
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { useState } from "react";
import axios from 'axios'
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from 'react-redux'

function SignIn() {
    const [formData, setFormData] = useState({})
    //Redux
    const { errorMessage, loading, successMessage } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(signInStart())
        try {
            if (!formData.email || !formData.password) {
                dispatch(signInFailure());
            }
            const response = await axios.post('/api/auth/signin', formData);
            const data = response.data;

            if (data.success === true){
                dispatch(signInSuccess(data))
                navigate('/')
            }

        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                dispatch(signInFailure(err.response.data.message))
            } 
        }
    };

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
                        Este é um projeto de demonstração. Você pode logar com seu e-mail e senha
                        ou com o Google.
                    </p>
                </div>
                {/* right */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <Label value='Email' />
                            <TextInput
                                type="email"
                                placeholder="Email"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value='Senha' />
                            <TextInput
                                type="password"
                                placeholder="*********"
                                id="password"
                                onChange={handleChange}
                            />
                        </div>
                        <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading} >
                            {
                                loading ? (
                                    <>
                                        <Spinner size="sm" />
                                        <span className="pl-3">Loading...</span>
                                    </>
                                ) : "Entrar"
                            }
                        </Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Não tem uma conta?</span>
                        <Link to='/sign-up' className="text-blue-500">Criar nova conta</Link>
                    </div>
                    {
                        errorMessage && (
                            <Alert className="mt-5" color='failure'>
                                {errorMessage}
                            </Alert>
                        )
                    }
                    {
                        successMessage && (
                            <Alert className="mt-5" color='success'>
                                {successMessage}
                            </Alert>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SignIn
