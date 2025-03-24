import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router";
import './global.scss'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename="/products-tz">
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
);
