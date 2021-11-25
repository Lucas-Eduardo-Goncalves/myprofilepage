import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    purple: {
      "900": "#070014",
      "800": "#0C0020",
      "700": "#10002b",
      "600": "#240046",
      "500": "#3c096c",
      "400": "#5a189a",
      "300": "#7b2cbf",
      "200": "#9d4edd",
      "100": "#c77dff",
      "50": "#e0aaff",
    }
  },

  fonts: {
    heading: 'Outfit',
    body: 'Outfit' 
  },

  styles: {
    global: {
      body: {
        "::-webkit-scrollbar": {
          w: "12px"
        },
        
        "::-webkit-scrollbar-track": {
          bg: "gray.800"
        },
        
        "::-webkit-scrollbar-thumb": {
          bg: "gray.500"
        },

        bg: 'purple.900',
        color: 'gray.50',
      }, 
    }
  }
});