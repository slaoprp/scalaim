import PrimeVue from 'primevue/config';

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/tailwind-light/theme.css'
import '../assets/css/custom.css';

import AtomsButton from 'primevue/button'


export default {
  install(app) {
    app.use(PrimeVue, { ripple: true });
    app.component('AtomsButton', AtomsButton)
  },
};
