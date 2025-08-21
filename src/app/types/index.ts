export interface Project {
    id: string,
    title: string,
    slug: string,
    description: string;
    imageUrl: string;
    audioUrl?: string;
    category: 'mixing' | 'production' | 'mastering';
    clientName?: string;
    completedDate?: string;
}

export interface Service {
    id: string;
    title: string;
    slug: string;
    description: string;
    imageUrl: string;
    pricing: string;
    details: string[];
}