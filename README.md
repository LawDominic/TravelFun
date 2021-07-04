<h1 align="center">
  <br>
  <img src="./app/assets/icon.png" alt="TravelFun" width="200">
  <br>
  TravelFun
  <br>
</h1>

<h4 align="center">A concept mobile app for tourists - providing information for places to stay and eat.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#upcoming-features">Upcoming Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a>
</p>

## Key Features

* User authentication with registration and login functionality
* Adding an entry
* Favoriting an entry
* Removing an entry from your favorites
* Adding a review to an entry

## Upcoming Features

- [] User authentication with Firebase
- [] Data storage with Firestore
- [] More coming soon!

## How To Use

This application is currently accessible through the Android Studio AVD Manager. To get started with this, follow the steps below. 

1. Install [Java SE Development Kit (JDK)](https://www.oracle.com/au/java/technologies/javase/javase-jdk8-downloads.html)
2. Install [Android Studio](https://developer.android.com/studio)
3. During the Android Studio installation process, ensure that `Android SDK`, `Android SDK Platform` and `Android Virtual Device` boxes are checked. Also ensure that [Hyper-V is enabled](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html).
4. Add the `ANDROID_HOME` user environment variable pointing to `%LOCALAPPDATA%\Android\Sdk`
5. Similarly, add `%LOCALAPPDATA%\Android\Sdk\platform-tools` as a Path variable.

Once the software has been installed, proceed with the following.

```bash
# Clone the repository
$ git clone https://github.com/LawDominic/TravelFun

# Go into the directory
$ cd TravelFun

# Install dependencies
$ npm install

# Start the app
$ npx react-native start

# Start the emulator
$ npx react-native run-android
```

## Credits

This application uses the following packages:

- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)
- [React Native Rating Element](https://github.com/ui-ninja/react-native-rating-element)
- [Yup](https://github.com/jquense/yup)