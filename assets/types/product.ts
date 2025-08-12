import { ImageSourcePropType } from 'react-native';
import { Category } from './category';

export type Product = {
  id: number;
  title: string;
  slug: string;
  imagesUrl: ImageSourcePropType[];
  price: number;
  heroImage: ImageSourcePropType;
  category: Omit<Category, 'products'>;
  maxQuantity: number;
};

// export type Product = {
//   id: number;                              // A number (e.g., 1, 2, 3)
//   title: string;                           // Text (e.g., "Red T-shirt")
//   slug: string;                            // Text used in URLs (e.g., "red-tshirt")
//   imagesUrl: ImageSourcePropType[];        // An array of image sources for React Native
//   price: number;                           // Numeric price (e.g., 19.99)
//   heroImage: ImageSourcePropType;          // A single main image
//   category: Omit<Category, 'products'>;    // A Category object, but WITHOUT its 'products' property
//   maxQuantity: number;                     // The maximum number you can buy
// };
