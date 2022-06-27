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
    ],
    comment: "Cours d'algorithmie",
    place: places[0],
  }
]

export { modules };
