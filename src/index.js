import { headerComponent } from "./components/header.js";
import { mainComponent } from "./components/main.js";
import { footerComponent } from "./components/footer.js";

// const containerViews = document.querySelector('#root');
// containerViews.appendChild(await headerComponent());
// containerViews.appendChild(await mainComponent());
// containerViews.appendChild(footerComponent());


await headerComponent()
await mainComponent()
await footerComponent()