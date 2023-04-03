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
      picture: '/assets/img/developing.jpg',
      location: 'Sitek Solutions',
      description:
        'Starting my senior year in college, I started an internship at Sitek Solutions as a junior developer. I work with some admirable and intelligent co-workers, and I learn something new from them every day. This is where I learned and developed a strong understanding of not only frameworks like angular but also collaboration tools like GitHub. A lot of my personal projects were inspired by the skills that I learned here. Most importantly, I developed further communication skills and teamwork by working together with other developers to complete projects. For example, when I do frontend development using endpoints provided by the backend developers, we would constantly communicate about necessary endpoints and implementations. I am learning tons of necessary technical skills and soft skills as a developer who works in a team setting, and each day I am becoming a more competent and experienced developer in this job. ',
    },
    {
      id: 4,
      title: 'Computer Science Teaching Assistant',
      picture: '/assets/img/Tutoring.png',
      duration: 'Jan 2022 - Dec 2022',
      location: 'Eastern Kentucky University',
      description:
        'After taking a discrete structure, the professor recruited me as a teaching assistant and allowed me to lead a discrete structure lab. I led more than 40 students to successfully finish the course. My duties include designing labs, grading labs and homework, and tutoring students on an individual basis. I was able to retain and apply my knowledge on this topic throughout this experience, and I enhanced my communication skills by teaching/tutoring students.',
    },
    {
      id: 5,
      title: 'Lead Tutor/Mentor',
      picture: '/assets/img/SSC.jpg',
      duration: 'Jan 9 2023 - Present',
      location: 'Student Success Center at EKU',
      description:
        "Working at the Student Success Center at Eastern Kentucky University was such a valuable experience. I acquired so many priceless skills through this job. My duties included providing tutoring for not only computer science but also all of the classes that I have taken. I was also assigned to computer science students who were academically struggling, and I provided them with weekly mentoring throughout the semester; I have brought up my mentee's GPA and overall performance by a significant amount. I also led a workshop not only for students but also for my coworkers. Each workshop had about 5-20 attendees. On top of that, I was responsible for logging/changing/reporting my coworkers' shift coverage and course coverage using Excel. This job gave me good leadership skills, communication skills, and Excel skills.",
    },
    {
      id: 3,
      title: 'Computer Science Tutor',
      picture: '/assets/img/TA.png',
      duration: 'Aug  2022 – Dec 2022',
      location: 'Eastern Kentucky University',
      description:
        'I worked as a tutor at Computer Science Informational Technology Tutoring Center. I offered tutoring for all computer science classes I have taken including Java programming, database, algorithms, and data structure. This was a very rewarding job as I was getting lots of positive feedback from students that their grades have gone up dramatically after coming to my tutoring. I was also happy to meet and connect with my peers at school. ',
    },

    {
      id: 6,
      title: 'Alumni Engagement Student Liaison',
      picture: '/assets/img/alumJob.JPG',
      duration: 'Mar 2022 – Jul 2022',
      location: 'Eastern Kentucky University',
      description:
        'I had an opportunity to work with a wonderful team at International Alumni Association. My duties include managing/updating web content on the Alumni websites, such as changing dates for alumni events like Homecoming games. I also managed the EKU alumni database to retrieve requested information for the alumni using a pre-built web application. Sometimes I would go to the event scene and assist in setting up the events, cameras, and welcoming people The picture above was taken at the alumni event at Cincinnati Zoo.',
    },
    {
      id: 7,
      title: 'Educational Technology Assistant',
      duration: 'Summer 2021',
      picture: '/assets/img/moshelp.jpg',
      location: 'Eastern Kentucky University',
      description:
        'I was embedded into a summer program that is designed to help those who want to get a head start on their freshman year. My duty was to ensure that those students have the necessary software installed on their computers and ensure that students know how to navigate educational technologies such as Blackboard.',
    },
    {
      id: 8,
      title: 'IT Geek ',
      picture: '/assets/img/geeks.PNG',
      duration: 'Oct 2020 – Nov 2021',
      location: 'Eastern Kentucky University',
      description:
        'This is the first job I ever had in my life. This is where I learned basic customer service skills, communication skills, and teamwork. I had quite a few duties for this job, and I acquired a lot of good skills from them. For example, my duties included renting electronic devices, software troubleshooting, networking troubleshooting, hardware troubleshooting, and taking professional portrait pictures. I gained so much knowledge on both hardware and software skills from this experience. The part I liked about this job was that each team member gets a chance to lead a workshop based on their skills. I had multiple workshops on hardware and operating systems. I was also part of the tech team, and we put a document together on how to utilize 3-D printers. ',
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
