// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними.
// Використовуйте Generics для типізації повернутих даних.

// import axios from "axios";

// async function fetchData(url) {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface Data {
  id: number;
  name: string;
}

const url = "https://api.example.com/data";
fetchData<Data>(url)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
