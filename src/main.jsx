import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

// ⚠️ Reemplaza esto con tu Client ID real desde Google Cloud Console
const GOOGLE_CLIENT_ID = '438789037491-4qd253v3tb5jkvrf9v41pabtjf091m94.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GoogleOAuthProvider>
);
