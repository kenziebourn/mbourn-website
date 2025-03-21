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
              <span id="McKenzie">Experience</span>
              </h1>
              <div className="flex justify-center items-center">
                <Timeline lineColor={'#a45aff'}>
                  <TimelineItem
                    key="001"
                    dateText="March 2024 – Present"
                    dateInnerStyle={{ background: '#a45aff', color: '#000' }}
                    bodyContainerStyle={{
                      background: '#FAF9F6',
                      padding: '20px',
                      borderRadius: '8px',
                      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <h3 className="text-purple1">Medallia</h3>
                    <h4 className="text-purple2">Site Reliability Engineer I</h4>
                  </TimelineItem>
                  <TimelineItem
                    key="001"
                    dateText="June 2021 – Dec 2024"
                    dateInnerStyle={{ background: '#bf8bff', color: '#000' }}
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
                    key="001"
                    dateText="June 2024 – Sep 2024"
                    dateInnerStyle={{ background: '#bf8bff', color: '#000' }}
                    bodyContainerStyle={{
                      background: '#FAF9F6',
                      padding: '20px',
                      borderRadius: '8px',
                      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <h3 className="text-purple1">Trimble</h3>
                    <h4 className="text-purple2">Software Reliability Engineer</h4>
                    <p>
                      As an SRE intern, I worked on implementing a monitoring solution for the usage of certain infrastructure across the division's Kubernetes clusters. I worked specifically with GH workflows, Terraform, New Relic and Google webhooks. 
                    </p>
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