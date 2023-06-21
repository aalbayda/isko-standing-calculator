import { FaTrashAlt } from "react-icons/fa";
import { Row, Col, InputGroup, Form } from "react-bootstrap";

const Course = (props) => {
  return (
    <Row>
      <Col sm={4}>
        <InputGroup size="md">
          <Form.Control
            name="title"
            className="form-course"
            placeholder="Course title (optional)"
          />
        </InputGroup>
      </Col>
      <Col sm={4}>
        <InputGroup size="md">
          <Form.Control
            required
            className="text-center form-weight"
            defaultValue="3"
            // step="0.5"
            onChange={(e) => {
              props.courses.filter(
                (course) => course.key === props.id
              )[0].weight = e.target.value;
              props.setStanding("");
            }}
            name="weight"
            type="number"
            min="1"
            max="17"
            placeholder="Credit"
          />
          <InputGroup.Text className="form-weight">units</InputGroup.Text>
        </InputGroup>
      </Col>
      <Col sm={3}>
        <InputGroup size="md">
          <Form.Select
            className="form-grade"
            onChange={(e) => {
              props.courses.filter(
                (course) => course.key === props.id
              )[0].grade = e.target.value;
              props.setStanding("");
            }}
            name="grade"
            aria-label="Select your grade"
          >
            <optgroup label="Numerical Grades">
              <option value="1.00">1.00</option>
              <option value="1.25">1.25</option>
              <option value="1.50">1.50</option>
              <option value="1.75">1.75</option>
              <option value="2.00">2.00</option>
              <option value="2.25">2.25</option>
              <option value="2.5">2.50</option>
              <option value="2.75">2.75</option>
              <option value="3.00">3.00</option>
              <option value="4.00">4.00</option>
              <option value="5.00">5.00</option>
            </optgroup>
            <optgroup label="Non-Numerical Grades">
              <option value="PASS">PASS</option>
              <option value="FAIL">FAIL</option>
              <option value="SATISFACTORY">SATISFACTORY</option>
              <option value="UNSATISFACTORY">UNSATISFACTORY</option>
              <option value="INC">INC</option>
              <option value="DRP">DRP</option>
            </optgroup>
          </Form.Select>
        </InputGroup>
      </Col>
      <Col sm={1} className="my-auto">
        <FaTrashAlt
          className="form-trash"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            props.setCourses(
              props.courses.filter((course) => course.key !== props.id)
            );
            props.setStanding("");
          }}
        />
        <hr className="line"></hr>
        {/* <Button
          variant="outline-light"
          
          style={{ backgroundColor: "white" }}
        >
          ❌
        </Button> */}
      </Col>
    </Row>
  );
};

export default Course;
