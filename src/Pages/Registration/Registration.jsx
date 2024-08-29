import React,{ useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import Alert from '../../Components/Alerts/Alert'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function  Registration() {
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [ name, setName] = useState('')
    const [ confirmPassword, setConfirmPassword] = useState('')

    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()
        if (email.trim().length < 6 || email.trim().length >= 32) {
            setError(true)
            const errorMessage = "L'Email doit etre comprise entre 06 et 32 caracteres"
            toast.error(errorMessage);
            return
        }
        if (password.trim().length < 6 || password.trim().length >= 32) {
            setError(true)
            const errorMessage = "Le mot de passe doit etre comprise entre 06 et 32 caracteres"
            toast.error(errorMessage);
            return
        }
        if (confirmPassword !== password) {
            setError(true)
            const errorMessage = "Les deux mot de passe ne son pas conforme"
            toast.error(errorMessage);
            return
        }

        localStorage.setItem("email", email)

        navigate("/otp-code")
    }
    return (
    <div>
                <ToastContainer stacked />

        <h1>Inscrition</h1>
        <form onSubmit={handelSubmit}>
                <p>Renseigner vos imformation de connexion pour vous inscrire</p>
                <label></label>
                {/* <Input
                    label={'Nom utilisateur'}
                    reference={'name'}
                    type={'text'} 
                    value={name} 
                    placeHolder={'Saisir votre nom d\'utilisateur ici...'}
                    onChange={ (e) => {
                        setName(e.target.value)
                    } }
                />
                <div>{name}</div> */}
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
                <Input
                    label={'Confirmer votre mot de passe '}
                    reference={'confirmPassword'}
                    type={'password'} 
                    value={confirmPassword} 
                    placeHolder={'Confirmer votre mot de passe ici...'}
                    onChange={ (e) => {
                        setConfirmPassword(e.target.value)
                    } }
                />
                {/* <div>{confirmPassword}</div> */}
                
                <br /> 
                
                <div>
                    <Button type={'submit'} text={'Soumettre'}/><br />
                    <Button type={'reset'} text={'Annuler'}/>
                </div>
                <div>
                    <Link to={'/'}>Connexion</Link>
                    
                </div>
            </form>
    </div>
    )
}
