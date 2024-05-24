
const items = [{
    itemNum: 0,
    name: "Personal Web",
    tech: ['Vue','Nuxt','CSS','JavaScript'],
    type: 'Personal',
    quickDesc: 'Web page to display projects and showcase my web creation skills.',
    longDesc: `I built this web page to create a nice format that displays my projects in a neat and good-looking format. I also 
    wanted to showcase my web creation skills, as well as get experience with Vue & Nuxt which I haven't worked with before.`,
    goTo: '',
    video: '',
    git: '',
  },
  {
    itemNum: 1,
    name: "Fitness Logger App",
    tech: ['Expo','React Native','JavaScript','Firestore', 'Firebase'],
    type: 'Personal',
    quickDesc: 'Mobile and web app that keeps track of and log fitness history in an intuitive and interactive way.',
    longDesc: `This app was made with React Native log workouts. I implemented firebase authentication to log in and used
    firestore to keep and retrieve a user's workouts. It has graph feautures to show growth, as well as calendar feautures
    to show exactly what you did everyday. It also has an intuitive UX and good looking UI that improves usability.`,
    goTo: 'https://fitnesslogger.ryankutella.com',
    video: '',
    git: 'https://github.com/ryankutella25/FitnessLogger2023',
  },
  {
    itemNum: 2,
    name: "Unity First Person Shooter",
    tech: ['C#','Unity','AI'],
    type: 'Personal',
    quickDesc: 'FPS game built inside unity\'s engine with fluid movement and AI enemies.',
    longDesc: `I wanted to get experience in game design so I used Unity's engine to build a FPS game.
    All movement, camera settings, enemy behavior, and physics is C# code. The AI enemies use a mixture of my
    code and Unity's neural networking to track and attack the player. Also, added advanced graphics and raytracing.`,
    goTo: '',
    video: '',
    git: '',
  },
  {
    itemNum: 3,
    name: "CS300 Project 1",
    tech: ['C'],
    type: 'School',
    quickDesc: 'This project was creating a Unix terminal using kernel commands.',
    longDesc: `This project was creating a Unix terminal using kernel commands. It was a good
    project to get used to using kernel commands and threads.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS300_Projects/tree/main/Project1',
  },
  {
    itemNum: 4,
    name: "CS300 Project 2",
    tech: ['C'],
    type: 'School',
    quickDesc: 'This project manages virtual pages and physical blocks using page tables.',
    longDesc: `This project manages virtual pages and physical blocks using page tables and also implements a least recently used cache to 
    decrease page faults.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS300_Projects/tree/main/Project2',
  },
  {
    itemNum: 5,
    name: "CS300 Project 3",
    tech: ['C'],
    type: 'School',
    quickDesc: 'This project uses mutex locks to prevent deadlock and race conditions caused by 2 threads accessing the same variable.',
    longDesc: `This project uses mutex locks to prevent deadlock and race conditions caused by 2 threads accessing the same variable.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS300_Projects/tree/main/Project3',
  },
  {
    itemNum: 6,
    name: "CS300 Project 4",
    tech: ['C'],
    type: 'School',
    quickDesc: 'This project has to use sleep and mutex locks to balance waiting time for a teachers office hours. ',
    longDesc: `This project has to use sleep and mutex locks to balance waiting time for a teachers office hours. One part
    uses semaphores and one part uses conditional variables.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS300_Projects/tree/main/Project4',
  },
  {
    itemNum: 7,
    name: "CS301 Assigments",
    tech: ['SQL', 'NoSQL', 'Java'],
    type: 'School',
    quickDesc: 'These assignments use SQL, NoSQL, and Java API\'s to access and edit databases.',
    longDesc: `These assignments use SQL, NoSQL, and Java API\'s to access and edit databases. 
    This consists of basic table creation to complex division selection.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS301_Assignments',
  },
  {
    itemNum: 8,
    name: "CS201 Project 1",
    tech: ['C++'],
    type: 'School',
    quickDesc: 'This project deals with Circular Dynamic Arrays.',
    longDesc: `This project covers the basics of adding, deleting, and selecting from
    a circular dynamic array. Every process uses the optimal time complexity possible, as 
    well as proper allocation and deallocation of memory.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS201_Projects/tree/main/CS201Part1',
  },
  {
    itemNum: 9,
    name: "CS201 Project 2",
    tech: ['C++'],
    type: 'School',
    quickDesc: 'This project deals with a red black tree, a method of balancing a binary tree',
    longDesc: `This project uses red and black nodes to balance a binary tree. Every node in the tree has a color
    (red or black) and there can not be 2 reds in a row and must be same number of blacks every path down the tree.
    This implementation goes over every insertion and deletion case and handles it accordingly.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS201_Projects/tree/main/CS201Part2',
  },
  {
    itemNum: 10,
    name: "CS201 Project 3",
    tech: ['C++'],
    type: 'School',
    quickDesc: 'This project deals with a basic heap, binomial heap, and fibonnaci heap.',
    longDesc: `This project is the implementation of a basic, binomial, and fibonnaci heap. The first part uses
    heapify to turn a regular array into a heap and then performs insert, delete, and selection. Then a binomial heap is
    made with insertions and balanced properly. Lastly, the same is done with a fibonnaci heap.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS201_Projects/tree/main/CS201Part3',
  },
  {
    itemNum: 11,
    name: "CS200 Group Project",
    tech: ['Java'],
    type: 'School',
    quickDesc: 'Create a full system (portals and storage) for a therapy organization.',
    longDesc: `This program consists of the UI and storage of every object in the therapy system. This includes 5 roles
    and the services provided. Providers can check members active status and input the services provided. At midnight every friday,
    or by managers request, reports will be generated for each member and provider.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS200_Project',
  },
  {
    itemNum: 12,
    name: "CS101 Project 1",
    tech: ['C++'],
    type: 'School',
    quickDesc: 'Take an input file of data transfer between sources and create more usable output',
    longDesc: `Given an input text file of the size of data tramsfered between 2 sources,
    I made a more readable output. This output stated all destinations and also the output size, input size
    and ratio between these 2 sizes for each source.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS101_Projects/tree/main/P1%20Leaf',
  },
  {
    itemNum: 13,
    name: "CS101 Project 2",
    tech: ['C++'],
    type: 'School',
    quickDesc: 'Given input file of strings or integers, implement quicksort and mergesort and store output.',
    longDesc: `Starting with an input file of strings or integers, implement either quicksort or mergesort based on input argument.
    This output is then stored in an output file. Quicksort is has an average O(n log n) time complexity but can be O(n^2) at worst. Mergesort is 
    O(n log n) for average and worst time complexity.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS101_Projects/tree/main/P2%20Sorts',
  },
  {
    itemNum: 14,
    name: "CS101 Project 3",
    tech: ['C++'],
    type: 'School',
    quickDesc: 'Stores a list of contact items using pointers and implements proper allocation and releasion of memory practices.',
    longDesc: `There is a pointer to first Contact item and in each Contact there is a pointer to first Info item. 
    This project implements proper deletion and addition practices with allocating and releasing memory.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS101_Projects/tree/main/P3_%20Contact%20List',
  },
  {
    itemNum: 15,
    name: "CS101 Project 4",
    tech: ['C++'],
    type: 'School',
    quickDesc: 'Uses Person objects and hashes to help quickly sort and search the objects.',
    longDesc: `Given a person with multiple attributes (string and integers) we then can store this information as hashed information.
    Using this hashed information we can achieve faster selection by just searching along the corresponding group in hash table and not having
    to check every person.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS101_Projects/tree/main/P4_%20Hash%20Tables%20and%20People',
  },
  {
    itemNum: 16,
    name: "CS101 Project 5",
    tech: ['C++'],
    type: 'School',
    quickDesc: 'This project works with binary trees and the generation, deletion, addition, and selection.',
    longDesc: `Given the inorder and levelorder need to generate proper corresponding tree.
    Also works with deletion, addition, and selection from the generated tree. This project
    also works with Huffman coding and decoding, an optimal prefix code that is commonly used for lossless data compression.`,
    goTo: '',
    video: '',
    git: 'https://github.com/ryankutella25/CS101_Projects/tree/main/P5_Huffman',
  },
]

export default items;