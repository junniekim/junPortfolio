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
      id: 1,
      title: "President's List/Dean's List",
      year: '2020-2023',
      from: 'Eastern Kentucky University',
      description:
        "I got on the president's list twice and the dean's list three times for achieving a high GPA. Each requires a 4.0 GPA and a 3.75 GPA. They are reflections of the hard work and effort that I put into my education, and I am very proud of these achievements.",
    },
    {
      id: 2,
      year: '2021-2023',
      from: 'Eastern Kentucky University',
      title: 'Dr. Rodney Gross Minority Scholarship',
      description:
        'The Dr. Rodney Gross Diversity Scholarship program at Eastern Kentucky University recognizes students from minority groups and provides scholarships based on a holistic evaluation of academic achievement, school events engagement, and a personal essay. I got rewarded 4,000 dollars annually for excelling in college as well as participating in diverse groups such as the Internation Students Association.',
    },
    {
      id: 3,
      from: 'Eeastern Kentucky University',
      year: '2021-2023',
      title: 'EKU International Alumni Association Endowed Scholarship',
      description:
        'The Alumni Scholarship was awarded for my academic excellence, active participation in extracurricular activities, and being an Alumni Legacy Student. The evaluation included an essay on my vision, goals, and values.',
    },
    {
      id: 4,
      year: '2020-2023',
      from: 'Eastern Kentucky University',
      title: 'Chairman Scholarship',
      description:
        'Chairman scholarship was awarded for my ACT score and high school GPA. This scholarship provides 6,000 dollars annually.',
    },
    {
      id: 5,
      from: 'Eeastern Kentucky University',
      year: '2020',
      title: 'Study Strong Award',
      description:
        'Study strong Scholarship was awarded for successfully completing a college course at EKU as a high schooler. I took MAT 112, a trigonometry class, as a high school senior and finished the course with an A.',
    },
  ];
}
