import { Component } from '@angular/core';
import { Award } from 'src/app/model/award-model';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css'],
})
export class AwardComponent {
  awards: Array<Award> = [
    {
      id: 7,
      title: 'KSEA Undergraduate Scholarship',
      year: 'Spring 2023',
      from: 'Korean-American Scientists Engineers Association',
      description:
        'The KSEA evauated not only my acedemic achievements but also my potential as a future leader. I was recognized among the pool of talented individuals for my academic excellence and leadership.',
    },
    {
      id: 6,
      title: "President's List",
      year: 'Spring 2021 & 2023 Fall 2022',
      from: 'Eastern Kentucky University',
      description:
        'I did not settle with the dean’s list. I got on the President’s list by finishing a semester with a perfect GPA. These achievements are representations of my work ethic and effort, and I am proud to earn such achievements.',
    },
    {
      id: 1,
      title: "Dean's List",
      year: 'Fall 2020 & 2021, Spring 2022',
      from: 'Eastern Kentucky University',
      description:
        "I got on the Dean's list three times for academic excellence. To be on the Dean’s list, one must successfully finish a semester with at least a 3.75 or higher GPA. They are reflections of the hard work and dedication that I put into my education, and I am very proud of these achievements. Good grades also indicate that I will possess a full value of a computer science degree once I graduate.",
    },

    {
      id: 2,
      year: '2021 Fall - Present',
      from: 'Eastern Kentucky University',
      title: 'Dr. Rodney Gross Minority Scholarship',
      description:
        'Rodney Gross Diversity scholarship was rewarded based on a holistic evaluation of academic achievement, school events engagement, and a personal essay. They recognized my academic excellence and participation in making Eastern Kentucky University a more inclusive place to study.',
    },
    {
      id: 3,
      from: 'Eeastern Kentucky University',
      year: '2021 Fall - Present',
      title: 'EKU International Alumni Association Endowed Scholarship',
      description:
        'The Alumni Scholarship was awarded based on a holistic evaluation of academic excellence, and participation in extracurricular activities. They recognized and awarded my potential based on my visions, goals, and values.',
    },
    {
      id: 4,
      year: '2020 Fall- Present',
      from: 'Eastern Kentucky University',
      title: 'Chairman Scholarship',
      description:
        'I earned the chairman scholarship EKU based on my ACT score and high school GPA being over 3.75.  ',
    },
    {
      id: 5,
      from: 'Eeastern Kentucky University',
      year: '2020 Fall',
      title: 'Study Strong Award',
      description:
        'Study strong Scholarship was awarded for successfully completing a college course at EKU as a high school student. I took a trigonometry class, in 12th grade, and finished the course with an A.',
    },
  ];
}
