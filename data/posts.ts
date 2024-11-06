import { Post } from '@/types/posts';

const posts: Post[] = [
  {
    id: '1',
    title: 'The Rise of Artificial Intelligence',
    body: 'Artificial Intelligence (AI) is revolutionizing various industries...',
    author: 'John',
    date: '2024-05-01',
    comments: [
      { id: '1', text: 'Great introduction!', username: 'Tarun' },
      {
        id: '2',
        text: 'Looking forward to more posts on this topic.',
        username: 'Rahul',
      },
    ],
  },
  {
    id: '2',
    title: 'Quantum Computing: A New Era of Computing',
    body: 'Quantum computing holds the potential to solve problems...',
    author: 'Emily Smith',
    date: '2024-04-28',
    comments: [
      { id: '1', text: 'Fascinating read!', username: 'Mary' },
      {
        id: '2',
        text: 'I have some questions about quantum algorithms.',
        username: 'Zarah',
      },
    ],
  },
  {
    id: '3',
    title: 'Blockchain: Transforming Industries',
    body: 'Blockchain technology is disrupting traditional industries...',
    author: 'Johnson',
    date: '2024-05-03',
    comments: [
      { id: '1', text: 'Blockchain has immense potential!', username: 'Lucky' },
      {
        id: '2',
        text: "I'm curious about its scalability.",
        username: 'Tagor',
      },
    ],
  },
  {
    id: '4',
    title: 'The Future of Augmented Reality',
    body: 'Augmented Reality (AR) is changing the way we interact...',
    author: 'Shakesphere',
    date: '2024-05-05',
    comments: [
      { id: '1', text: 'AR applications are amazing!', username: 'Johan' },
      {
        id: '2',
        text: "Can't wait to see AR integrated into everyday life.",
        username: 'Sammuel',
      },
    ],
  },
  {
    id: '5',
    title: 'The Internet of Things (IoT): Connecting Everything',
    body: 'The Internet of Things (IoT) is creating interconnected...',
    author: 'David',
    date: '2024-05-08',
    comments: [
      {
        id: '1',
        text: 'IoT has huge potential for smart homes.',
        username: 'Messi',
      },
      {
        id: '2',
        text: 'Security concerns need to be addressed.',
        username: 'Ronaldo',
      },
    ],
  },
  {
    id: '6',
    title: '5G Technology: The Next Generation of Connectivity',
    body: '5G technology promises faster speeds and lower latency...',
    author: 'Zayan',
    date: '2024-05-10',
    comments: [
      {
        id: '1',
        text: 'Excited for the possibilities with 5G.',
        username: 'Anna',
      },
      {
        id: '2',
        text: 'Hope it improves rural connectivity too.',
        username: 'Aswin',
      },
    ],
  },
  {
    id: '7',
    title: 'Cybersecurity in the Digital Age',
    body: 'As technology advances, cybersecurity becomes...',
    author: 'Neymar de silva',
    date: '2024-05-12',
    comments: [
      {
        id: '1',
        text: 'Cybersecurity is crucial for protecting data.',
        username: 'Eva',
      },
      { id: '2', text: 'Continuous monitoring is key.', username: 'Noah' },
    ],
  },
  {
    id: '8',
    title: 'Artificial Neural Networks: Mimicking the Brain',
    body: 'Artificial Neural Networks (ANNs) are inspired by the...',
    author: 'Greeceman',
    date: '2024-05-15',
    comments: [
      {
        id: '1',
        text: 'ANNs have applications in various fields.',
        username: 'Liam',
      },
      {
        id: '2',
        text: 'Training them requires a lot of data.',
        username: 'Mia',
      },
    ],
  },
  {
    id: '9',
    title: 'Cloud Computing: Enabling Scalable Solutions',
    body: 'Cloud computing provides on-demand access to computing...',
    author: 'James Mullar',
    date: '2024-05-18',
    comments: [
      {
        id: '1',
        text: 'Cloud computing has transformed IT.',
        username: 'Harper',
      },
      {
        id: '2',
        text: 'Concerned about data privacy in the cloud.',
        username: 'Logan',
      },
    ],
  },
  {
    id: '10',
    title: 'Machine Learning: Powering Intelligent Systems',
    body: 'Machine Learning (ML) algorithms enable computers...',
    author: 'Antony',
    date: '2024-05-20',
    comments: [
      { id: '1', text: 'ML is reshaping industries.', username: 'Emma' },
      {
        id: '2',
        text: "I'm interested in reinforcement learning.",
        username: 'Daniel',
      },
    ],
  },
];

export default posts;
