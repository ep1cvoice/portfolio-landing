/// <reference types="vite/client" />

declare module '*.jpg?format=webp&quality=80' {
  const src: string;
  export default src;
}

declare module '*.jpg?w=1920&format=webp&quality=80' {
  const src: string;
  export default src;
}

declare module '*.png?*' {
  const src: string;
  export default src;
}

declare module 'swiper/css';
declare module 'swiper/css/*';
