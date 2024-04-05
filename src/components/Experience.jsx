import React from "react";
import "../index.css";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Skills = () => {

      return (
        <div
          name="experience"
          className="w-full min-h-screen flex"
        >
          <div className="max-w-screen-lg p-14">
            <div>
              <h1 className="text-6xl font-bold">
                Experience
              </h1>
              <div className="flex justify-center items-center">
                <Timeline lineColor={'#a45aff'}>
                  <TimelineItem
                    key="001"
                    dateText="June 2021 – Present"
                    dateInnerStyle={{ background: '#a45aff', color: '#000' }}
                    bodyContainerStyle={{
                      background: '#FAF9F6',
                      padding: '20px',
                      borderRadius: '8px',
                      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <h3 className="text-purple1">Oregon State University</h3>
                    <h4 className="text-purple2">BS Science, Computer Science</h4>
                  </TimelineItem>
                  <TimelineItem
                    key="002"
                    dateText="June 2023 – Sep 2023"
                    dateInnerStyle={{ background: '#bf8bff', color: '#000' }}
                    bodyContainerStyle={{
                      background: '#FAF9F6',
                      padding: '20px',
                      borderRadius: '8px',
                      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <h3 className="text-purple1">Discogs</h3>
                    <h4 className="text-purple2">Backend Engineer Intern</h4>
                    <p>
                      My first internship, I joined Discogs, a music database and marketplace. I actively participated in an Agile software development team 
                      where I contributed to the Discogs API and played a key role in optimizing data querying and retrieval processes.
                    </p>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Skills;