import { useState } from 'react'

function EducationalExperience({hasSchool, setHasSchool, schoolName, setSchoolName, degree, setDegree, schoolStartDate, setSchoolStartDate, schoolEndDate, setSchoolEndDate, schoolLocation, setSchoolLocation}) {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setHasSchool(!hasSchool);
        setSchoolName('');
        setDegree('');
        setSchoolStartDate('');
        setSchoolEndDate('');
        setSchoolLocation('');
        setShowForm(!showForm);
    }

    return (
        <>
            <div id="educational-experience-form" className="form">

                <h1>Educational Experience</h1>

                {showForm && (
                    <>
                    <label htmlFor="school-name">School name:
                    <input 
                        id="school-name"
                        type="text"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                    /></label>
    
                    <label htmlFor="degree">Degree:
                    <input 
                        id="degree"
                        type="text"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                    /></label>
    
                    <label htmlFor="school-start-date">Start date:
                    <input 
                        id="school-start-date"
                        type="text"
                        value={schoolStartDate}
                        onChange={(e) => setSchoolStartDate(e.target.value)}
                    /></label>
    
                    <label htmlFor="school-end-date">End date:
                    <input 
                        id="school-end-date"
                        type="text"
                        value={schoolEndDate}
                        onChange={(e) => setSchoolEndDate(e.target.value)}
                    /></label>
    
                    <label htmlFor="school-location">Location:
                    <input 
                        id="school-location"
                        type="text"
                        value={schoolLocation}
                        onChange={(e) => setSchoolLocation(e.target.value)}
                    /></label>
                    </>
                )}

                <button onClick={toggleForm}>{!showForm ? "+ Add" : "Delete"}</button>

            </div>
        </>
    )
}

export default EducationalExperience
