import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import './modules/user'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
