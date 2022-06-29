import {Module} from "../shared/models/module.model";
import {persons} from "./person.data";
import {places} from "./place.data";

const modules: Module[] = [
  {
    id: 1,
    title: "Workshop",
    field: "Développement",
    dateStart: "27/06/2022",
    dateEnd: "01/07/2022",
    status: "En cours",
    summary: "Workshop Tech",
    teacher: persons[0],
    students: [
      persons[0],
      persons[1],
      persons[2],
      persons[3],
      persons[4],
      persons[5],
      persons[6],
      persons[7],
      persons[8],
      persons[9],
      persons[10],
    ],
    comment: "Cours d'algorithmie",
    place: places[0],
    image: 'https://korben.info/app/uploads/2018/12/codes-coding-computer-270366.jpg'
  },
  {
    id: 2,
    title: "Workshop",
    field: "Développement",
    dateStart: "27/06/2022",
    dateEnd: "01/07/2022",
    status: "Clôturé",
    summary: "Workshop Tech",
    teacher: persons[0],
    students: [
      persons[0],
    ],
    comment: "Cours d'algorithmie",
    place: places[0],
    image: 'https://korben.info/app/uploads/2018/12/codes-coding-computer-270366.jpg'
  },
  {
    id: 3,
    title: "Workshop",
    field: "Développement",
    dateStart: "27/06/2022",
    dateEnd: "01/07/2022",
    status: "À venir",
    summary: "Workshop Tech",
    teacher: persons[0],
    students: [
      persons[0],
    ],
    comment: "Cours d'algorithmie",
    place: places[0],
    image: 'https://korben.info/app/uploads/2018/12/codes-coding-computer-270366.jpg'
  },
  {
    id: 4,
    title: "Workshop",
    field: "Développement",
    dateStart: "27/06/2022",
    dateEnd: "01/07/2022",
    status: "En cours",
    summary: "Workshop Tech",
    teacher: persons[0],
    students: [
      persons[0],
    ],
    comment: "Cours d'algorithmie",
    place: places[0],
    image: 'https://korben.info/app/uploads/2018/12/codes-coding-computer-270366.jpg'
  }
]

export { modules };
