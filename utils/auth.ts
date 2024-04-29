interface AuthToken {
  access_token: string;
  expires_in: number;
  token_type: string;
  obtainedAt: number;
}

const client_id = process.env.TWITCH_CLIENT_ID;
const client_secret = process.env.TWITCH_CLIENT_SECRET;
const grant_type = process.env.TWITCH_GRANT_TYPE;

async function fetchNewToken(): Promise<AuthToken> {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}`;

  const response = await fetch(url, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch token: " + response.statusText);
  }
  const token = response.json();
  return {
    ...token,
    obtainedAt: Date.now(),
  };
}
