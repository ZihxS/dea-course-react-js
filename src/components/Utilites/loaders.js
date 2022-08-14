import Spinner from 'react-bootstrap/Spinner';

const Loaders = () => {
  return (
    <div>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="success" />
    </div>
  )
}

export default Loaders