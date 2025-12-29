
export interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  liveUrl: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface NavItem {
  name: string;
  href: string;
}
