import React from 'react'
import { Box, Container, Heading, Spinner } from '@chakra-ui/react'
import { useFetch } from '../../common/hooks/useFetch'
import { KpisComponent } from './KpiContainer'
import { RequestsBoardComponent } from './RequestsBoardComponent'
import { Breadcrumb } from '../../common/components/Breadcrumb'
import { setTitle } from '../../common/utils/pageUtils'

const DashboardPage = () => {
  const [data, loading] = useFetch('api/appointment/appointments/details?limit=500')
  const appointments = data === null ? [] : data.appointments

  const title = 'Tableau de bord'
  setTitle(title)

  return (
    <Box w='100%' pt={[4, 8]} px={[1, 1, 12, 24]} pb={40}>
      <Container maxW='xl' mb={20}>
        <Breadcrumb pages={[{ title: 'Administration', to: '/admin' }, { title: title }]} />
        <Heading textStyle='h2' mt={5}>
          {title}
        </Heading>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <KpisComponent />
            <RequestsBoardComponent appointments={appointments} />
          </>
        )}
      </Container>
    </Box>
  )
}
export default DashboardPage
