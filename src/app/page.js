import DownloadSection from './components/DownloadSection';
import FaqComponent from './components/faqComponent';
import HeroSection from './components/heroSection';
import LanguageList from './components/languageList';
import LanguagePicker from './components/languagePicker';
import Learners from './components/learners';
import LeyondClassroomLearning from './components/leyondClassroomLearning';
import MainPodcast from './components/mainPodcast';
import SeeWhatOffers from './components/seeWhatOffers';
import TrustPilotReview from './components/trustPilotReview ';
import TrustedByLogos from './components/trustedByLogos ';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LanguageList />
      <LanguagePicker />
      <SeeWhatOffers />
      <Learners />
      <TrustedByLogos />
      <LeyondClassroomLearning />
      <MainPodcast />
      <FaqComponent />
      {/* <DownloadSection /> */}
      {/* <TrustPilotReview /> */}
    </>
  );
}
