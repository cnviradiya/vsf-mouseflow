import { Logger } from '@vue-storefront/core/lib/logger'

// This function will be fired both on server and client side context after registering other parts of the module
declare global {
  interface Window { Mouseflow: any; }
}

export function afterRegistration({ Vue, config, store, isServer }): any {

  if( !config.mouseflow || !config.mouseflow.website_id ) {

    Logger.warn('No mouseflow config or mouseflow website_id found.', 'Mouseflow')();
    return;

  }

  var msfWebsiteId = config.mouseflow.website_id;
  
  if (!isServer) {

    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = '';

    if( typeof config.mouseflow.cross_domain != 'undefined' && config.mouseflow.cross_domain ) {
      script.innerHTML = `var mouseflowPath = window.location.hostname + window.location.pathname; var mouseflowCrossDomainSupport = true;`
    }

    script.innerHTML += `window._mfq = window._mfq || []; (function() { var mf = document.createElement("script"); mf.type = "text/javascript"; mf.async = true; mf.src = "//cdn.mouseflow.com/projects/${msfWebsiteId}.js"; document.getElementsByTagName("head")[0].appendChild(mf); })();`
    
    head.appendChild(script);
  }

}
