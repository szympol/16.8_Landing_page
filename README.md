[<img src="https://github.com/szympol/Awax-landing-page-slicing/blob/master/design/zadanie-awax.jpg?raw=true" align="right" alt="landing page" width="40%">](https://github.com/szympol/Awax-landing-page-slicing/)

# Awax landing page slicing

Slicing a project of a website from PSD to fully Responsive Website with JS code. This project includes:

- my own styling, grid and scripts,
- usage of external libraries,
- and a lot of fun while implementation.

Based on [PSD Awax template](https://github.com/szympol/Awax-landing-page-slicing/blob/master/design/zadanie-awax.jpg).

## Getting Started

- [View project online](https://szympol.github.io/Awax-landing-page-slicing/)

Please follow instructions below, if you are willing to run the project locally.

### Prerequisites

Both [Git](https://git-scm.com/downloads) and [Node](https://nodejs.org/en/download/) are required to run this project locally.

### Installing

Please copy and paste below commands to your Git terminal step by step to get a development env running.

Download a repository:

```node
git clone git@github.com:szympol/Awax-landing-page-slicing.git landingPage
```

Go to the project working directory:

```node
cd landingPage
```

Install all of the dependencies with the following command:

```node
npm install
```

View the project

```node
npm run watch
```

#### Under the hood of `npm run watch`

This command watches any changes in `sass/style.scss`. Once a change detected, SCSS file starts to be converted into `css/style.css` with autoprefixes attached. This command also deploys the project to the live stream on `http://localhost:3000`. Moreover, all JavaScript code written in ES6+ is converted (thanks to Babel presets) into a backwards compatible syntax in order to provide support for older browsers or environments.

## Built With

- [Glide.js](https://glidejs.com/) - a dependency-free JavaScript ES6 slider and carousel. It’s lightweight, flexible and fast. Designed to slide. No less, no more - **all sliders**;
- [Isotope](https://isotope.metafizzy.co/) - filter & sort magical layouts - **filter of 'our projects' section**;
- [Font Awesome](https://fontawesome.com/) - vector icons and social logos database;
- [jQuery](https://jquery.com/) - a fast, small, and feature-rich JavaScript library - **a count-up function of 'some facts' section**.

## Author

- **Szymon Polanowski** - [GitHub Account](https://github.com/szympol)

## License

This project is licensed under the MIT License.
