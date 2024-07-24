import { useState } from 'react'

function PracticalExperience({practical, setPractical}) {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setPractical({hasCompany: !practical.hasCompany, name: "", position: "", startDate: "", endDate: "", location: "", desc: ""})
        setShowForm(!showForm);
    }

    return (
        <>
            <div id="practical-experience-form" className="form">

                <h1>Practical Experience</h1>

                {showForm && (
                    <>
                    <label htmlFor="company-name">Company name:
                    <input 
                        id="company-name"
                        type="text"
                        value={practical.name}
                        onChange={(e) => setPractical({...practical, name: e.target.value})}
                    /></label>
    
                    <label htmlFor="position">Position:
                    <input 
                        id="position"
                        type="text"
                        value={practical.position}
                        onChange={(e) => setPractical({...practical, position: e.target.value})}
                    /></label>
    
                    <label htmlFor="company-start-date">Start date:
                    <input 
                        id="company-start-date"
                        type="text"
                        value={practical.startDate}
                        onChange={(e) => setPractical({...practical, startDate: e.target.value})}
                    /></label>
    
                    <label htmlFor="company-end-date">End date:
                    <input 
                        id="company-end-date"
                        type="text"
                        value={practical.endDate}
                        onChange={(e) => setPractical({...practical, endDate: e.target.value})}
                    /></label>
    
                    <label htmlFor="company-location">Location:
                    <input 
                        id="company-location"
                        type="text"
                        value={practical.location}
                        onChange={(e) => setPractical({...practical, location: e.target.value})}
                    /></label>

                    <label htmlFor="position-description">Position description:
                    <input 
                        id="position-description"
                        type="text"
                        value={practical.desc}
                        onChange={(e) => setPractical({...practical, desc: e.target.value})}
                    /></label>
                    </>
                )}

                <button onClick={toggleForm}>{!showForm ? "+ Add" : "Delete"}</button>

            </div>
        </>
    )
}

export default PracticalExperience
