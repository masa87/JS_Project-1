// // ------------ wyszukiwanie filmów po tytule

// export async function fetchMovie(title) {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/search/movie?api_key=b8c69e73ca2b06d4109ce06d6df842ad&query=${title}`
//     );
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return await response.json();
//   } catch (err) {
//     return console.log(err);
//   }
// }

// // ----------------wyświetlanie topRated filmów
// export async function fetchPopularMovie() {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/trending/movie/week?api_key=b8c69e73ca2b06d4109ce06d6df842ad`
//     );
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return await response.json();
//   } catch (err) {
//     return console.log(err);
//   }
// }

// // export { fetchMovie, fetchPopularMovie };
