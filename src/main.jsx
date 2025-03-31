import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'; 
import { ClerkProvider } from '@clerk/clerk-react'
import '/Users/sumitkaintura/Downloads/Blogweb/src/index.css'
const clerkPubKey =
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ||
  'pk_test_dG9nZXRoZXItYmx1ZWpheS0yMS5jbGVyay5hY2NvdW50cy5kZXYk'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <App />
  </ClerkProvider>
)
