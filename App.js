import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator'

// import * as SQLite from 'expo-sqlite';

// const db = SQLite.openDatabase('db.db')

export default function App() {

  // db.transaction(tx => {
  //   tx.executeSql(
  //     'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, fullName TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password text NOT NULL)'
  //   );
  // });

  // db.transaction(
  //   tx => {
  //     tx.executeSql(
  //       'INSERT INTO users (fullName, email, password) values (?, ?)', ['admin', 'admin@admin.com', 'admin']
  //     )
  //   }
  // )

  return (  
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  )
}


