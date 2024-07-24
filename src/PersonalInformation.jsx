export default function PersonalInformation({person, setPerson}) {
    return (
        <>
            <div id="personal-information-form" className="form">
                <h1>Personal Information</h1>

                <label htmlFor="first-name">First name:
                <input 
                    id="first-name"
                    type="text"
                    value={person.firstName}
                    onChange={(e) => setPerson({...person, firstName: e.target.value})}
                /></label>

                <label htmlFor="last-name">Last name:
                <input 
                    id="last-name"
                    type="text"
                    value={person.lastName}
                    onChange={(e) => setPerson({...person, lastName: e.target.value})}
                /></label>

                <label htmlFor="address">Address:
                <input 
                    id="address"
                    type="text"
                    value={person.address}
                    onChange={(e) => setPerson({...person, address: e.target.value})}
                /></label>

                <label htmlFor="phone">Phone number:
                <input 
                    id="phone"
                    type="text"
                    value={person.phone}
                    onChange={(e) => setPerson({...person, phone: e.target.value})}
                /></label>

                <label htmlFor="email">Email address:
                <input 
                    id="email"
                    type="email"
                    value={person.email}
                    onChange={(e) => setPerson({...person, email: e.target.value})}
                /></label>

            </div>
        </>
    )
}