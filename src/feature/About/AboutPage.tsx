import { AboutHero } from './components/AboutHero';
import { AboutStory } from './components/AboutStory';
import { AboutMissionVision } from './components/AboutMissionVision';
import { AboutQualityStandards } from './components/AboutQualityStandards';
import { AboutValues } from './components/AboutValues';
import { usePageTitle } from '../../hooks/usePageTitle';

export function AboutPage() {
  usePageTitle('عن العيادة ورؤيتنا');
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      <AboutQualityStandards />
      <AboutValues />
    </div>
  );
}

export default AboutPage;
