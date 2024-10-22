import { createRoot } from 'react-dom/client';

import App from "./App";
import "swiper/css"
import "swiper/css/navigation";
import "@shopify/polaris/build/esm/styles.css"
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <App/>
);




