import React, { useState } from 'react';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css'; // Import the CSS file containing the styles
import TabAbout from './TabAbout';
import TabWorkExperience from './TabWorkExperience';
import TabVolunteer from './TabVolunteer';
import TabContact from './TabContact';
import TabProjects from './TabProjects';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event) => {
    const index = parseInt(event.target.value);
    setActiveTab(index);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Farwa Mubasher</h1>
        <div className="sidebar">
          <select className="dropdown" value={activeTab} onChange={handleTabChange}>
            <option value={0}>About</option>
            <option value={1}>Work Experience</option>
            <option value={2}>Projects</option>
            <option value={3}>Volunteer</option>
            <option value={4}>Contact</option>
          </select>
        </div>
        <div className="content">
          <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
            <TabPanel>
              <TabAbout />
            </TabPanel>
            <TabPanel>
              <TabWorkExperience />
            </TabPanel>
            <TabPanel>
              <TabProjects />
            </TabPanel>
            <TabPanel>
              <TabVolunteer />
            </TabPanel>
            <TabPanel>
              <TabContact />
            </TabPanel>
          </Tabs>
        </div>
        <footer>© 2023 My Personal Website. All rights reserved.</footer>
      </div>
    </div>
  );
};

export default App;
