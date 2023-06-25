import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css'; // Import the CSS file containing the styles
import TabAbout from './TabAbout';
import TabWorkExperience from './TabWorkExperience';
import TabVolunteer from './TabVolunteer';
import TabContact from './TabContact';
import TabProjects from './TabProjects';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Farwa Mubasher</h1>
        <div className="sidebar">
          <Tabs className="tabs" selectedIndex={activeTab} onSelect={handleTabChange}>
            <TabList className="tab-list">
              <Tab className="tab">About</Tab>
              <Tab className="tab">Work Experience</Tab>
              <Tab className="tab">Projects</Tab>
              <Tab className="tab">Volunteer</Tab>
              <Tab className="tab">Contact</Tab>
            </TabList>
          </Tabs>
        </div>
        <div className="content">
          <Tabs className="tabs" selectedIndex={activeTab} onSelect={handleTabChange}>
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
