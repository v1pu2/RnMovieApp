# React Native Project RnMovieApp

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [@react-navigation/native](https://github.com/react-navigation/react-navigation) navigation library.
- [@react-navigation/bottom-tabs](https://github.com/react-navigation/react-navigation) bottom tab navigation library.
- [@react-navigation/native-stack](https://github.com/react-navigation/react-navigation) navigation library.
- [moment](https://github.com/moment/moment) for date formatting.
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) to render content within the safe area boundaries of a device like notches and iOS devices.

## Usage

### Folder structure

Follows a very simple project structure:

  - `src`: This folder is the main container of all the code inside the application.
  - `component`: Folder to store any common component that is used throughout the app.
  - `containers`: Folder to store all the stack screens.
  - `screens`:Folder to store all the screens.
  - `services`: Folder to store all the network logic.
  - `App.js`: The main component that starts the whole app.
  - `index.js`: Entry point of the application as per React-Native standards.

### Styleguide

For coding styling, use `StyleSheet` of React-native.

### Components

Components are the basic blocks of a react native application, but since we aim to minimize development complexity, all the components are at the same nesting level.


### Services folder and API connection handler

To keep the networking layer simple, `Axios` is used.

While communicating with a network, just create a function to manage the operation and group according to the kind of transaction inside a service file.
While the data transfer between the API and the app is working, we have used try and catch for the result of the operation.

## Containers and Screens

- In this folder, applied the main objects for the composition architecture. View of each screen by using component, constants, theme and hooks.
- In the MovieList screen, call api to get all Movies name with images and in Detail screen, show the background image and detail view with animation.
- In the TopRanked MovieList screen, call api and get the all top movies with image and title and in Detail screen show the background image and detail view with animation.
- In the listing screen, movie can also delete on click of button on specific item.
