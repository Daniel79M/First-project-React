import React,{ useState } from 'react'
import './App.css'
import Button from './Components/Button/Button'
import Input from './Components/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

export default function App() {

    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [ isLoading, setisLoading] = useState(false)
    const navigate = useNavigate()

    const handelSubmit = async (e)=>{
        e.preventDefault()
        setisLoading(true)

        const formData = new FormData();

        formData.set('email', email)
        formData.set('password', password)

        const response = await axios.post('http://127.0.0.1:8000/api/v1.0.0/login', formData)

        if (response.data.success) {
            toast.success(response.data.message)
            setisLoading(false)
            setTimeout(function() {
                navigate('/dashboard')
            },2000);

        }else{
            console.log(response.data);
            toast.error("email ou mot de passe incorrect")
            setisLoading(false)
            
        }
    };
    


    return (
        <div>
            <ToastContainer />

            <h1>Connexion</h1>
            <form onSubmit={handelSubmit}>
                <p>Renseigner vos imformation de connexion pour vous connectez</p>
                <label></label>
                <Input
                    label={'Email'}
                    reference={'reference'}
                    type={'email'} 
                    value={email} 
                    placeHolder={'Saisir l\'adresse e-mail ici...'} 
                    onChange={ (e) => {
                        setEmail(e.target.value)
                    } }
                />
                {/* <div>{email}</div> */}
                <Input
                    label={'Mot de passe'}
                    reference={'password'}
                    type={'password'} 
                    value={password} 
                    placeHolder={'Saisir votre mot de passe ici...'}
                    onChange={ (e) => {
                        setPassword(e.target.value)
                    } }
                />
                {/* <div>{password}</div> */}
                <br /> 
                
                <div>
                    <Button disabled={isLoading} type={'submit'} text={isLoading ? "chargement ..." : 'Soumettre'}/><br />
                    <Button type={'reset'} text={'Annuler'}/>
                </div>
                
                <div>
                    <Link to={'/registration'}>Inscription</Link>
                </div>
            </form>
        </div>

    )
}
