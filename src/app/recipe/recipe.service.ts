import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  getRecipes(): Recipe[] {
    return [
      {
        title: 'Hotdog RollUps',
        ingredients: [
          '8 (1-ounce) slices white bread such as Wonder Bread','2 tablespoons yellow mustard', '4 thin slices sharp Cheddar cheese', ],
        imageUrl:
          'https://www.allrecipes.com/thmb/Am630dWY-0P5ema-88ecVxmxAz0=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8678872-Hot-Dog-Roll-Ups-ddmfs-3x4-039-989de4fe4d4e41d0a9440d94010e536a.jpg',
      },
      {
        title: 'Fruit Pizza',
        ingredients: [ '2 ounces cream cheese, softened', '1 tablespoon confectioners sugar', '½ cup mixed fruit, such as pineapple'],
        imageUrl: 'https://www.allrecipes.com/thmb/ZNeiXOk1W05b0rJNFf39SYXmCEY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8605156_Fruit-Salad-Chopped-Bagel_Dotdash-Meredith-Food-Studios_4x3-0176878a602d46e380007823f34cbcd8.jpg',
      },
      {
        title: 'Ploughman’s Sandwich',
        ingredients: ['2 slices crusty bread', '1 teaspoon butter, softened', '2 sweet gherkin pickles, sliced', '3 slices smoked ham', '1 small tomato, sliced'],
        imageUrl: 'https://www.allrecipes.com/thmb/_JO_u8JcTJhIH2ZlpqrJSrtSliU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8737059_Ploughmans-Sandwich_Pat-Bernitt_4x3-3d238c06de714279a758dcf0f0c8fc14.jpg',
      },
      {
        title: 'Burrito with Potatoes',
        ingredients: ['1/2 pound fresh chorizo', '1/2 poblano pepper, chopped', '1/2 yellow onion, chopped','1/2 red bell pepper, chopped'],
        imageUrl: 'https://www.allrecipes.com/thmb/HjuXVnsYgeCU7ARxkZE64kY90sg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8608268_Breakfast-Burrito-with-Chorizo-and-Potatoes_Shelia-Johnson_4x3-134a39baa85e4604af72ab70c1ae932f.jpg',
      },
      {
        title: 'Asparagus and Eggs',
        ingredients: ['1 tablespoon olive oil', '1 garlic clove, finely chopped', '8 thin-stemmed asparagus stalks, trimmed', '2 large eggs'],
        imageUrl: 'https://www.allrecipes.com/thmb/OVN50SoI4YAZDdKoJxypmqvle78=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8634304_Asparagus-and-Eggs_Chef-Mo_4x3-87416a7e7cb940ea9b950dcd241b1a86.jpg',
      },
      {
        title: 'Grilled Chicken Adobo',
        ingredients: ['1 ½ cups soy sauce', '1 ½ cups water', '3 tablespoons honey', '1 ½ tablespoons minced garlic'],
        imageUrl: 'https://www.allrecipes.com/thmb/dXYvMy06tK2VLvLplJWjceg1Ozg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/808219-grilled-chicken-adobo-LatinaCook-4x3-1-5fd8dec4c1424679ab5907a61748d32b.jpg',
      },
      {
        title: 'Beef Bulgogi',
        ingredients: ['5 tablespoons soy sauce', '¼ cup chopped green onion', '2 ½ tablespoons white sugar', '2 tablespoons minced garlic', '2 tablespoons sesame oil'],
        imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Fecc54ae9f4fb8f59f781a3956916783b%2F1648214553IMG_2681.JPG&q=60&c=sc&poi=auto&orient=true&h=512',
      },
      {
        title: 'Beef Stroganoff',
        ingredients: ['1 (8 ounce) package egg noodles','1 pound ground beef','½ cup sour cream', 'salt and ground black pepper to taste','1 (10.5 ounce) can fat-free condensed cream of mushroom soup',],
        imageUrl: 'https://www.allrecipes.com/thmb/EA78yfJfcZgPgaXikJzs3j1dHHc=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/25202beef-stroganoff-iii-ddmfs-3x4-233-0f26fa477e9c446b970a32502468efc6.jpg',
      },
      {
        title: 'Fried Chicken',
        ingredients: ['2 tablespoons all-purpose flour', '2 tablespoons dry potato flakes', '½ teaspoon ground black pepper', '1 egg', '2 cups vegetable oil for frying'],
        imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3651781.jpg&q=60&c=sc&poi=auto&orient=true&h=512',
      },
      {
        title: 'Beef Stew',
        ingredients: [ '3 pounds beef stew meat, cut into 1 inch cubes','2 teaspoons salt, divided','¼ cup all-purpose flour','¼ cup butter','3 cups water',],
        imageUrl: 'https://www.allrecipes.com/thmb/pI2-XDW6RwV-3HsNcr3hvAAEouo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/49121-beef-stew-v-cookinmama-4x3-1-f22a315d032846689900cca4a2812b51.jpg',
      },
    ];
  }
}
