import {
  BookOpenIcon,
  NewspaperIcon,
  DatabaseIcon,
  BookmarkIcon,
  GraduationCapIcon,
  GlobeIcon,
  ScrollTextIcon,
  BookIcon,
  LibraryIcon
} from 'lucide-react';
import type { Resource } from '../types/resource';

export const resources: Resource[] = [
  {
    title: 'JSTOR',
    description: 'Access to academic journals, books, and primary sources across multiple disciplines',
    link: 'https://www.jstor.org',
    icon: <DatabaseIcon className="w-6 h-6" />,
    category: 'Research Databases',
    access: 'Subscription Required',
    provider: 'ITHAKA'
  },
  {
    title: 'ScienceDirect',
    description: 'Leading platform for peer-reviewed scholarly literature and research papers',
    link: 'https://www.sciencedirect.com',
    icon: <ScrollTextIcon className="w-6 h-6" />,
    category: 'E-Journals',
    access: 'Subscription Required',
    provider: 'Elsevier'
  },
  {
    title: 'African Journals Online',
    description: 'Largest collection of peer-reviewed, African-published scholarly journals',
    link: 'https://www.ajol.info',
    icon: <NewspaperIcon className="w-6 h-6" />,
    category: 'E-Journals',
    access: 'Open Access',
    provider: 'AJOL'
  },
  {
    title: 'UDOM Digital Repository',
    description: 'University of Dodoma\'s institutional repository of theses, dissertations, and research papers',
    link: 'https://repository.udom.ac.tz',
    icon: <LibraryIcon className="w-6 h-6" />,
    category: 'Digital Collections',
    access: 'Open Access'
  },
  {
    title: 'ProQuest E-Book Central',
    description: 'Comprehensive collection of academic e-books across all disciplines',
    link: 'https://ebookcentral.proquest.com',
    icon: <BookIcon className="w-6 h-6" />,
    category: 'E-Books',
    access: 'Subscription Required',
    provider: 'ProQuest'
  },
  {
    title: 'Web of Science',
    description: 'Premier research platform for citation data and analytics',
    link: 'https://webofscience.com',
    icon: <GlobeIcon className="w-6 h-6" />,
    category: 'Research Databases',
    access: 'Campus Only',
    provider: 'Clarivate'
  },
  {
    title: 'Mendeley',
    description: 'Reference management tool and academic social network',
    link: 'https://www.mendeley.com',
    icon: <BookmarkIcon className="w-6 h-6" />,
    category: 'Academic Tools',
    access: 'Open Access',
    provider: 'Elsevier'
  },
  {
    title: 'Directory of Open Access Journals',
    description: 'Online directory indexing high quality, open access, peer-reviewed journals',
    link: 'https://doaj.org',
    icon: <BookOpenIcon className="w-6 h-6" />,
    category: 'Open Access',
    access: 'Open Access'
  },
  {
    title: 'Tanzania Journals Online',
    description: 'Platform for Tanzanian-published journals',
    link: 'https://www.tanzaniajournals.ac.tz',
    icon: <GraduationCapIcon className="w-6 h-6" />,
    category: 'E-Journals',
    access: 'Open Access'
  }
];