const API_URL = 'https://fe-assignment.vaimo.net/';

export function wait(delay = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export const fetchData = () => {
  return wait(0).then(() =>
    fetch(`${API_URL}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        return response.json();
      })
      .catch((error) => console.error('Error:', error))
  );
};
