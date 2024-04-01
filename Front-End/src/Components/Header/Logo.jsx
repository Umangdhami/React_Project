import React from 'react'
import logoImg from '../../images/logo-july-dark-1-20220704-030304.svg'

const Logo = () => {
    return (
        <div className="logo-box w-1/2 lg:w-full">
            <div className="w-full">
                <img src={logoImg} alt="" />
            </div>
        </div>
    )
}

export default Logo
