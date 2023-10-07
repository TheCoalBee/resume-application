import { useState } from 'react'

function PracticalExperience({hasCompany, setHasCompany, companyName, setCompanyName, position, setPosition, companyStartDate, setCompanyStartDate, companyEndDate, setCompanyEndDate, companyLocation, setCompanyLocation, positionDescription, setPositionDescription}) {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setHasCompany(!hasCompany);
        setCompanyName('');
        setPosition('');
        setCompanyStartDate('');
        setCompanyEndDate('');
        setCompanyLocation('');
        setPositionDescription('');
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
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    /></label>
    
                    <label htmlFor="position">Position:
                    <input 
                        id="position"
                        type="text"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    /></label>
    
                    <label htmlFor="company-start-date">Start date:
                    <input 
                        id="company-start-date"
                        type="text"
                        value={companyStartDate}
                        onChange={(e) => setCompanyStartDate(e.target.value)}
                    /></label>
    
                    <label htmlFor="company-end-date">End date:
                    <input 
                        id="company-end-date"
                        type="text"
                        value={companyEndDate}
                        onChange={(e) => setCompanyEndDate(e.target.value)}
                    /></label>
    
                    <label htmlFor="company-location">Location:
                    <input 
                        id="company-location"
                        type="text"
                        value={companyLocation}
                        onChange={(e) => setCompanyLocation(e.target.value)}
                    /></label>

                    <label htmlFor="position-description">Position description:
                    <input 
                        id="position-description"
                        type="text"
                        value={positionDescription}
                        onChange={(e) => setPositionDescription(e.target.value)}
                    /></label>
                    </>
                )}

                <button onClick={toggleForm}>{!showForm ? "+ Add" : "Delete"}</button>

            </div>
        </>
    )
}

export default PracticalExperience
