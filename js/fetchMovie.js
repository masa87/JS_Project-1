// export function fetchMovie(title) {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/550?api_key=b8c69e73ca2b06d4109ce06d6df842ad`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       console.log(response);
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// }

import axios from "axios";

export async function fetchMovie(title) {
  try {
    const response = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/movie?api_key=b8c69e73ca2b06d4109ce06d6df842ad&query=${title}`,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`error: `, error);
  }
}

fetchMovie("bond");
