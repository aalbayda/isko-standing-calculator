import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

import Course from "./components/Course.js";
import Standing from "./components/Standing.js";

function App() {
	// States
	const [courses, setCourses] = useState([]);
	const [key, setKey] = useState(0);
	const [standing, setStanding] = useState("");
	const [campus, setCampus] = useState("notUPB");

	// Scroll to top in case too many rows on screen
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// Compute standing
	const computeStanding = (e) => {
		let failedUnits = 0; // Total units failed
		let totalUnits = 0; // Total units excluding INCs
		courses.map((course) => {
			// Compute total units
			if (
				campus === "notUPB" &&
				course.grade !== "INC" &&
				course.grade !== "DRP"
			)
				totalUnits += Number(course.weight);

			// Compute failed units
			if (
				(Number(course.grade) && course.grade > 3.0) ||
				["FAIL", "UNSATISFACTORY"].includes(course.grade)
			)
				failedUnits += Number(course.weight);

			// UPB counts INCs as a delinquency
			if (campus === "UPB" && course.grade === "INC")
				failedUnits += Number(course.weight);
		});

		// Identify standing
		if ("notUPB") {
			if (totalUnits === 0 || failedUnits < 0.25 * totalUnits) setStanding("G");
			else if (
				failedUnits >= 0.25 * totalUnits &&
				failedUnits < 0.5 * totalUnits
			)
				setStanding("W");
			else if (
				failedUnits >= 0.5 * totalUnits &&
				failedUnits < 0.75 * totalUnits
			)
				setStanding("P");
			else if (failedUnits >= 0.75 * totalUnits && failedUnits < totalUnits)
				setStanding("D");
			else if (failedUnits === totalUnits) setStanding("PD");
		}
	};

	return (
		<div>
			<h1 className="text-center mt-5">UP Scholastic Standing Calculator</h1>
			<Container className="text-center d-grid gap-4">
				<Card className="mt-5 mb-5 mx-auto card">
					<Card.Header>
						<b>Instructions:</b> Enter your grades for this semester, excluding
						those for non-academic courses (e.g. PE, HK, NSTP) as they have no
						bearing on your standing.
					</Card.Header>

					<Form className="container text-center d-grid gap-4">
						{courses.length === 0 ? (
							<></>
						) : standing.length > 0 ? (
							<Row className="mt-3">
								<Col className="mx-center">
									<Standing standing={standing} />
								</Col>
							</Row>
						) : (
							<Row className="mt-3"></Row>
						)}
						{courses.map((course) => {
							return (
								<Course
									key={course.key}
									id={course.key}
									courses={courses}
									setCourses={setCourses}
									setStanding={setStanding}
								/>
							);
						})}

						{courses.length === 0 ? (
							<Row>
								<Button
									className="shadow-none border-0"
									size="md"
									onClick={() => {
										setCourses([{ key: key, weight: 3.0, grade: 1.0 }]);
										setKey(key + 1);
										setStanding("");
									}}
									style={{ backgroundColor: "orange" }}
								>
									Add Course
								</Button>
							</Row>
						) : (
							<Row className="mt-3">
								<Col>
									<Button
										size="md"
										className="w-100 shadow-none border-0"
										onClick={() => {
											setCourses([
												...courses,
												{ key: key, weight: 3.0, grade: 1.0 },
											]);
											setKey(key + 1);
											setStanding("");
										}}
										style={{ backgroundColor: "orange" }}
									>
										Add Course
									</Button>
								</Col>
								<Col>
									<Button
										onClick={(e) => {
											setCourses([]);
											setStanding("");
										}}
										className="w-100 shadow-none border-0"
										size="md"
										style={{ backgroundColor: "red" }}
									>
										Clear All
									</Button>
								</Col>
							</Row>
						)}
						{courses.length === 0 ? (
							<></>
						) : (
							<Row className="mb-3">
								<Col>
									<Button
										onClick={(e) => {
											computeStanding(e);
											scrollToTop();
										}}
										className="w-100 shadow-none border-0"
										size="md"
										style={{ backgroundColor: "#00ab41" }}
									>
										Compute Standing
									</Button>
								</Col>
							</Row>
						)}
					</Form>
				</Card>
			</Container>
		</div>
	);
}

export default App;
