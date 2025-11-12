import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { ProjectType } from "../../../types";

dayjs.extend(localizedFormat);

type Props = {
  project: ProjectType;
};

const ProjectCard = ({ project }: Props) => (
  <div className="flex flex-col rounded-md shadow-md hover:shadow-xl transition-all p-4 h-full bg-white dark:bg-gray-800 border dark:border-gray-700">
    <h2 className="underline text-xl mb-2 font-semibold text-gray-900 dark:text-gray-100">
      <a
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-500 dark:hover:text-indigo-400"
      >
        {project.name}
      </a>
    </h2>
    <p className="mb-1 text-gray-700 dark:text-gray-300 line-clamp-4 break-words">
      {project.description}
    </p>
    <a
      href={project.homepage}
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-500 dark:text-indigo-400 mb-1 hover:text-indigo-600 dark:hover:text-indigo-300"
    >
      {project.homepage}
    </a>
    <div>
      <span className="italic text-sm text-gray-600 dark:text-gray-400">
        Last pushed at {dayjs(project.pushed_at).format("LLL")}
      </span>
    </div>
  </div>
);

export default ProjectCard;
