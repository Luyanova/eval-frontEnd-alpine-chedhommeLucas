import Alpine from "alpinejs";
import Slider from './components/Slider.js';
import Gallery from './components/Gallery.js';
import recipeCounter from './components/recipeCounter.js'; 

import intersect from '@alpinejs/intersect';

window.alpine = Alpine;

Alpine.plugin(intersect);

Alpine.data('recipeCounter', recipeCounter);
Alpine.data('Slider', Slider);
Alpine.data('Gallery', Gallery);

Alpine.start();
