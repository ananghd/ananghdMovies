// Welcome
// Swipe Labels
// General
import appLogo from './assets/images/logo.png';
import swipeLike from './assets/images/swipe_labels/like.png';
import swipeSave from './assets/images/swipe_labels/save.png';
import swipeSkip from './assets/images/swipe_labels/skip.png';
import welcomeBumblebee from './assets/images/welcome_background_images/bumblebee.jpg';
// Types
import { SocialActionType } from './redux/explore/types';

const swipeLabels: Record<SocialActionType, number> = {
  favorite: swipeLike,
  watchlist: swipeSave,
  skip: swipeSkip,
};

export default {
  welcomeArray: [
    welcomeBumblebee,
  ],
  swipeLabels,
  appLogo,
};
