import "../styles/globals.css";
import Head from "next/head";

/* import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
 */
/* const reducers = combineReducers({ reducername });

const persistConfig = { key: "hackatweet", storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store); */

function App({ Component, pageProps }) {
  return (
    <>
       
        <Head>
          <title>Next.js App</title>
        </Head>
        <Component {...pageProps} />
      
</>
   );
}

export default App;
