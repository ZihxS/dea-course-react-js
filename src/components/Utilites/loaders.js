import Spinner from 'react-bootstrap/Spinner';

const Loaders = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{minHeight: "100vh"}}>
      <div className='d-flex'>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="success" />
      </div>
    </div>
  )
}

export default Loaders