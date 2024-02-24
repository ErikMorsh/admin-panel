// Vuetify
// For mdi Icons you have to install @mdi/font package first and add this import here 
import '@mdi/font/css/materialdesignicons.css'

// import '@/styles/main.scss'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    display: {
        mobileBreakpoint: 'sm',
        thresholds: {
            xs: 0,
            sm: 340,
            md: 540,
            lg: 800,
            xl: 1280,
        },
    },
    theme: {
        defaultTheme: 'light',
        // variations: {
        //     colors: ['primary'],
        //     lighten: 4,
        //     darken: 4,
        // },
        themes: {
            light: {
                dark: false,
                colors: {
                    BandW: '#000000',
                    backgroundPrimary: '#F4F6F8',
                    backgroundSecondary: '#FFFFFF',
                    backgroundCardPrimary: '#F7F9F9',
                    backgroundCardSecondary: '#ECFDE6',
                    backgroundLinkPrimary: '#A2CFFF',
                    faintedText: '#777',
                    success: '#228200',
                    info: '#158DE3',
                    danger: '#E42222',
                    warning: '#FFD43A',
                }
            },
            dark: {
                colors: {
                    BandW: '#FEFEFE',
                    backgroundSecondary: '#1f262f',
                    backgroundCardPrimary: '#111827',
                    backgroundCardSecondary: '#0f172a',
                    backgroundLinkPrimary: '#0f3258',
                }
            },
        }
    },
})


export default vuetify