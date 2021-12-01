import {Alert, Button } from 'react-bootstrap';
import { useState } from 'react';
import alert1 from './img/alert1.png';
import { useNavigate} from 'react-router-dom'
function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
    const nav = useNavigate();
    if (show) {
      return (
        
        <Alert variant="light" style={{margin: "200px", marginTop: "20px"}} onClose={() => setShow(false)} onClick={()=> nav('/main')}  dismissible>
          <Alert.Heading>Health Condition </Alert.Heading>
          <hr></hr>
          <Alert.Heading style={{fontSize: "20px", fontFamily:"Arial"}}>
          The coded colors ensure privacy and demonstrate the health condition of
          <br></br> users in accordance with the Ministry of Health data through encrypted personal data.
          </Alert.Heading>
          <hr></hr>
          <img src={alert1}/>
        </Alert>
      );
    }
    return;
  }
  export default AlertDismissibleExample;