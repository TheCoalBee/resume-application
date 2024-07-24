function Resume({person, education, practical}) {
  return (
    <>
        <div className="resume" >

            <div id="personal-information">
              <h1>{person.firstName + " " + person.lastName}</h1>
              <p>{person.address}</p>
              <p>{person.phone}</p>
              <p>{person.email}</p>
            </div>
            
            {education.hasSchool && (
              <div id="educational-experience">
              <h2>{(education.hasSchool) ? "Educational Experience" : ""}</h2>
              <h3>{education.name}
                <p>{education.startDate} {(education.startDate && education.endDate) ? '-' : ''} {education.endDate}</p>
              </h3>
              <h4>{education.degree}</h4>
              <p>{education.location}</p>
            </div>
            )}

            {practical.hasCompany && (
              <div id="practical-experience">
              <h2>{(practical.hasCompany) ? "Practical Experience" : ""}</h2>

              <h3>{practical.name}
                <p>{practical.startDate} {(practical.startDate && practical.endDate) ? '-' : ''} {practical.endDate}</p>
              </h3>
              <h4>{practical.position}</h4>
              <p>{practical.location}</p>
              <p>{practical.desc}</p>
            </div>
            )}
        </div>
    </>
  )
}

export default Resume
