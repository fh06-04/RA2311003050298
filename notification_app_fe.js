import Log from "../logging_middleware/log";

// Example 1: API call
async function fetchNotifications() {
  Log("frontend", "info", "api", "Fetching notifications started");

  try {
    const res = await fetch("/api/notifications");
    const data = await res.json();

    Log("frontend", "info", "api", "Notifications fetched successfully");
    return data;

  } catch (err) {
    Log("frontend", "error", "api", "Failed to fetch notifications");
  }
}

