export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';


export const TMDB_IMAGE_SIZES = {
  poster: {
    small: `${TMDB_IMAGE_BASE_URL}/w185`,
    medium: `${TMDB_IMAGE_BASE_URL}/w342`,
    large: `${TMDB_IMAGE_BASE_URL}/w500`,
    original: `${TMDB_IMAGE_BASE_URL}/original`,
  },
  backdrop: {
    small: `${TMDB_IMAGE_BASE_URL}/w300`,
    medium: `${TMDB_IMAGE_BASE_URL}/w780`,
    large: `${TMDB_IMAGE_BASE_URL}/w1280`,
    original: `${TMDB_IMAGE_BASE_URL}/original`,
  },
};

export const TMDB_ENDPOINTS = {
  movies: {
    popular: '/movie/popular',
    topRated: '/movie/top_rated',
    upcoming: '/movie/upcoming',
    details: (id: number) => `/movie/${id}`,
    credits: (id: number) => `/movie/${id}/credits`,
    videos: (id: number) => `/movie/${id}/videos`,
    similar: (id: number) => `/movie/${id}/similar`,
    search: '/search/movie',
  },
  genres: {
    list: '/genre/movie/list',
  },
}; 