import projects from "~/components/projects.js";

export const useProjectOpen = () => {
    return useState('projectOpen', () => projects[projects.length-1])
}