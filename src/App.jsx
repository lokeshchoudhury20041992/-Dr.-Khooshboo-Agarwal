import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Main Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Clinics from './pages/Clinics'
import ClinicDetail from './pages/ClinicDetail'

// SEO Hub Pages
import HubPage from './pages/HubPage'

// Service Pages
import HighRiskPregnancy from './pages/services/HighRiskPregnancy'
import PainlessDelivery from './pages/services/PainlessDelivery'
import PcosTreatment from './pages/services/PcosTreatment'
import InfertilityTreatment from './pages/services/InfertilityTreatment'
import IvfTreatment from './pages/services/IvfTreatment'
import PreconceptionCounselling from './pages/services/PreconceptionCounselling'
import Contraception from './pages/services/Contraception'
import SexualHealth from './pages/services/SexualHealth'
import VaginalInfections from './pages/services/VaginalInfections'
import Endometriosis from './pages/services/Endometriosis'
import LaparoscopicCystectomy from './pages/services/LaparoscopicCystectomy'
import Adenomyosis from './pages/services/Adenomyosis'
import DiagnosticHysteroscopy from './pages/services/DiagnosticHysteroscopy'
import EggFreezing from './pages/services/EggFreezing'
import PcosDiet from './pages/services/PcosDiet'
import Myomectomy from './pages/services/Myomectomy'
import TubalLigation from './pages/services/TubalLigation'
import UterinePolyps from './pages/services/UterinePolyps'
import GestationalDiabetes from './pages/services/GestationalDiabetes'
import NormalDeliveryCare from './pages/services/NormalDeliveryCare'
import MenopauseManagement from './pages/services/MenopauseManagement'
import RecurrentMiscarriage from './pages/services/RecurrentMiscarriage'
import IuiTreatment from './pages/services/IuiTreatment'

// Blog Pages
import BlogPost from './pages/blog/BlogPost'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="clinics" element={<Clinics />} />
        <Route path="clinics/:id" element={<ClinicDetail />} />

        {/* SEO Category Hubs */}
        <Route path=":category" element={<HubPage />} />

        {/* Deep SEO Routes — category paths */}
        <Route path="pregnancy-care/high-risk-pregnancy" element={<HighRiskPregnancy />} />
        <Route path="pregnancy-care/gestational-diabetes" element={<GestationalDiabetes />} />
        <Route path="pregnancy-care/normal-delivery" element={<NormalDeliveryCare />} />
        <Route path="pregnancy-care/painless-delivery" element={<PainlessDelivery />} />
        <Route path="pregnancy-care/preconception-counselling" element={<PreconceptionCounselling />} />

        <Route path="gynecology/pcos-treatment" element={<PcosTreatment />} />
        <Route path="gynecology/pcos-diet" element={<PcosDiet />} />
        <Route path="gynecology/contraception" element={<Contraception />} />
        <Route path="gynecology/sexual-health" element={<SexualHealth />} />
        <Route path="gynecology/vaginal-infections" element={<VaginalInfections />} />
        <Route path="gynecology/endometriosis" element={<Endometriosis />} />
        <Route path="gynecology/adenomyosis" element={<Adenomyosis />} />
        <Route path="gynecology/uterine-polyps" element={<UterinePolyps />} />
        <Route path="gynecology/menopause-management" element={<MenopauseManagement />} />

        <Route path="fertility/infertility-treatment" element={<InfertilityTreatment />} />
        <Route path="fertility/iui-treatment" element={<IuiTreatment />} />
        <Route path="fertility/ivf-treatment" element={<IvfTreatment />} />
        <Route path="fertility/recurrent-miscarriage" element={<RecurrentMiscarriage />} />
        <Route path="fertility/egg-freezing" element={<EggFreezing />} />

        <Route path="surgeries/laparoscopic-cystectomy" element={<LaparoscopicCystectomy />} />
        <Route path="surgeries/diagnostic-hysteroscopy" element={<DiagnosticHysteroscopy />} />
        <Route path="surgeries/myomectomy" element={<Myomectomy />} />
        <Route path="surgeries/tubal-ligation" element={<TubalLigation />} />

        {/* Fallback /services/* routes (linked from Services page) */}
        <Route path="services/high-risk-pregnancy" element={<HighRiskPregnancy />} />
        <Route path="services/painless-delivery" element={<PainlessDelivery />} />
        <Route path="services/pcos-treatment" element={<PcosTreatment />} />
        <Route path="services/infertility-treatment" element={<InfertilityTreatment />} />
        <Route path="services/preconception-counselling" element={<PreconceptionCounselling />} />
        <Route path="services/contraception" element={<Contraception />} />
        <Route path="services/sexual-health" element={<SexualHealth />} />
        <Route path="services/vaginal-infections" element={<VaginalInfections />} />
        <Route path="services/gestational-diabetes" element={<GestationalDiabetes />} />
        <Route path="services/normal-delivery" element={<NormalDeliveryCare />} />
        <Route path="services/pcos-diet" element={<PcosDiet />} />
        <Route path="services/menopause-management" element={<MenopauseManagement />} />
        <Route path="services/endometriosis" element={<Endometriosis />} />
        <Route path="services/adenomyosis" element={<Adenomyosis />} />
        <Route path="services/uterine-polyps" element={<UterinePolyps />} />
        <Route path="services/iui-treatment" element={<IuiTreatment />} />
        <Route path="services/ivf-treatment" element={<IvfTreatment />} />
        <Route path="services/recurrent-miscarriage" element={<RecurrentMiscarriage />} />
        <Route path="services/egg-freezing" element={<EggFreezing />} />
        <Route path="services/laparoscopic-cystectomy" element={<LaparoscopicCystectomy />} />
        <Route path="services/myomectomy" element={<Myomectomy />} />
        <Route path="services/diagnostic-hysteroscopy" element={<DiagnosticHysteroscopy />} />
        <Route path="services/tubal-ligation" element={<TubalLigation />} />
        <Route path="services/laparoscopic-surgery" element={<LaparoscopicCystectomy />} />

        {/* Blog Routes */}
        <Route path="blog/:slug" element={<BlogPost />} />
      </Route>
    </Routes>
  )
}

export default App
