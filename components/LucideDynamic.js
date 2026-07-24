"use strict";
// Auto-generated runtime lucide-icon resolver.
// Renders a lucide icon by name from a bundled SVG-path registry — no lucide
// dependency needed in the generated app.
var React = require('react');
var RN = require('react-native');
var Svg = require('react-native-svg');

var REGISTRY = {
  'flag': '<Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line>',
  'check': '<Path d="M20 6 9 17l-5-5"></Path>',
  'check-circle': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'check-circle-2': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'circle-check': '<Circle cx="12" cy="12" r="10"></Circle><Path d="m9 12 2 2 4-4"></Path>',
  'x': '<Path d="M18 6 6 18"></Path><Path d="m6 6 12 12"></Path>',
  'x-circle': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'circle-x': '<Circle cx="12" cy="12" r="10"></Circle><Path d="m15 9-6 6"></Path><Path d="m9 9 6 6"></Path>',
  'circle': '<Circle cx="12" cy="12" r="10"></Circle>',
  'dot': '<Circle cx="12.1" cy="12.1" r="1"></Circle>',
  'alert-triangle': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'alert-circle': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'info': '<Circle cx="12" cy="12" r="10"></Circle><Path d="M12 16v-4"></Path><Path d="M12 8h.01"></Path>',
  'help-circle': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'home': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'inbox': '<Polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></Polyline><Path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></Path>',
  'bell': '<Path d="M10.268 21a2 2 0 0 0 3.464 0"></Path><Path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></Path>',
  'search': '<Circle cx="11" cy="11" r="8"></Circle><Path d="m21 21-4.3-4.3"></Path>',
  'user': '<Path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></Path><Circle cx="12" cy="7" r="4"></Circle>',
  'users': '<Path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></Path><Circle cx="9" cy="7" r="4"></Circle><Path d="M22 21v-2a4 4 0 0 0-3-3.87"></Path><Path d="M16 3.13a4 4 0 0 1 0 7.75"></Path>',
  'settings': '<Path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></Path><Circle cx="12" cy="12" r="3"></Circle>',
  'clipboard': '<Rect width="8" height="4" x="8" y="2" rx="1" ry="1"></Rect><Path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></Path>',
  'clipboard-check': '<Rect width="8" height="4" x="8" y="2" rx="1" ry="1"></Rect><Path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></Path><Path d="m9 14 2 2 4-4"></Path>',
  'clipboard-list': '<Rect width="8" height="4" x="8" y="2" rx="1" ry="1"></Rect><Path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></Path><Path d="M12 11h4"></Path><Path d="M12 16h4"></Path><Path d="M8 11h.01"></Path><Path d="M8 16h.01"></Path>',
  'file': '<Path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></Path><Path d="M14 2v4a2 2 0 0 0 2 2h4"></Path>',
  'file-text': '<Path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></Path><Path d="M14 2v4a2 2 0 0 0 2 2h4"></Path><Path d="M10 9H8"></Path><Path d="M16 13H8"></Path><Path d="M16 17H8"></Path>',
  'file-check': '<Path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></Path><Path d="M14 2v4a2 2 0 0 0 2 2h4"></Path><Path d="m9 15 2 2 4-4"></Path>',
  'folder': '<Path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></Path>',
  'chevron-left': '<Path d="m15 18-6-6 6-6"></Path>',
  'chevron-right': '<Path d="m9 18 6-6-6-6"></Path>',
  'chevron-up': '<Path d="m18 15-6-6-6 6"></Path>',
  'chevron-down': '<Path d="m6 9 6 6 6-6"></Path>',
  'arrow-left': '<Path d="m12 19-7-7 7-7"></Path><Path d="M19 12H5"></Path>',
  'arrow-right': '<Path d="M5 12h14"></Path><Path d="m12 5 7 7-7 7"></Path>',
  'arrow-up': '<Path d="m5 12 7-7 7 7"></Path><Path d="M12 19V5"></Path>',
  'arrow-down': '<Path d="M12 5v14"></Path><Path d="m19 12-7 7-7-7"></Path>',
  'plus': '<Path d="M5 12h14"></Path><Path d="M12 5v14"></Path>',
  'minus': '<Path d="M5 12h14"></Path>',
  'edit': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'trash': '<Path d="M3 6h18"></Path><Path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></Path><Path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></Path>',
  'trash-2': '<Path d="M3 6h18"></Path><Path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></Path><Path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></Path><Line x1="10" x2="10" y1="11" y2="17"></Line><Line x1="14" x2="14" y1="11" y2="17"></Line>',
  'star': '<Path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></Path>',
  'heart': '<Path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></Path>',
  'bookmark': '<Path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></Path>',
  'eye': '<Path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></Path><Circle cx="12" cy="12" r="3"></Circle>',
  'eye-off': '<Path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></Path><Path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></Path><Path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></Path><Path d="m2 2 20 20"></Path>',
  'lock': '<Rect width="18" height="11" x="3" y="11" rx="2" ry="2"></Rect><Path d="M7 11V7a5 5 0 0 1 10 0v4"></Path>',
  'unlock': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'key': '<Path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></Path><Path d="m21 2-9.6 9.6"></Path><Circle cx="7.5" cy="15.5" r="5.5"></Circle>',
  'calendar': '<Path d="M8 2v4"></Path><Path d="M16 2v4"></Path><Rect width="18" height="18" x="3" y="4" rx="2"></Rect><Path d="M3 10h18"></Path>',
  'clock': '<Circle cx="12" cy="12" r="10"></Circle><Polyline points="12 6 12 12 16 14"></Polyline>',
  'map-pin': '<Path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></Path><Circle cx="12" cy="10" r="3"></Circle>',
  'phone': '<Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></Path>',
  'mail': '<Rect width="20" height="16" x="2" y="4" rx="2"></Rect><Path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></Path>',
  'message-circle': '<Path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></Path>',
  'shopping-cart': '<Circle cx="8" cy="21" r="1"></Circle><Circle cx="19" cy="21" r="1"></Circle><Path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></Path>',
  'shopping-bag': '<Path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></Path><Path d="M3 6h18"></Path><Path d="M16 10a4 4 0 0 1-8 0"></Path>',
  'package': '<Path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></Path><Path d="M12 22V12"></Path><Path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></Path><Path d="m7.5 4.27 9 5.15"></Path>',
  'camera': '<Path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></Path><Circle cx="12" cy="13" r="3"></Circle>',
  'image': '<Rect width="18" height="18" x="3" y="3" rx="2" ry="2"></Rect><Circle cx="9" cy="9" r="2"></Circle><Path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></Path>',
  'video': '<Path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></Path><Rect x="2" y="6" width="14" height="12" rx="2"></Rect>',
  'mic': '<Path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></Path><Path d="M19 10v2a7 7 0 0 1-14 0v-2"></Path><Line x1="12" x2="12" y1="19" y2="22"></Line>',
  'menu': '<Line x1="4" x2="20" y1="12" y2="12"></Line><Line x1="4" x2="20" y1="6" y2="6"></Line><Line x1="4" x2="20" y1="18" y2="18"></Line>',
  'more-horizontal': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'more-vertical': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'download': '<Path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></Path><Polyline points="7 10 12 15 17 10"></Polyline><Line x1="12" x2="12" y1="15" y2="3"></Line>',
  'upload': '<Path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></Path><Polyline points="17 8 12 3 7 8"></Polyline><Line x1="12" x2="12" y1="3" y2="15"></Line>',
  'share': '<Path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></Path><Polyline points="16 6 12 2 8 6"></Polyline><Line x1="12" x2="12" y1="2" y2="15"></Line>',
  'link': '<Path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></Path><Path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></Path>',
  'external-link': '<Path d="M15 3h6v6"></Path><Path d="M10 14 21 3"></Path><Path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></Path>',
  'activity': '<Path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></Path>',
  'bar-chart': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'pie-chart': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'trending-up': '<Polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></Polyline><Polyline points="16 7 22 7 22 13"></Polyline>',
  'sun': '<Circle cx="12" cy="12" r="4"></Circle><Path d="M12 2v2"></Path><Path d="M12 20v2"></Path><Path d="m4.93 4.93 1.41 1.41"></Path><Path d="m17.66 17.66 1.41 1.41"></Path><Path d="M2 12h2"></Path><Path d="M20 12h2"></Path><Path d="m6.34 17.66-1.41 1.41"></Path><Path d="m19.07 4.93-1.41 1.41"></Path>',
  'moon': '<Path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></Path>',
  'cloud': '<Path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></Path>',
  'wifi': '<Path d="M12 20h.01"></Path><Path d="M2 8.82a15 15 0 0 1 20 0"></Path><Path d="M5 12.859a10 10 0 0 1 14 0"></Path><Path d="M8.5 16.429a5 5 0 0 1 7 0"></Path>',
  'battery': '<Rect width="16" height="10" x="2" y="7" rx="2" ry="2"></Rect><Line x1="22" x2="22" y1="11" y2="13"></Line>',
  'shield': '<Path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></Path>',
  'shield-check': '<Path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></Path><Path d="m9 12 2 2 4-4"></Path>',
  'layout-grid': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'layout-list': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect><Path d="M14 4h7"></Path><Path d="M14 9h7"></Path><Path d="M14 15h7"></Path><Path d="M14 20h7"></Path>',
  'layers': '<Path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></Path><Path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></Path><Path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></Path>',
  'grid': '<Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect>',
  'list': '<Path d="M3 12h.01"></Path><Path d="M3 18h.01"></Path><Path d="M3 6h.01"></Path><Path d="M8 12h13"></Path><Path d="M8 18h13"></Path><Path d="M8 6h13"></Path>'
};

function normalizeName(name) {
  if (!name || typeof name !== 'string') return '';
  return name.trim().toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-');
}

function LucideDynamic(props) {
  var size = Number(props.size) || 20;
  var color = props.color || '#64748B';
  var strokeWidth = Number(props.strokeWidth) || 2;
  var name = normalizeName(props.name);
  var inner = REGISTRY[name] || REGISTRY['circle'];

  // Use a plain div + dangerouslySetInnerHTML on web for crisp rendering,
  // and a parsed Svg path on native. Both keep alignment consistent.
  if (typeof document !== 'undefined') {
    return React.createElement('div', {
      style: { width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' },
      dangerouslySetInnerHTML: {
        __html: '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="' + strokeWidth + '" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>'
      }
    });
  }

  // Native fallback: render via react-native-svg using a raw <SvgXml>.
  var SvgXml = Svg.SvgXml;
  var xml = '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="' + strokeWidth + '" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>';
  return React.createElement(RN.View, { style: { width: size, height: size, alignItems: 'center', justifyContent: 'center' } },
    React.createElement(SvgXml, { xml: xml, width: size, height: size })
  );
}

module.exports = LucideDynamic;
module.exports.default = LucideDynamic;
