export type ProjectCategory = "Personal" | "School" | "Professional";

export type ProjectLinks = {
  live?: string;
  code?: string;
  video?: string;
};

type BaseProject = {
  itemNum: number;
  name: string;
  tech: string[];
  type: ProjectCategory;
  quickDesc: string;
  longDesc: string;
  links: ProjectLinks;
};

export type Project = BaseProject & {
  slug: string;
  featured: boolean;
  impact: string;
  role: string;
  dateRange: string;
  searchableText: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const featuredIds = new Set([1, 2, 11, 7]);

const baseProjects: BaseProject[] = [{
    itemNum: 0,
    name: "Personal Web",
    tech: ['Vue','Nuxt','CSS','JavaScript'],
    type: 'Personal',
    quickDesc: 'Web page to display projects and showcase my web creation skills.',
    longDesc: `I built this web page to create a nice format that displays my projects in a neat and good-looking format. I also 
    wanted to showcase my web creation skills, as well as get experience with Vue & Nuxt which I haven't worked with before.`,
    links: { live: undefined, code: undefined, video: undefined },
  },
  {
    itemNum: 1,
    name: "Fitness Logger App",
    tech: ['Expo','React Native','JavaScript','Firestore', 'Firebase'],
    type: 'Personal',
    quickDesc: 'Mobile and web app that keeps track of and log fitness history in an intuitive and interactive way.',
    longDesc: `This app was made with React Native log workouts. I implemented firebase authentication to log in and used
    firestore to keep and retrieve a user's workouts. It has graph features to show growth, as well as calendar features
    to show exactly what you did everyday. It also has an intuitive UX and good looking UI that improves usability.`,
    links: { live: 'https://fitnesslogger.ryankutella.com', code: 'https://github.com/ryankutella25/FitnessLogger2023', video: undefined },
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
    links: { live: undefined, code: undefined, video: undefined },
  },
  {
    itemNum: 3,
    name: "CS300 Project 1",
    tech: ['C'],
    type: 'School',
    quickDesc: 'This project was creating a Unix terminal using kernel commands.',
    longDesc: `This project was creating a Unix terminal using kernel commands. It was a good
    project to get used to using kernel commands and threads.`,
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS300_Projects/tree/main/Project1', video: undefined },
  },
  {
    itemNum: 4,
    name: "CS300 Project 2",
    tech: ['C'],
    type: 'School',
    quickDesc: 'This project manages virtual pages and physical blocks using page tables.',
    longDesc: `This project manages virtual pages and physical blocks using page tables and also implements a least recently used cache to 
    decrease page faults.`,
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS300_Projects/tree/main/Project2', video: undefined },
  },
  {
    itemNum: 5,
    name: "CS300 Project 3",
    tech: ['C'],
    type: 'School',
    quickDesc: 'This project uses mutex locks to prevent deadlock and race conditions caused by 2 threads accessing the same variable.',
    longDesc: `This project uses mutex locks to prevent deadlock and race conditions caused by 2 threads accessing the same variable.`,
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS300_Projects/tree/main/Project3', video: undefined },
  },
  {
    itemNum: 6,
    name: "CS300 Project 4",
    tech: ['C'],
    type: 'School',
    quickDesc: 'This project has to use sleep and mutex locks to balance waiting time for a teachers office hours. ',
    longDesc: `This project has to use sleep and mutex locks to balance waiting time for a teachers office hours. One part
    uses semaphores and one part uses conditional variables.`,
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS300_Projects/tree/main/Project4', video: undefined },
  },
  {
    itemNum: 7,
    name: "CS301 Assignments",
    tech: ['SQL', 'NoSQL', 'Java'],
    type: 'School',
    quickDesc: 'These assignments use SQL, NoSQL, and Java API\'s to access and edit databases.',
    longDesc: `These assignments use SQL, NoSQL, and Java API\'s to access and edit databases. 
    This consists of basic table creation to complex division selection.`,
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS301_Assignments', video: undefined },
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
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS201_Projects/tree/main/CS201Part1', video: undefined },
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
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS201_Projects/tree/main/CS201Part2', video: undefined },
  },
  {
    itemNum: 10,
    name: "CS201 Project 3",
    tech: ['C++'],
    type: 'School',
    quickDesc: 'This project deals with a basic heap, binomial heap, and fibonacci heap.',
    longDesc: `This project is the implementation of a basic, binomial, and fibonacci heap. The first part uses
    heapify to turn a regular array into a heap and then performs insert, delete, and selection. Then a binomial heap is
    made with insertions and balanced properly. Lastly, the same is done with a fibonacci heap.`,
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS201_Projects/tree/main/CS201Part3', video: undefined },
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
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS200_Project', video: undefined },
  },
  {
    itemNum: 12,
    name: "CS101 Project 1",
    tech: ['C++'],
    type: 'School',
    quickDesc: 'Take an input file of data transfer between sources and create more usable output',
    longDesc: `Given an input text file of the size of data transferred between 2 sources,
    I made a more readable output. This output stated all destinations and also the output size, input size
    and ratio between these 2 sizes for each source.`,
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS101_Projects/tree/main/P1%20Leaf', video: undefined },
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
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS101_Projects/tree/main/P2%20Sorts', video: undefined },
  },
  {
    itemNum: 14,
    name: "CS101 Project 3",
    tech: ['C++'],
    type: 'School',
    quickDesc: 'Stores a list of contact items using pointers and implements proper allocation and release of memory practices.',
    longDesc: `There is a pointer to first Contact item and in each Contact there is a pointer to first Info item. 
    This project implements proper deletion and addition practices with allocating and releasing memory.`,
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS101_Projects/tree/main/P3_%20Contact%20List', video: undefined },
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
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS101_Projects/tree/main/P4_%20Hash%20Tables%20and%20People', video: undefined },
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
    links: { live: undefined, code: 'https://github.com/ryankutella25/CS101_Projects/tree/main/P5_Huffman', video: undefined },
  },
];

const projects: Project[] = baseProjects.map((item) => {
    return {
    ...item,
    slug: `${item.itemNum}-${slugify(item.name)}`,
    featured: featuredIds.has(item.itemNum),
    impact: item.quickDesc,
    role: item.type === "School" ? "Student Developer" : "Software Developer",
    dateRange: item.type === "School" ? "University Coursework" : "Independent Project",
    searchableText: [item.name, item.quickDesc, item.longDesc, ...item.tech].join(" ").toLowerCase(),
  };
});

export default projects;
