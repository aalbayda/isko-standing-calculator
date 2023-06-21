const Standing = (props) => {
  if (props.standing === "G") {
    return (
      <p style={{ color: "green" }}>
        You are in <b>good standing</b>.
      </p>
    );
  } else if (props.standing === "W") {
    return (
      <div>
        <p style={{ color: "#022D36" }}>
          You are given a <b>warning</b>.
        </p>
        <p style={{ color: "#3E424B" }}>
          <i>
            Any student who obtains final grades at the end of the semester
            below "3" in 25 per cent to 49 per cent of the total number of
            academic units in which he is registered shall be warned by the Dean
            or Director to improve his work.
          </i>
        </p>
        <p>&mdash; Revised UP Code, Article 388a</p>
      </div>
    );
  } else if (props.standing === "P") {
    return (
      <div>
        <p style={{ color: "#E49B0F" }}>
          You are under <b>probation</b>.
        </p>
        <p style={{ color: "#3E424B" }}>
          <i>
            Any student who, at the end of the semester, obtains final grades
            below "3" in 50 per cent to 75 per cent of the total number of
            academic units in which he has final grades shall be placed on
            probation for the succeeding semester and his load shall be limited
            to the extent to be determined by the Dean or Director.
          </i>
        </p>
        <p>&mdash; Revised UP Code, Article 388b</p>
      </div>
    );
  } else if (props.standing === "D") {
    return (
      <div>
        <p style={{ color: "red" }}>
          You are <b>dismissed</b> from your college.
        </p>
        <p style={{ color: "#3E424B" }}>
          <i>
            Any student who, at the end of the semester, obtains final grades
            below "3" in at least 76 per cent of the total number of academic
            units in which he receives final grades shall be dropped from the
            rolls of his college or school.
          </i>
        </p>
        <p>&mdash; Revised UP Code, Article 388c</p>
      </div>
    );
  } else if (props.standing === "PD") {
    return (
      <div>
        <p style={{ color: "#880808" }}>
          You are <b>permanently disqualified</b> from admission to the
          university.
        </p>
        <p style={{ color: "#3E424B" }}>
          <i>
            Any student who, at the end of the semester or term, obtains final
            grades below "3" in 100 per cent of the academic units in which he
            is given final grades shall be permanently barred from re-admission
            to any school or college of the University System.
          </i>{" "}
        </p>
        <p>&mdash; Revised UP Code, Article 388d</p>
      </div>
    );
  }
};

export default Standing;
