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
        'In 2019, I obtained a Microsoft Office Specialist certification. This certification certifies my Word, Powerpoint, and Excel skills.',
    },
    {
      id: 2,
      year: '2022',
      from: 'US Federal Aviation Administration',
      title:
        'Federal Aviation Administration - Unmanned Aircraft General Remote Pilot Certification',
      description:
        'I have passed the Part 107 test, and I am a certified small unmanned aircraft pilot. In other words, I am certified to fly small drones within the United States.',
    },
    {
      id: 3,
      from: 'Eeastern Kentucky University',
      year: '2022',
      title:
        'College Reading & Learning Association - International Tutor Training Program Certification',
      description:
        'I have obtained the tutor certification by working as a Lead Guru. I have completed multiple training and tutored more than 100 hours to get the certification.',
    },
  ];
}
