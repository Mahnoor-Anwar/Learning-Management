import Accordion from 'react-bootstrap/Accordion';
import Class1 from './Class1';
import Class2 from './Class2';
import Class3 from './Class3';
import Class4 from './Class4';
import Class5 from './Class5';
import Class6 from './Class6';
import Class7 from './Class7';
import Class8 from './Class8';
import Class9 from './Class9';
import Class10 from './Class10';

function FeeStructure() {
  return (
    <Accordion className='p-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="text-center">Fee Structure For Class 1</Accordion.Header>
        <Accordion.Body>
          <Class1 />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Fee Structure for class 2</Accordion.Header>
        <Accordion.Body>
          <Class2 />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Fee Structure for class 3</Accordion.Header>
        <Accordion.Body>
          <Class3 />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Fee Structure for class 4</Accordion.Header>
        <Accordion.Body>
          <Class4 />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Fee Structure for class 5</Accordion.Header>
        <Accordion.Body>
          <Class5 />
        </Accordion.Body>
      </Accordion.Item> 
      <Accordion.Item eventKey="6">
        <Accordion.Header>Fee Structure for class 6</Accordion.Header>
        <Accordion.Body>
          <Class6 />
        </Accordion.Body>
      </Accordion.Item> 
      <Accordion.Item eventKey="7">
        <Accordion.Header>Fee Structure for class 7</Accordion.Header>
        <Accordion.Body>
          <Class7 />
        </Accordion.Body>
      </Accordion.Item> 
      <Accordion.Item eventKey="8">
        <Accordion.Header>Fee Structure for class 8</Accordion.Header>
        <Accordion.Body>
          <Class8 />
        </Accordion.Body>
      </Accordion.Item> 
      <Accordion.Item eventKey="9">
        <Accordion.Header>Fee Structure for class 9</Accordion.Header>
        <Accordion.Body>
          <Class9 />
        </Accordion.Body>
      </Accordion.Item>  
      <Accordion.Item eventKey="10">
        <Accordion.Header>Fee Structure for class 10</Accordion.Header>
        <Accordion.Body>
          <Class10 />
        </Accordion.Body>
      </Accordion.Item> 
    </Accordion>
  );
}

export default FeeStructure;