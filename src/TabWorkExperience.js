import React from 'react';

const TabWorkExperience = () => {
  return (
    <div>
      <h2>Work Experience</h2>
      <div className="experience">
        <h3>Network Intern</h3>
        <p>Bell · Internship</p>
        <p>May 2023 - Present</p>
        <p>Mississauga, Ontario, Canada · Hybrid</p>
      </div>
      <div className="experience">
        <h3>Leadership Development Assistant</h3>
        <p>Leadership Lab · Contract Part-time</p>
        <p>Sep 2022 - Apr 2023</p>
        <p>Toronto, Ontario, Canada</p>
        <ul>
          <li>Support planning of 2023 CanStudyUS program through promotion to community organization and education institutions across Canada</li>
          <li>Deliver Fall 2023 Orientation Week activities including designing key events showcasing the RLL's work to incoming students</li>
          <li>Connect with Ryerson Student Life to deepen relationships and further collaboration in planning and events during the school year.</li>
          <li>Help with registration and administration of existing leadership programs such as providing tech support on Zoom events, sending confirmation emails to participants, and tracking attendance</li>
          <li>Develop connections with incoming student leadership teams including presidents of student societies, unions, and groups and sharing the work of the Leadership Lab</li>
          <li>Attend bi-weekly Leadership Development team meetings to review activities, share challenges, and support team</li>
        </ul>
      </div>
      <div className="experience">
        <h3>Student Intern</h3>
        <p>Celestica · Internship</p>
        <p>May 2021 - Aug 2022</p>
        <p>Toronto, Ontario, Canada</p>
        <ul>
          <li>Created relational database models and dashboards in Microsoft Power BI with the use of DAX and M Query programming languages as well as Oracle SQL Query</li>
          <li>Developing various process mining reports using Celonis. Streaming real-life data from the shop floor and broadcasting live metrics using Azure Streaming Analytics and PowerBI</li>
          <li>Analytics Consulting Services & Database Management</li>
          <li>Identify and assess/evaluate technology opportunities</li>
          <li>Identify opportunities to reduce costs and increase value of investments</li>
          <li>Mapping process flows</li>
          <li>Setup and monitor automated data feeds into hubs of historical data</li>
          <li>Manage client and stakeholder relationships</li>
        </ul>
      </div>

      {/* New Work Experience */}
      <div className="experience">
        <h3>Ryerson University Career & Co-op Centre</h3>
        <p>Co-op Program Assistant</p>
        <p>May 2020 - Apr 2021</p>
        <p>Toronto, Ontario, Canada</p>
        <ul>
          <li>Collaborated with students and employers to book site visits through Doodle and Google Calendar and email</li>
          <li>Gathered information on COVID impact on Co-op Students.</li>
          <li>Supported the development of content for Co-op prep courses through the creation of PowerPoint as well as other required material.</li>
          <li>Support professional staff with research, coordination data collection, and administration duties, including posting co-op jobs, updating student records, preparing statistical reports and researching work opportunities and labour market trends</li>
        </ul>
      </div>
      <div className="experience">
        <h3>Ryerson University Career & Co-op Centre</h3>
        <p>Campus Engagement Ambassador</p>
        <p>Sep 2019 - May 2020 </p>
        <p>Toronto, Ontario, Canada</p>
        <ul>
          <li>Contacted professors through professional emails to schedule class presentations</li>
          <li>Interacted with over 100 students to promote the career center to increase student involvement in events and ensure students are career-ready upon graduation</li>
          <li>Marketed the career and co-op center through Facebook promotions and emails to the student body, ensuring increased numbers in events</li>
        </ul>
      </div>
      <div className="experience">
        <h3>Walmart</h3>
        <p>Cashier</p>
        <p>Dec 2017 - Jun 2018 </p>
        <p>Toronto, Ontario, Canada</p>
        <ul>
          <li>Assumed a part-time position to strengthen my communication skills and gain customer service experience</li>
          <li>Assisted customers to find products, check prices, and checkout items at register</li>
          <li>Handled money and learned how to operate the cash registers</li>
          <li>Completed Customer Service Training</li>
        </ul>
      </div>
    </div>
  );
};

export default TabWorkExperience;
