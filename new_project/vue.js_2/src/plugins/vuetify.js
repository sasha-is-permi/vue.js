import Vue from 'vue';
import Vuetify from 'vuetify/lib';
//import Vuetify from 'vuetify';

// добавлено из каталога node_modules/vuetify/dist/
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify);

const opts = {}

export default new Vuetify(opts)