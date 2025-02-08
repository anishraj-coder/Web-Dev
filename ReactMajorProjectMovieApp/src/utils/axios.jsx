import axios from "axios";

export const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTZhNjhmYmZmZTdjMWUwOTNkODUwMDI0YjkyZmYwOSIsIm5iZiI6MTczODk0OTgyNi45NzgsInN1YiI6IjY3YTY0NGMyNGRjMDUyYmE1NTg1ZjcwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BbSHmnywh8BRRieClAqSGjsrwU2hOo65QSDkB-7mYrg'
      }
})

export default instance;