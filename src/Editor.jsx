import { useState } from 'react'
import "./App.css";
import Resume from './Resume';
import PersonalInformation from './PersonalInformation';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';

function Editor() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = firstName + " " + lastName;
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [hasSchool, setHasSchool] = useState(false);
  const [schoolName, setSchoolName] = useState('');
  const [degree, setDegree] = useState('');
  const [schoolStartDate, setSchoolStartDate] = useState('');
  const [schoolEndDate, setSchoolEndDate] = useState('');
  const [schoolLocation, setSchoolLocation] = useState('');

  const [hasCompany, setHasCompany] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [companyStartDate, setCompanyStartDate] = useState('');
  const [companyEndDate, setCompanyEndDate] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [positionDescription, setPositionDescription] = useState('');
    
  return (
    <>
      <div className="editor">

        <PersonalInformation 
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          address={address}
          setAddress={setAddress}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
        />

        <EducationalExperience 
          hasSchool={hasSchool}
          setHasSchool={setHasSchool}
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          degree={degree}
          setDegree={setDegree}
          schoolStartDate={schoolStartDate}
          setSchoolStartDate={setSchoolStartDate}
          schoolEndDate={schoolEndDate}
          setSchoolEndDate={setSchoolEndDate}
          schoolLocation={schoolLocation}
          setSchoolLocation={setSchoolLocation}
        />

        <PracticalExperience 
          hasCompany={hasCompany}
          setHasCompany={setHasCompany}
          companyName={companyName}
          setCompanyName={setCompanyName}
          position={position}
          setPosition={setPosition}
          companyStartDate={companyStartDate}
          setCompanyStartDate={setCompanyStartDate}
          companyEndDate={companyEndDate}
          setCompanyEndDate={setCompanyEndDate}
          companyLocation={companyLocation}
          setCompanyLocation={setCompanyLocation}
          positionDescription={positionDescription}
          setPositionDescription={setPositionDescription}
        />
        
      </div>
      <Resume 
        fullName={fullName}
        address={address}
        phone={phone}
        email={email}

        hasSchool={hasSchool}
        schoolName={schoolName}
        degree={degree}
        schoolStartDate={schoolStartDate}
        schoolEndDate={schoolEndDate}
        schoolLocation={schoolLocation}

        hasCompany={hasCompany}
        companyName={companyName}
        position={position}
        companyStartDate={companyStartDate}
        companyEndDate={companyEndDate}
        companyLocation={companyLocation}
        positionDescription={positionDescription}
      />
    </>
  )
}

export default Editor
