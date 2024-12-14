import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Theme } from '@chakra-ui/react';
import { Provider } from "./components/ui/provider";
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <Theme appearance="light" colorScheme="light">
        <App />
      </Theme>
    </Provider>
  </StrictMode>
);
