import { createRoot } from 'react-dom/client'
import './assets/css/base.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './stores'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
