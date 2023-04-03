import { Component } from '@angular/core';
import { Certification } from 'src/app/model/certification-model';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css'],
})
export class CertificationComponent {
  certifications: Array<Certification> = [
    {
      id: 1,
      title: 'Microsoft Office Specialist Certification',
      year: '2019',
      from: 'Microsoft',
      description:
        'This certification certifies my Word, Powerpoint, and Excel skills. I am proficient in all three software, and I can utilize them to accomplish tasks without any issues. ',
    },
    {
      id: 2,
      year: '2022',
      from: 'US Federal Aviation Administration',
      title: 'Unmanned Aircraft General Remote Pilot Certification',
      description:
        'I have passed the Part 107 test, and I am a certified small unmanned aircraft pilot. In other words, I am certified to fly small drones within the border of the United States.',
    },
    {
      id: 3,
      from: 'College Reading & Learning Association',
      year: '2022',
      title: 'International Tutor Training Program Certification',
      description:
        'Working as a lead tutor at the Student Success center,  I have completed multiple training and tutored students in math and computer science for more than 100 hours. Based on these experiences, I earned this certification. ',
    },
  ];
}
