import { useState } from 'react'

function Resume(props) {
  return (
    <>
        <div className="resume" >

            <div id="personal-information">
              <h1>{props.fullName}</h1>
              <p>{props.address}</p>
              <p>{props.phone}</p>
              <p>{props.email}</p>
            </div>

            <div id="educational-experience">
              <h2>{(props.hasSchool) ? "Educational Experience" : ""}</h2>
              <h3>{props.schoolName}
                <p>{props.schoolStartDate} {(props.schoolStartDate && props.schoolEndDate) ? '-' : ''} {props.schoolEndDate}</p>
              </h3>
              <h4>{props.degree}</h4>
              <p>{props.schoolLocation}</p>
            </div>

            <div id="practical-experience">
              <h2>{(props.hasCompany) ? "Practical Experience" : ""}</h2>

              <h3>{props.companyName}
                <p>{props.companyStartDate} {(props.companyStartDate && props.companyEndDate) ? '-' : ''} {props.companyEndDate}</p>
              </h3>
              <h4>{props.position}</h4>
              <p>{props.companyLocation}</p>
              <p>{props.positionDescription}</p>
            </div>

            {/*Conditional, if there are experiences to show, then show the header, if there are no experiences to show, then dont show header for both relevant and educational experience*/}
        </div>
    </>
  )
}

export default Resume
