start();

async function start() {
  try {
    const leaderboard = await fetchLeaderBoard();
    console.log(leaderboard);
  } catch {
    console.log("Our servers are down, but we will be up and running soon");
  }
}

async function fetchLeaderBoard() {
  const response = await fetch("https://fantasyquest.servers");
  return response.json();
}
