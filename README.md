# CSS Color Scheme Change (light-dark)

## Description

The project implements CSS color scheme change functionality for switching between auto, light and dark modes.

- The `html` element uses `color-scheme` css property with "light dark". This setting by default uses the system selected color scheme.

- The `color` and `background-color` properties uses `light-dark()` to recieves a color for light and a different one for dark mode. With this configuration there's no need to use media queries to change colors depending of the selected mode.

- The Navbar component has a selector with "auto", "light" and "dark". When the user changes the mode it gets stored on localStorage to persist the selection.
