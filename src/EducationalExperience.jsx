import { useState } from 'react'

function EducationalExperience({education, setEducation}) {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setEducation({hasSchool: !education.hasSchool, name: "", degree: "", startDate: "", endDate: "", location: ""})
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
                        value={education.name}
                        onChange={(e) => setEducation({...education, name: e.target.value})}
                    /></label>
    
                    <label htmlFor="degree">Degree:
                    <input 
                        id="degree"
                        type="text"
                        value={education.degree}
                        onChange={(e) => setEducation({...education, degree: e.target.value})}
                    /></label>
    
                    <label htmlFor="school-start-date">Start date:
                    <input 
                        id="school-start-date"
                        type="text"
                        value={education.startDate}
                        onChange={(e) => setEducation({...education, startDate: e.target.value})}
                    /></label>
    
                    <label htmlFor="school-end-date">End date:
                    <input 
                        id="school-end-date"
                        type="text"
                        value={education.endDate}
                        onChange={(e) => setEducation({...education, endDate: e.target.value})}
                    /></label>
    
                    <label htmlFor="school-location">Location:
                    <input 
                        id="school-location"
                        type="text"
                        value={education.location}
                        onChange={(e) => setEducation({...education, location: e.target.value})}
                    /></label>
                    </>
                )}

                <button onClick={toggleForm}>{!showForm ? "+ Add" : "Delete"}</button>

            </div>
        </>
    )
}

export default EducationalExperience
