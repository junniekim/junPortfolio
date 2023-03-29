import { Component } from '@angular/core';
import { Experience } from 'src/app/model/experience-model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences: Array<Experience> = [
    {
      id: 1,
      title: 'Junior Developer',
      duration: 'Jan 9 2023 - Present',
      location: 'Sitek Solutions',
      description: 'My firstJob',
    },
    {
      id: 2,
      title: 'Undergraduate Research Associate',
      duration: 'Aug 2022 - Dec 2022',
      location: 'STEM excellence at Eastern Kentucky University',
      description:
        'At the center for STEM excellence at Eastern Kentucky University, I had a chance to work as a student researcher. I collaborated with computer science students as well as physics students to assist research for a physics professor. My main responsibility was to provide the team communication between FPGAs (Field Programmable Gate Arrays) and the computers.',
    },
    {
      id: 3,
      title: 'Computer Science Tutor',
      picture: '/assets/img/TA.png',
      duration: 'Aug  2022 – Dec 2022',
      location: 'Eastern Kentucky University',
      description:
        'At Eastern Kentucky University, I also worked as a tutor at Computer Science Informational Technology Tutoring Center. I offered tutoring for all computer science classes I have taken. The classes that I tutored most commonly were Java programming and database classes. This was a very rewarding job as I was getting lots of positive feedback from students that their grades have gone up dramatically after coming to my tutoring.',
    },
    {
      id: 4,
      title: 'Computer Science Teaching Assistant',
      picture: '/assets/img/Tutoring.png',
      duration: 'Jan 2022 - Dec 2022',
      location: 'Eastern Kentucky University',
      description:
        'At Eastern Kentucky University, I had a chance to work as a teaching assistant for CSC 195. It is an intro class for discrete structures, which is a core computer science class for freshmen. I led more than 40 students to successfully finish the course. My duties include designing labs, grading labs and homework, and tutoring students on an individual basis. I was able to review/retain my knowledge on this topic throughout this experience, and I enhanced my communication skills by constantly teaching/tutoring students.',
    },
    {
      id: 5,
      title: 'Lead Tutor/Mentor',
      picture: '/assets/img/SSC.jpg',
      duration: 'Jan 9 2023 - Present',
      location: 'Student Success Center at Eastern Kentucky University',
      description:
        "Working at the Student Success Center at Eastern Kentucky University was such a valuable experience. I acquired so many priceless skills through this job. My duties included providing tutoring for not only computer science, but also all classes that I have taken. I was also assigned some students who were not doing well, and I provided them with weekly mentoring throughout a semester; I have brought up my mentee's GPA and overall performance by a significant amount. I also led a workshop not only for students but also for my coworkers. Each workshop had about 5-20 attendees. On top of that, I was responsible for logging/changing/reporting my coworkers' shift coverage and course coverage using Excel. This job gave me good leadership skills, communication skills, and Excel skills.",
    },
    {
      id: 6,
      title: 'Alumni Engagement Student Liaison',
      picture: '/assets/img/alumJob.JPG',
      duration: 'Mar 2022 – Jul 2022',
      location: 'Eastern Kentucky University',
      description:
        'I had an opportunity to work with a wonderful team at International Alumni Association at Eastern Kentucky University. My duties include managing/updating web content on the Alumni websites, such as changing dates for alumni events like the Homecoming game. I also managed the EKU alumni database by updating and retrieving requested information for the alumni. Sometimes I would go to the event scene and assist in setting up the events, cameras, and welcoming people The picture above was taken at the Cincinnati Zoo.',
    },
    {
      id: 7,
      title: 'Educational Technology Assistant',
      duration: 'Summer 2021',
      location: 'Eastern Kentucky University',
      description:
        'This position was an extension of the Lead Guru Position. I was embedded into a summer program that is designed to help those who want to get a head-start on their freshman year. My duty was to ensure that those students have the necessary software installed on their computer, and ensure that students know how to navigate the educational technologies such as Blackboard.',
    },
    {
      id: 8,
      title: 'IT Geek ',
      duration: 'Oct 2020 – Nov 2021',
      location: 'Eastern Kentucky University',
      description:
        'he first on-campus job I had at Eastern Kentucky University is EKU IT Geek. This is the place I learned customer service skills, communication skills, and the ability to work in a team setting. I had quite a few duties for this job, and I acquired a lot of good skills from the duties. For example, my duties included renting electronic devices, software troubleshooting, networking troubleshooting, hardware troubleshooting, and taking professional portrait pictures. I learned so many different hardwar&software skills from this experience, but the most important thing I learned from this position is being responsible for the job I have and being professional as it was my first job ever.',
    },
  ];
}

// export interface Project {
//   id: number;
//   picture?: string;
//   title: string;
//   description: string;
//   duration: string;
//   Location: string;
// }
