// This function will be executed after entering each route.
// See https://router.vuejs.org/guide/advanced/navigation-guards.html#global-after-hooks
import { Route } from 'vue-router'

export function afterEach(to: Route, from: Route) {

  if( typeof window != 'undefined' && typeof window.Mouseflow != 'undefined' ) {
    
  }

}
