import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Customer.css";


function QueueDisplay() {
  const navigate = useNavigate();

 const [queue, setQueue] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/api/queues")
    .then((response) => response.json())
    .then((data) => {
      setQueue(data);
    })
    .catch((error) => {
      console.error("Error fetching queue:", error);
    });
}, []);

  return (
    <div className="customer-page">

      {/* Header */}
      <header className="dashboard-header">
        <div>
          <h2>QueueCare</h2>
          <span>Hospital Queue Management</span>
        </div>

        <button
          className="logout-button"
          onClick={() => navigate("/customer")}
        >
          Dashboard
        </button>
      </header>

      <div className="dashboard-content">

        {/* Page Heading */}
        <div className="queue-page-heading">
          <div>
            <h1>Queue Display</h1>
            <p className="welcome">
              Monitor the current queue and your position
            </p>
          </div>

          <div className="active-badge">
            <span></span>
            Queue Active
          </div>
        </div>

        {/* Now Serving */}
        <div className="now-serving-card">
          <div>
            <p className="now-serving-label">NOW SERVING</p>
            <h2>A-121</h2>
            <p className="serving-message">
              Please proceed to the consultation counter
            </p>
          </div>

          <div className="counter-info">
            <span>Counter</span>
            <strong>01</strong>
          </div>
        </div>

        {/* Statistics */}
        <div className="queue-cards">

          <div className="queue-card">
            <h3>Your Token</h3>
            <p className="purple-value">A-125</p>
          </div>

          <div className="queue-card">
            <h3>People Ahead</h3>
            <p>3</p>
          </div>

          <div className="queue-card">
            <h3>Estimated Wait</h3>
            <p>15 min</p>
          </div>

          <div className="queue-card">
            <h3>Queue Status</h3>
            <p className="green-value">Active</p>
          </div>

        </div>

        {/* Queue List */}
        <div className="queue-list">

          <div className="queue-list-header">
            <div>
              <h2>Current Queue</h2>
              <p>Live position of tokens</p>
            </div>

            <span className="queue-count">
              {queue.length} Tokens
            </span>
          </div>

          <div className="queue-table-header">
            <span>Token</span>
            <span>Status</span>
          </div>

          {queue.map((item) => (
            <div
              key={item.id}
              className={`queue-item ${
                item.status === "You" ? "your-token" : ""
              }`}
            >
              <span className="token-number">
                {item.token_number}

                {item.status === "You" && (
                  <small>Your Token</small>
                )}
              </span>

              <span
                className={`status-badge ${item.status.toLowerCase()}`}
              >
                {item.status}
              </span>
            </div>
          ))}

        </div>

        {/* Back Button */}
        <button
          className="back-dashboard-button"
          onClick={() => navigate("/customer")}
        >
          ← Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default QueueDisplay;
