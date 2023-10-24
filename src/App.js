import BioData from "./components/BioData";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import SkillSection from "./components/SkillSection";
import InterestSection from "./components/InterestSection";
import {persons} from './data/persons'

function App() {
	return (
		<div className="App">
      {persons.map(person => (
        <BioData>
          <PersonalInfo
            name={person.name}
            age={person.age}
            gender={person.gender}
            email={person.email}
            phone={person.phone}
            address={person.address}
            country={person.country}
          />
          <SkillSection
            skills={person.skills}
          />
          <InterestSection 
            interests={person.interests}
          />
      </BioData>
      ))}
		</div>
	);
}

export default App;
