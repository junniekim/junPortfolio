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
      tools: 'Angular, Bootstrap, VS Code, Git',
      link: '',
      duration: '13 Hours',
      description:
        'The purpose of this project is to create an online portfolio, so I have a place to virtually keep track of my progress and achievements in my career. My resume and contacts can be found on this web application. Completing this project, I got a lot more comfortable with creating basic Angular applications, and I can install necessary extensions as needed on Visual Studio. I also had a chance to implement a third-party service on the “Contact Me” page. This website is actively being updated everytime I earn a new achievement. ',
    },
    {
      id: 2,
      duration: '16 Hours',
      link: 'https://poke-api-final.vercel.app/',
      tools: 'Public API, Angular, Bootstrap, VS Code, Git',
      title: 'PokeAPI Project',
      picture: '/assets/img/pokemonShowCase.PNG',
      description:
        'The purpose of this project is to learn how to connect public API with my angular program. I developed a better understanding of what and why to use APIs, and I was able to apply the new knowledge to create this web application. I got a lot more confident with formatting an object in a way that the API wants, and retrieving wanted data using API with Typescript.  ',
    },
    {
      id: 3,
      duration: '8 Hours',
      link: 'https://sort-visualizer-eight.vercel.app/',
      tools: 'Vite, VS code, Git, ,Tailwind, React',
      title: 'Sort Visualizer',
      picture: '/assets/img/sort.png',
      description:
        'The purpose of this project is to visualize different sorting and observe each stage of sorting with bar graph.              Link: sort-visualizer-eight.vercel.app',
    },
    {
      id: 4,
      duration: '5 Hours',
      link: '',
      tools: 'Java',
      title: 'Genetic Algorithm on Traveling Salesperson Problem',
      picture: '/assets/img/genetic.png',
      description:
        'The purpose of this project is to learn how genetic algorithm works. I had a chance to implement reproduction of each generation through order crossover and mutation. The image above shows the result based on 100,000th generation.',
    },

    {
      id: 5,
      duration: '4 Hours',
      link: 'https://js-games-pi.vercel.app/index.html',
      tools: 'Vanilla Javascript, Bootstrap, VS Code, Git',
      title: 'Vanilla Javascript Gamepack',
      picture: '/assets/img/snapshot.PNG',
      description:
        'This project allows users to play a classic hangman game, memory game, and tic-tac-toe. Each game has different features such as easy/hard mode, small hints, cheating mode.',
    },
  ];
}
