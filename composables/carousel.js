export const useCarousel = () => {
    return useState('use', () => 0)
}

export const usePaused = () => {
    return useState('pause', () => false)
}

export const useStop = () => {
    return useState('stop', () => false)
}
