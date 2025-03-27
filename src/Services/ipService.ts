import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY_GEOPIFY;

export async function fetchIpData(ip: string = '') {
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}${ip ? `&ipAddress=${ip}` : ''}`;
  const response = await fetch(url);
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.messages || 'Failed to fetch IP data');
  }
  
  return data;
}