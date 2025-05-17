
export interface Candidate {
  id: string;
  name: string;
  avatar: string;
  appliedAt: string;
  stage: 'applying' | 'screening' | 'interview' | 'test';
  rating: number;
  referred?: boolean;
}

export const candidates: Candidate[] = [
  {
    id: '1',
    name: 'Marlon Reynolds',
    avatar: '/placeholder.svg',
    appliedAt: '29 Oct, 2023',
    stage: 'applying',
    rating: 3.5,
    referred: true
  },
  {
    id: '2',
    name: 'Regina Hane',
    avatar: '/placeholder.svg',
    appliedAt: '29 Oct, 2023',
    stage: 'applying',
    rating: 2
  },
  {
    id: '3',
    name: 'Curtis Baumbach',
    avatar: '/placeholder.svg',
    appliedAt: '29 Oct, 2023',
    stage: 'applying',
    rating: 3,
    referred: true
  },
  {
    id: '4',
    name: 'Jaime Anderson',
    avatar: '/placeholder.svg',
    appliedAt: '29 Oct, 2023',
    stage: 'applying',
    rating: 0
  },
  {
    id: '5',
    name: 'Kristi Sipes',
    avatar: '/placeholder.svg',
    appliedAt: '20 Oct, 2023',
    stage: 'screening',
    rating: 3.5
  },
  {
    id: '6',
    name: 'Randy Dibbert',
    avatar: '/placeholder.svg',
    appliedAt: '18 Oct, 2023',
    stage: 'screening',
    rating: 3.5
  },
  {
    id: '7',
    name: 'Jane Anderson',
    avatar: '/placeholder.svg',
    appliedAt: '18 Oct, 2023',
    stage: 'screening',
    rating: 0
  },
  {
    id: '8',
    name: 'Shelia Doyle',
    avatar: '/placeholder.svg',
    appliedAt: '13 Oct, 2023',
    stage: 'screening',
    rating: 4.5,
    referred: true
  },
  {
    id: '9',
    name: 'Cassandra Hartmann',
    avatar: '/placeholder.svg',
    appliedAt: '10 Oct, 2023',
    stage: 'screening',
    rating: 0
  },
  {
    id: '10',
    name: 'Cameron Dickens',
    avatar: '/placeholder.svg',
    appliedAt: '03 Sep, 2023',
    stage: 'interview',
    rating: 4
  },
  {
    id: '11',
    name: 'Merle Vandervort',
    avatar: '/placeholder.svg',
    appliedAt: '09 Sep, 2023',
    stage: 'interview',
    rating: 4
  },
  {
    id: '12',
    name: 'Jasmine Wiza',
    avatar: '/placeholder.svg',
    appliedAt: '10 Sep, 2023',
    stage: 'interview',
    rating: 0
  },
  {
    id: '13',
    name: 'Lola Kirlin',
    avatar: '/placeholder.svg',
    appliedAt: '03 Sep, 2023',
    stage: 'test',
    rating: 4.5,
    referred: true
  },
  {
    id: '14',
    name: 'Virgil Larkin',
    avatar: '/placeholder.svg',
    appliedAt: '03 Sep, 2023',
    stage: 'test',
    rating: 0
  }
];

export const job = {
  title: 'Research and Development Officer',
  status: 'Open',
  position: 'Researcher',
  location: 'Onsite',
  createdBy: 'Bagus Fikri',
  totalCandidates: 8
};
