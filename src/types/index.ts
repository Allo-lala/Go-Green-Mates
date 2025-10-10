export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  location: string;
  image?: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface Campaign {
  id: number;
  title: string;
  description: string;
  image: string;
}
