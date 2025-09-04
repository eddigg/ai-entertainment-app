export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  description: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  genre: string;
  cover: string;
}

export interface Game {
  id: string;
  title: string;
  genre: string;
  platform: string;
  rating: number;
  thumbnail: string;
  description: string;
}

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'AI-Powered Video Editing Tutorial',
    thumbnail: '/videos/ai-editing.jpg',
    duration: '15:30',
    category: 'Technology',
    description: 'Learn how AI is revolutionizing video editing with smart automation and intelligent content generation.',
  },
  {
    id: '2',
    title: 'Future of Entertainment',
    thumbnail: '/videos/future-entertainment.jpg',
    duration: '22:45',
    category: 'Entertainment',
    description: 'Exploring how artificial intelligence is shaping the future of entertainment industry.',
  },
  {
    id: '3',
    title: 'Machine Learning for Beginners',
    thumbnail: '/videos/ml-basics.jpg',
    duration: '18:20',
    category: 'Education',
    description: 'A comprehensive introduction to machine learning concepts and practical applications.',
  },
  {
    id: '4',
    title: 'AI in Gaming',
    thumbnail: '/videos/ai-gaming.jpg',
    duration: '25:10',
    category: 'Gaming',
    description: 'How AI is creating more immersive and intelligent gaming experiences.',
  },
  {
    id: '5',
    title: 'Smart Home Automation',
    thumbnail: '/videos/smart-home.jpg',
    duration: '12:15',
    category: 'Technology',
    description: 'Transform your home with AI-powered automation and smart devices.',
  },
];

export const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Digital Dreams',
    artist: 'SynthWave AI',
    album: 'Future Sounds',
    duration: '3:45',
    genre: 'Electronic',
    cover: '/music/digital-dreams.jpg',
  },
  {
    id: '2',
    title: 'Neural Network',
    artist: 'Code Beats',
    album: 'Algorithmic',
    duration: '4:12',
    genre: 'Ambient',
    cover: '/music/neural-network.jpg',
  },
  {
    id: '3',
    title: 'Quantum Leap',
    artist: 'Future Sound',
    album: 'Next Generation',
    duration: '3:58',
    genre: 'Synthwave',
    cover: '/music/quantum-leap.jpg',
  },
  {
    id: '4',
    title: 'Cybernetic',
    artist: 'AI Composers',
    album: 'Machine Learning',
    duration: '4:30',
    genre: 'Techno',
    cover: '/music/cybernetic.jpg',
  },
  {
    id: '5',
    title: 'Data Stream',
    artist: 'Binary Beats',
    album: 'Digital Age',
    duration: '3:22',
    genre: 'Electronic',
    cover: '/music/data-stream.jpg',
  },
  {
    id: '6',
    title: 'Matrix Mode',
    artist: 'Virtual Band',
    album: 'The Matrix',
    duration: '4:05',
    genre: 'Rock',
    cover: '/music/matrix-mode.jpg',
  },
];

export const mockGames: Game[] = [
  {
    id: '1',
    title: 'AI Dungeon Master',
    genre: 'RPG',
    platform: 'Web',
    rating: 4.8,
    thumbnail: '/games/ai-dungeon.jpg',
    description: 'An AI-powered text-based adventure game where the AI creates unlimited story possibilities.',
  },
  {
    id: '2',
    title: 'Neural Chess',
    genre: 'Strategy',
    platform: 'Desktop',
    rating: 4.6,
    thumbnail: '/games/neural-chess.jpg',
    description: 'Play chess against an AI that learns from every game and adapts its strategy.',
  },
  {
    id: '3',
    title: 'Future City Builder',
    genre: 'Simulation',
    platform: 'Mobile',
    rating: 4.7,
    thumbnail: '/games/future-city.jpg',
    description: 'Build and manage a smart city of the future with AI assistance.',
  },
  {
    id: '4',
    title: 'Mind Maze',
    genre: 'Puzzle',
    platform: 'Web',
    rating: 4.5,
    thumbnail: '/games/mind-maze.jpg',
    description: 'Navigate through procedurally generated mazes created by advanced AI algorithms.',
  },
];
