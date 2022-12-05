import { createApp } from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faPenToSquare, faTrash, faPaperPlane, faKiwiBird} from '@fortawesome/free-solid-svg-icons'
library.add(faPenToSquare, faTrash, faPaperPlane, faKiwiBird)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import 'toastr/build/toastr.min.js';

