import projects from "~/components/projects.js";

export const useProjectOpen = () => {
    return useState('projectOpen', () => projects[0])
}

export const useModalActive = () => {
    return useState('modalActive', () => false)
}