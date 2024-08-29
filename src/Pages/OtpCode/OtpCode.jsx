import React, { useState } from 'react'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'

export default function OtpCode() {

    const [otpCode, setOtpCode] = useState('')

    return (
        <div>
            <p>Un code de confirmation a été envoyé dans votre boite mail ({localStorage.getItem('email')}). Vérifiez-le et saisisser-le </p>
            <form>
                <Input 
                    type={'text'}
                    label={'OTP Code'}
                    value={otpCode}
                    reference={'otp'}
                    placeHolder={'Saisisser le code ici ...'}
                    onChange={ (e) => {setOtpCode(e.target.value)}}
                />
                <Button text={'Soumettre'} type={'submit'}/> 
            </form>
        </div>
    )
}
