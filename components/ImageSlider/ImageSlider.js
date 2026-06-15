// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// import styles from "./ImageSlider.module.css";

// export default function ImageSlider({ images }) {
//   return (
//     <Swiper
//       modules={[Autoplay]}
//       spaceBetween={8}
//       slidesPerView={1}
//       loop={true}
//       autoplay={{
//         delay: 3500,
//         disableOnInteraction: false,
//       }}
//       breakpoints={{
//         768: {
//           slidesPerView: 3,
//         },
//       }}
//       className={styles.slider}
//     >
//       {images.map((image, index) => (
//         <SwiperSlide key={index}>
//           <img src={image.src} alt={image.alt} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./ImageSlider.module.css";

export default function ImageSlider({ images }) {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={10}
        slidesPerView={3}
        className={styles.slider}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.src} alt={img.alt} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}