// Dependencies
import { v4 as uuidv4 } from 'uuid';
// Internals
import {
  apptly,
  apptlyApi,
  hangman,
} from './images';


export default [
  {
    id: uuidv4(),
    link: 'https://github.com/bradl3yC/apptly',
    name: 'Apptly',
    image: apptly,
    description: 'A patient management platform for Home Healthcare Providers',
    tag: 'React',
  },
  {
    id: uuidv4(),
    link: 'https://github.com/bradl3yC/apptly-api',
    name: 'Apptly Backend',
    image: apptlyApi,
    description: 'A Ruby-on-Rails API for the Apptly Frontend',
    tag: 'Rails',
  },
  {
    id: uuidv4(),
    link: 'https://github.com/bradl3yC/8bit-hangman',
    name: '8Bit Hangman',
    image: hangman,
    description: 'Hangman game with Mario Theme written in Vanilla JS',
    tag: 'JavaScript',
  },
];
