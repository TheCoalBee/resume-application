import { useState } from 'react'

function PersonalInformation({firstName, setFirstName, lastName, setLastName, address, setAddress, phone, setPhone, email, setEmail}) {

    return (
        <>
            <div id="personal-information-form" className="form">

                <h1>Personal Information</h1>

                <label htmlFor="first-name">First name:
                <input 
                    id="first-name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                /></label>

                <label htmlFor="last-name">Last name:
                <input 
                    id="last-name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                /></label>

                <label htmlFor="address">Address:
                <input 
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                /></label>

                <label htmlFor="phone">Phone number:
                <input 
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                /></label>

                <label htmlFor="email">Email address:
                <input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /></label>

            </div>
        </>
    )
}

export default PersonalInformation
