export default defineAppConfig({
    ui: {
      slideover: {
        background: 'bg-neutral-900 dark:bg-neutral-900',
        overlay: {
          background: 'bg-neutral-800/75 dark:bg-neutral-800/75',
        },
        width: 'w-80 max-w-80',
      },
      button:{
          variant:{
            outline: 'hover:bg-cyan-950 text-cyan-400',
            solid: 'bg-cyan-400 text-gray-900',
            ghost: 'text-neutral-100 dark:text-neutral-100 hover:bg-transparent dark:hover:bg-transparent',
          }
      },
      modal:{
        overlay:{
          background:'bg-neutral-800/75 dark:bg-neutral-800/75'
        },
        background:'bg-neutral-900 dark:bg-neutral-900'
      },
      selectMenu:{
        background: 'bg-neutral-800 dark:bg-neutral-800',
        ring: 'ring-1 ring-neutral-700 dark:ring-neutral-700',
        option:{
          color: 'text-neutral-100 dark:text-neutral-100',
          active: 'bg-neutral-900 dark:bg-neutral-900',
          selectedIcon: {
            base: 'h-5 w-5 text-neutral-100 dark:text-neutral-100 flex-shrink-0',
          },
        }
      }
      
    }
})