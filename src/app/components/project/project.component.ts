import { Component } from '@angular/core';
import { Project } from 'src/app/model/project-model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  projects: Array<Project> = [
    {
      id: 1,
      title: "Sijun Kim's E-Portfolio",
      picture: '/assets/img/websiteShowCase.PNG',
      tools: 'HTML/CSS, Typescript, Angular, Bootstrap, Visual Studio Code',
      description:
        'This website is the very first program that I have written outside of my school projects. The purpose of this project is to create an online portfolio, so I have a place to virtually keep track of my progress. It took me 6-7 days to complete the website, and 2-3 days to fill out the information. I learned and applied basic HTML, CSS, and Tpyescript. Also, I got more familiar with Visual Studio, and I can install necessary extensions as needed. I also had a chance to implement a third-party service, Formspree, on my Contact Me page. This website is currently being updated as I earn new achievements.',
    },
    {
      id: 2,
      tools:
        'Public API, HTML/CSS, Typescript, Angular, Bootstrap, Visual Studio Code',
      title: 'PokeAPI Project',
      picture: '/assets/img/pokemonShowCase.PNG',
      description:
        'This project can be found on my Github, named "PokeApiFinal". The purpose of this project is to learn and demonstrate using public API. The project took about 12 hours. I spent the first hour designing my website, about 2-3 hours learning about implementation, and about 8 hours of coding and debugging. I used typescript, HTML, CSS, angular, and VScode. I have developed much better JavaScript skills because the public API that I used required me to go into multiple layers of URLs, so I had to learn how to format variables and data into a required format. I also got more familiar with angular with its basic concepts such as building components and using directives.',
    },
    {
      id: 3,
      tools:
        'Reactive/Template Form, HTML/CSS, Typescript, Angular, Bootstrap, Visual Studio Code',
      title: 'Pizza Ordering Project',
      picture: '/assets/img/pizzaShowCase.PNG',
      description:
        'This project can be found on my Github, named "pizzaOrderWithAngular". The purpose of this project is to learn and demonstrate using different types of forms in Angular. This is an ongoing project, and I hope to get some good practice with Angular\'s reactive form as well as template form.',
    },
  ];
}
