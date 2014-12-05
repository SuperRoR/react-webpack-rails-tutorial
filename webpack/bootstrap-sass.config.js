module.exports = {
  bootstrapCustomizations: "./assets/stylesheets/_bootstrap-variables-customization.scss",
  mainSass: "./_main.scss",

  // Default for the style loading is to put in your js files
  // styleLoader: "style-loader!css-loader!sass-loader";

  // ### Scripts
  // Any scripts here set to false will never make it to the client,
  // i.e. it's not packaged by webpack.
  scripts: {
    'transition': true,
    'alert': true,
    'button': true,
    'carousel': false,
    'collapse': true,
    'dropdown': true,
    'modal': false,
    'tooltip': true,
    'popover': true,
    'scrollspy': true,
    'tab': true,
    'affix': true
  },
  // ### Styles
  // Enable or disable certain less components and thus remove
  // the css for them from the build.
  styles: {
    "mixins": true,

    "normalize": true,
    "print": true,

    "scaffolding": true,
    "type": true,
    "code": true,
    "grid": true,
    "tables": true,
    "forms": true,
    "buttons": true,

    "component-animations": true,
    "glyphicons": true,
    "dropdowns": true,
    "button-groups": true,
    "input-groups": true,
    "navs": true,
    "navbar": true,
    "breadcrumbs": true,
    "pagination": true,
    "pager": true,
    "labels": true,
    "badges": true,
    "jumbotron": false,
    "thumbnails": true,
    "alerts": true,
    "progress-bars": false,
    "media": true,
    "list-group": true,
    "panels": true,
    "wells": true,
    "close": true,

    "modals": true,
    "tooltip": true,
    "popovers": true,
    "carousel": true,

    "utilities": true,
    "responsive-utilities": true
  }
};
