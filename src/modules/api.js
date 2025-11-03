const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'Game with ID: ABC123 created.'; // 👈 yahan apna gameId likhna na bhoolna!

// send score
export const addScore = async (user, score) => {
  try {
    const response = await fetch(`${baseUrl}${gameId}/scores/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, score }),
    });

    const result = await response.json();
    console.log('✅ Score added:', result);
    return result;
  } catch (error) {
    console.error('❌ Error sending score:', error);
  }
};

// get scores
export const getScores = async () => {
  try {
    const response = await fetch(`${baseUrl}${gameId}/scores/`);
    const data = await response.json();
    return data.result || [];
  } catch (error) {
    console.error('❌ Error fetching scores:', error);
    return [];
  }
};
