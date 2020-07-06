import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'
import English from './data/english'
 
Vue.use(MLInstaller)
 
export default new MLCreate({
  initial: 'english',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('english').create(English),
 
    // new MLanguage('spanish').create({
    //   title: 'Oi {0}!',
    //   msg: 'Você tem {f} amigos e {l} curtidas'
    // })
  ]
})