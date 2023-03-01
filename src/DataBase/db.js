import xiaomi_s1 from "../assets/images/Xiaomi s1.png";
import xiaomi_s2 from "../assets/images/Xiaomi s2.png";
import xiaomi_s3 from "../assets/images/Xiaomi s3.png";
import xiaomi_mi1 from "../assets/images/xiaomi mi1.png";
import xiaomi_mi2 from "../assets/images/xiaomi mi2.png";
import xiaomi_mi3 from "../assets/images/xiaomi mi3.png";
import xiaomi_mi4 from "../assets/images/xiaomi mi4.png";

import apple_serie6_1 from "../assets/images/apple series6 1.png";
import apple_serie6_2 from "../assets/images/apple serie6 2.png";
import apple_serieSE1 from "../assets/images/apple serie SE1.png";
import apple_serieSE2 from "../assets/images/apple serie SE2.png";
import apple_serieSE3 from "../assets/images/apple serie SE3.png";

export const Database = [
  {
    id: 1,
    brand: "xiaomi",
    model: "Watch S1",
    images: [xiaomi_s1, xiaomi_s3, xiaomi_s2],
    gender: ["مردانه", "زنانه"],
    usage: ["رسمی", "اسپرت", "روزمره"],
    color: ["Blue", "whaite", "Black", "grean"],
    favorite: 0,
    quantity: 0,
  },
  {
    id: 2,
    brand: "xiaomi",
    model: "Mi watch",
    description: "",
    color: ["Blue", "whaite", "Black", "grean"],
    images: [xiaomi_mi1, xiaomi_mi2, xiaomi_mi3, xiaomi_mi4],
    favorite: 0,
    quantity: 0,
  },
  {
    id: 3,
    brand: "xiaomi",
    model: "",
    description: "",
    images: [],
    favorite: 0,
    quantity: 0,
  },
  {
    id: 4,
    brand: "Apple",
    model: "serie 6",
    description: "",
    images: [apple_serie6_1,apple_serie6_2],
    favorite: 0,
    quantity: 0,
  },
  {
    id: 5,
    brand: "Apple",
    model: "serie SE",
    description: "",
    images: [apple_serieSE1, apple_serieSE2, apple_serieSE3,],
    favorite: 0,
    quantity: 0,
  },
];
