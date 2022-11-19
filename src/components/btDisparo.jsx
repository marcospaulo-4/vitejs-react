import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaClock } from 'react-icons/fa';

function SplitBasicExample() {
  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="success">Iniciar disparo</Button>

      <Dropdown.Toggle split variant="primary" id="dropdown-split-basic">
        <FaClock />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Agendar Disparo</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SplitBasicExample;
