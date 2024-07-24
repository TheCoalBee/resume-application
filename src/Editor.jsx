import { useState } from 'react'
import "./App.css";
import Resume from './Resume';
import PersonalInformation from './PersonalInformation';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';

function Person() {
  this.firstName = "";
  this.lastName = "";
  this.address;
  this.phone;
  this.email;
}

function Education() {
  this.hasSchool = false;
  this.name;
  this.degree;
  this.startDate;
  this.endDate;
  this.location;
}

function Practical() {
  this.hasCompany = false;
  this.name;
  this.position;
  this.startDate;
  this.endDate;
  this.location;
  this.desc;
}

export default function Editor() {
  const [person, setPerson] = useState(new Person());
  const [education, setEducation] = useState(new Education());
  const [practical, setPractical] = useState(new Practical());
    
  return (
    <>
      <div className="editor">

        <PersonalInformation
          person={person}
          setPerson={setPerson}
        />

        <EducationalExperience 
          education={education}
          setEducation={setEducation}
        />

        <PracticalExperience 
          practical={practical}
          setPractical={setPractical}
        />
      </div>

      <Resume 
        person={person}
        education={education}
        practical={practical}
      />
    </>
  )
}