import Container from 'react-bootstrap/Container'
import Navigation from './navigation.layouts'

const MainLayouts = ({children}) => {
  return (
    <Container>
      <Navigation/>
      {children}
    </Container>
  )
}

export default MainLayouts