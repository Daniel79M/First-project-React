import React,{ useState } from 'react'
import './App.css'
import Button from './Components/Button/Button'
import Input from './Components/Input/Input'
import { Link } from 'react-router-dom'

export default function App() {

    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    


    return (
        <div>
            <h1>Connexion</h1>
            <form>
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
                <div>{email}</div>
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
                <div>{password}</div>
                <br /> 
                
                <div>
                    <Button type={'submit'} text={'Soumettre'}/><br />
                    <Button type={'reset'} text={'Annuler'}/>
                </div>
                
                <div>
                    <Link to={'/registration'}>Inscription</Link>
                </div>
            </form>
        </div>

    )
}
