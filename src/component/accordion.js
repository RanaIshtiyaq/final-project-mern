import Accordion from 'react-bootstrap/Accordion';
import AlertDismissible from './AlertCoseable';

function MyAccordion() {
  return (
    <Accordion className="mt-2" bg='light' defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Important Alerts</Accordion.Header>
        <Accordion.Body>
        <AlertDismissible />  
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordion;