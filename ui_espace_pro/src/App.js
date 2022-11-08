import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { ReactQueryDevtoolsPanel } from 'react-query/devtools'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AUTHTYPE } from './common/contants'
import useAuth from './common/hooks/useAuth'
import { Layout, MailActionsOnOffre } from './components'
import {
  Account,
  AdministrationOpco,
  CreationEntreprise,
  CreationEntrepriseDetail,
  CreationOffre,
  DetailEntrepriseOpco,
  EditionEntrepriseContact,
  ListeEntreprise,
  ListeOffre,
  Users,
} from './pages/Administration'
import {
  AuthValidation,
  ConfirmationCreationCompte,
  ConfirmationValidationEmail,
  Connexion,
  CreationCompte,
  InformationCreationCompte,
  OptOutValidation,
} from './pages/Authentification'
import { DepotRapide_AjouterVoeux, DepotRapide_AjouterVoeuxMiseEnRelation, DepotRapide_Fin } from './pages/Formulaire'
import { PropositionOffreId } from './pages/Proposition/Offre/PropositionOffreId'
import LoginPage from './pages/LoginPage'
import ResetPasswordPage from './pages/Password/ResetPasswordPage'
import ForgottenPasswordPage from './pages/Password/ForgottenPasswordPage'
import { FormCreatePage } from './pages/Candidat/FormCreatePage'
import { FormRecapPage } from './pages/Candidat/FormRecapPage'
import OptOutUnsubscribe from './pages/OptOutUnsubscribe'
import PremiumForm from './pages/PremiumForm'
import Accessibilite from './pages/Accessibilite'
import MentionsLegales from './pages/MentionsLegales'
import { ScrollToTop } from './components/ScrollToTop'
import AppointmentFollowUpPage from './pages/AppointmentFollowUpPage'
import { CfaCandidatInformationPage } from './pages/CfaCandidatInformationPage'
// import Layout from "./pages/Layout";
import DashboardPage from './pages/Admin/DashboardPage'
import WidgetParametersPage from './pages/Admin/widgetParameters/pages/MainPage'
import WidgetParametersEditPage from './pages/Admin/widgetParameters/pages/EditPage'
import WidgetParametersSearchPage from './pages/Admin/widgetParameters/pages/SearchPage'
import BulkPage from './pages/Admin/widgetParameters/pages/BulkPage'
import Widget from './pages/Widget'
import Cookies from './pages/Cookies'

function RedirectTo404() {
  useEffect(() => {
    window.location.replace('/404')
  }, [])
  return null
}

function RedirectToLba() {
  useEffect(() => {
    window.location.replace('/')
  }, [])
  return null
}

function PrivateRoute({ children }) {
  let [auth] = useAuth()

  return auth.sub !== 'anonymous' ? children : <Navigate to='/' />
}

function AdminRoute({ children }) {
  let [auth] = useAuth()

  return auth.permissions.isAdmin ? children : <Navigate to='/' />
}

const App = () => {
  return (
    <AnimatePresence>
      <ScrollToTop />
      <ReactQueryDevtoolsPanel />
      <Helmet>
        <script
          defer
          data-domain={window.location.hostname}
          src='https://plausible.io/js/script.local.hash.outbound-links.js'
        />
      </Helmet>
      <Routes>
        <Route
          path='/compte'
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route
          path='/administration'
          element={
            <PrivateRoute>
              <Layout footer={false} />
            </PrivateRoute>
          }
        >
          <Route
            path='users'
            element={
              <AdminRoute>
                <Users />
              </AdminRoute>
            }
          />
          <Route index element={<ListeEntreprise />} />
          <Route path='opco' element={<AdministrationOpco />} />
          <Route path='opco/entreprise/:userId' element={<DetailEntrepriseOpco />} />
          <Route path='opco/entreprise/:siret/:id_form' element={<ListeOffre />} />
          <Route path='opco/entreprise/:siret/:id_form/offre/:id_offre' element={<CreationOffre />} />
          <Route path='entreprise' element={<CreationEntreprise />} />
          <Route path='entreprise/:id_form' element={<ListeOffre />} />
          <Route path='entreprise/:id_form/offre/:id_offre' element={<CreationOffre />} />
          <Route path='entreprise/detail' element={<CreationEntrepriseDetail />} />
          <Route path='entreprise/:id_form/edition' element={<EditionEntrepriseContact />} />
        </Route>
        <Route path='/authentification' element={<Connexion />} />
        <Route path='/creation/entreprise' element={<CreationCompte type={AUTHTYPE.ENTREPRISE} widget={false} />} />
        <Route
          path='/creation/entreprise/:origine'
          element={<CreationCompte type={AUTHTYPE.ENTREPRISE} widget={false} />}
        />
        <Route path='/creation/cfa' element={<CreationCompte type={AUTHTYPE.CFA} />} />
        <Route path='/creation/cfa/:origine' element={<CreationCompte type={AUTHTYPE.CFA} />} />
        <Route path='/creation/detail' element={<InformationCreationCompte />} />
        <Route path='/creation/offre' element={<DepotRapide_AjouterVoeux />} />
        <Route path='/creation/mise-en-relation' element={<DepotRapide_AjouterVoeuxMiseEnRelation />} />
        <Route path='/creation/fin' element={<DepotRapide_Fin />} />
        <Route
          path='/proposition/formulaire/:idFormulaire/offre/:idOffre'
          element={<Layout displayNavigationMenu={false} />}
        >
          <Route index element={<PropositionOffreId />} />
        </Route>
        <Route path='/authentification/confirmation' element={<ConfirmationCreationCompte />} />
        <Route path='/authentification/validation/:id' element={<ConfirmationValidationEmail />} />
        <Route path='/authentification/verification' element={<AuthValidation />} />
        <Route path='/authentification/optout/verification' element={<OptOutValidation />} />
        <Route path='/' element={<RedirectToLba />} />
        <Route path='/offre/:idOffre/:option' element={<MailActionsOnOffre />} />
        <Route path='/widget/:origine' element={<CreationCompte type={AUTHTYPE.ENTREPRISE} widget={true} />} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/reset-password' component={ResetPasswordPage} />
        <Route exact path='/forgotten-password' component={ForgottenPasswordPage} />
        <Route exact path='/form' component={FormCreatePage} />
        <Route exact path='/form/confirm/:id' component={FormRecapPage} />
        <Route exact path='/form/opt-out/unsubscribe/:id' component={OptOutUnsubscribe} />
        <Route exact path='/form/premium/:id' component={PremiumForm} />
        <Route exact path='/informations' component={FAQ} />
        <Route exact path='/accessibilite' component={Accessibilite} />
        <Route exact path='/mentions-legales' component={MentionsLegales} />
        <Route exact path='/cookies' component={Cookies} />
        <Route
          exact
          path='/appointment/candidat/follow-up/:id/:action(confirm|resend)'
          component={AppointmentFollowUpPage}
        />
        <Route exact path='/widget/tutorial' component={Widget} />
        <Route
          exact
          path='/establishment/:establishmentId/appointments/:appointmentId'
          component={CfaCandidatInformationPage}
        />
        <PrivateRoute exact path='/admin'>
          <Route exact path='/admin' component={DashboardPage} />
          <Route exact path='/admin/widget-parameters' component={WidgetParametersPage} />
          <Route exact path='/admin/widget-parameters/search' component={WidgetParametersSearchPage} />
          <Route exact path='/admin/widget-parameters/edit/:id' component={WidgetParametersEditPage} />
          <Route exact path='/admin/widget-parameters/bulk' component={BulkPage} />
        </PrivateRoute>
        <Route path='*' element={<RedirectTo404 />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
