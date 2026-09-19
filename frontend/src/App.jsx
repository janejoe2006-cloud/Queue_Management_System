import { useState } from "react";
import "./index.css";

function App() {
  const [queue, setQueue] = useState([
    { token: "A001", name: "Rahul", department: "General", status: "Waiting" },
    { token: "A002", name: "Anjali", department: "Cardiology", status: "Waiting" },
    { token: "A003", name: "Arjun", department: "General", status: "Waiting" },
    { token: "A004", name: "Meera", department: "Pediatrics", status: "Waiting" },
    { token: "A005", name: "Vishnu", department: "ENT", status: "Waiting" },
  ]);

  const [currentPatient, setCurrentPatient] = useState(null);

  const callNext = () => {
    const nextPatient = queue.find(
      (patient) => patient.status === "Waiting"
    );

    if (!nextPatient) {
      alert("No patients waiting!");
      return;
    }

    setCurrentPatient(nextPatient);

    setQueue((prevQueue) =>
      prevQueue.map((patient) =>
        patient.token === nextPatient.token
          ? { ...patient, status: "Serving" }
          : patient
      )
    );
  };

  const completePatient = () => {
    if (!currentPatient) {
      alert("No patient is currently being served.");
      return;
    }

    setQueue((prevQueue) =>
      prevQueue.map((patient) =>
        patient.token === currentPatient.token
          ? { ...patient, status: "Completed" }
          : patient
      )
    );

    setCurrentPatient(null);
  };

  const skipPatient = () => {
    if (!currentPatient) {
      alert("No patient is currently being served.");
      return;
    }

    setQueue((prevQueue) =>
      prevQueue.map((patient) =>
        patient.token === currentPatient.token
          ? { ...patient, status: "Skipped" }
          : patient
      )
    );

    setCurrentPatient(null);
  };

  const waitingCount = queue.filter(
    (patient) => patient.status === "Waiting"
  ).length;

  const completedCount = queue.filter(
    (patient) => patient.status === "Completed"
  ).length;

  const skippedCount = queue.filter(
    (patient) => patient.status === "Skipped"
  ).length;

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">+</div>
          <div>
            <h2>MedQueue</h2>
            <p>Smart Hospital</p>
          </div>
        </div>

        <nav>
          <a className="active">📊 Dashboard</a>
          <a>🎫 Queue Management</a>
          <a>👥 Patients</a>
          <a>🏥 Departments</a>
          <a>📈 Reports</a>
          <a>⚙️ Settings</a>
        </nav>

        <div className="admin-card">
          <div className="avatar">A</div>
          <div>
            <strong>Admin</strong>
            <p>Hospital Admin</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main">

        {/* HEADER */}
        <header className="header">
          <div>
            <h1>Queue Dashboard</h1>
            <p>Manage today's hospital queue</p>
          </div>

          <div className="header-right">
            <span className="live">
              <span></span> Live
            </span>

            <div className="notification">🔔</div>
          </div>
        </header>

        {/* STATISTICS */}
        <section className="stats">

          <div className="stat-card">
            <div className="stat-icon blue">👥</div>
            <div>
              <p>Waiting Patients</p>
              <h2>{waitingCount}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">🎫</div>
            <div>
              <p>Currently Serving</p>
              <h2>{currentPatient ? currentPatient.token : "--"}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">✓</div>
            <div>
              <p>Completed</p>
              <h2>{completedCount}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">⏭</div>
            <div>
              <p>Skipped</p>
              <h2>{skippedCount}</h2>
            </div>
          </div>

        </section>

        {/* CURRENT TOKEN */}
        <section className="current-section">

          <div className="current-token">

            <div className="section-title">
              <div>
                <h2>Now Serving</h2>
                <p>Current patient</p>
              </div>

              <span className="serving-status">● SERVING</span>
            </div>

            <div className="token-number">
              {currentPatient ? currentPatient.token : "--"}
            </div>

            {currentPatient ? (
              <>
                <h3>{currentPatient.name}</h3>
                <p>{currentPatient.department} Department</p>
              </>
            ) : (
              <p>No patient currently being served</p>
            )}

            <div className="action-buttons">
              <button className="next-btn" onClick={callNext}>
                ▶ Call Next
              </button>

              <button className="complete-btn" onClick={completePatient}>
                ✓ Complete
              </button>

              <button className="skip-btn" onClick={skipPatient}>
                ⏭ Skip
              </button>
            </div>

          </div>

          {/* QUEUE SUMMARY */}
          <div className="queue-summary">

            <h2>Queue Overview</h2>

            <div className="department">
              <div>
                <strong>General</strong>
                <p>General Medicine</p>
              </div>
              <span>2</span>
            </div>

            <div className="department">
              <div>
                <strong>Cardiology</strong>
                <p>Heart Care</p>
              </div>
              <span>1</span>
            </div>

            <div className="department">
              <div>
                <strong>Pediatrics</strong>
                <p>Child Care</p>
              </div>
              <span>1</span>
            </div>

            <div className="department">
              <div>
                <strong>ENT</strong>
                <p>Ear, Nose & Throat</p>
              </div>
              <span>1</span>
            </div>

          </div>

        </section>

        {/* QUEUE TABLE */}
        <section className="table-card">

          <div className="table-header">
            <div>
              <h2>Patient Queue</h2>
              <p>Today's active queue</p>
            </div>

            <button className="add-btn">
              + Add Patient
            </button>
          </div>

          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>Token</th>
                  <th>Patient</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {queue.map((patient) => (

                  <tr key={patient.token}>

                    <td>
                      <strong>{patient.token}</strong>
                    </td>

                    <td>{patient.name}</td>

                    <td>{patient.department}</td>

                    <td>
                      <span
                        className={`status ${patient.status.toLowerCase()}`}
                      >
                        {patient.status}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

      </main>
    </div>
  );
}

export default App;