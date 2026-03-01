export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  service: string;
  year: number;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  category: string;
  message: string;
}
