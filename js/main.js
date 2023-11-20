import { initEventSlider } from "./module/event-slider.js";
import { initMainSlider } from "./module/main-slider.js";
import { initMenu } from "./module/menu.js";
import { initNewSlider } from "./module/new-slider.js";


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initMenu();
    initNewSlider();
    initMainSlider();
    initEventSlider();

    // DOMContentLoaded
});
