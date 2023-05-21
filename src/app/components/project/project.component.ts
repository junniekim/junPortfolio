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
      tools:
        'HTML/CSS, Typescript, Angular, Bootstrap, Visual Studio Code, GitHub',

      duration: '13 Hours',
      description:
        'The purpose of this project is to create an online portfolio, so I have a place to virtually keep track of my progress and achievements in my career. My resume and contacts can be found on this web application. Completing this project, I got a lot more comfortable with creating basic Angular applications, and I can install necessary extensions as needed on Visual Studio. I also had a chance to implement a third-party service on the “Contact Me” page. This website is actively being updated everytime I earn a new achievement. ',
    },
    {
      id: 2,
      duration: '16 Hours',
      tools:
        'Public API, HTML/CSS, Typescript, Angular, Bootstrap, Visual Studio Code, GitHub',
      title: 'PokeAPI Project',
      picture: '/assets/img/pokemonShowCase.PNG',
      description:
        'The purpose of this project is to learn how to connect public API with my angular program. I developed a better understanding of what and why to use APIs, and I was able to apply the new knowledge to create this web application. I got a lot more confident with formatting an object in a way that the API wants, and retrieving wanted data using API with Typescript.  ',
    },
    {
      id: 3,
      duration: '17 Hours',
      tools:
        'HTML/CSS, Typescript, Angular, Bootstrap, Visual Studio Code, GitHub',
      title: 'Pizza Ordering Project',
      picture: '/assets/img/pizzaShowCase.PNG',
      description:
        'The purpose of this project is to get more familiar with reactive forms and template forms in Angular. I learned and understood the difference between the two, and I applied what I learned into practice. I also had a chance to write directives to check the required formats in user input such as email address. ',
    },
    {
      id: 4,
      duration: '21 Hours',
      tools: 'HTML/CSS, Typescript, Angular, Bootstrap, Visual Studio, GitHub',
      title: 'Web Application at Work I ',
      picture: '/assets/img/work1.PNG',
      description:
        'This was the first prod-level web application that I made at work. Unlike my personal projects, this project had to be at the professional level, so I conducted lots of testing on it. I also had a chance to collaborate with backend developers: I got necessary end points from them and designed the web page with the provided endpoints. I also had a chance to use some angular components that my coworkers wrote. This was such a valuable experience as I learned how to better communicate and collaborate with team members to meet the goal.',
    },
    {
      id: 5,
      duration: '5 Hours',
      tools: 'Java, IntelliJ',
      title: 'Genetic Algorithm on Traveling Salesperson Problem',
      picture: '/assets/img/genetic.png',
      description:
        'The purpose of this project is to learn how genetic algorithm works. I had a chance to implement reproduction of each generation through order crossover and mutation. The image above shows the result based on 100,000th generation.',
    },
  ];
}
