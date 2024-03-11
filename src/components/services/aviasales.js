import axios from 'axios';

const baseUrl = 'https://aviasales-test-api.kata.academy';

const fetchTickets = async (url) => {
  try {
    const response = await axios.get(url);
    const json = response.data;
    if (json.tickets || json.stop) return { stop: json.stop, tickets: json.tickets, error: false };
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return { stop: false, tickets: [], error: true };
  }
};

const setSearchId = async () => {
  const sId = sessionStorage.getItem('searchId');
  if (sId) return sId;

  try {
    const response = await axios.get(`${baseUrl}/search`);
    const { searchId } = response.data;
    sessionStorage.setItem('searchId', searchId);
    return searchId;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
  }
};

const getTickets = async () => {
  try {
    const searchId = await setSearchId();
    const url = `${baseUrl}/tickets?searchId=${searchId}`;
    const response = await fetchTickets(url);

    if (response.stop) {
      sessionStorage.removeItem('searchId');
    }
    console.log(response);
    return response;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    // Обработка ошибки
  }
};

export default getTickets;
