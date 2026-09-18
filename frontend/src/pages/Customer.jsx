import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Customer.css";

function Customer() {
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleJoinQueue = () => {
    setLoading(true);
    setError("");

    // Simulate backend request
    setTimeout(() => {
      setLoading(false);
      setJoined(true);
    }, 1000);
  };

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
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </header>

      {/* Dashboard Content */}
      <div className="dashboard-content">

        <h1>Customer Dashboard</h1>

        <p className="welcome">
          Welcome! Track your queue status and waiting time.
        </p>

        {/* Queue Cards */}
        <div className="queue-cards">

          <div className="queue-card">
            <h3>Your Token</h3>
            <p>{joined ? "A-125" : "-"}</p>
          </div>

          <div className="queue-card">
            <h3>Current Token</h3>
            <p>A-121</p>
          </div>

          <div className="queue-card">
            <h3>People Ahead</h3>
            <p>{joined ? "3" : "-"}</p>
          </div>

          <div className="queue-card">
            <h3>Estimated Wait</h3>
            <p>{joined ? "15 min" : "-"}</p>
          </div>

        </div>

        {/* Queue Status */}
        <div className="queue-status">
          <h3>Queue Status</h3>
          <p>🟢 Queue is Active</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        {/* Join Queue / Success */}
        {!joined ? (
          <button
            className="join-button"
            onClick={handleJoinQueue}
            disabled={loading}
          >
            {loading ? "Joining Queue..." : "Join Queue"}
          </button>
        ) : (
          <span className="success-message">
            ✅ Successfully joined the queue!
          </span>
        )}

        {/* View Queue */}
        <button
          className="view-queue-button"
          onClick={() => navigate("/queue")}
        >
          View Queue
        </button>

      </div>
    </div>
  );
}

export default Customer;