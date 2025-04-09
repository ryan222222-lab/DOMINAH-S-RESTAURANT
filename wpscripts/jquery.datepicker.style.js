function copyCss(src,dst){var rules=$.stylesheet(src).rules();for(var i=0;i<rules.length;++i){var style=rules[i].style;for(var j=0;j<style.length;++j){var name=$.stylesheet.camelCase(style[j.toString()]);$.stylesheet(dst,name,style[name]);}}}function setDatepickerCss(input){copyCss('.ui-'+input.id+'-widget','.ui-widget');copyCss('.ui-'+input.id+'-widget .ui-'+input.id+'-widget','.ui-widget .ui-widget');copyCss('.ui-'+input.id+'-widget input, .ui-'+input.id+'-widget select, .ui-'+input.id+'-widget textarea, .ui-'+input.id+'-widget button','.ui-widget input, .ui-widget select, .ui-widget textarea, .ui-widget button');copyCss('.ui-'+input.id+'-widget-content','.ui-widget-content');copyCss('.ui-'+input.id+'-widget-content a','.ui-widget-content a');copyCss('.ui-'+input.id+'-widget-header','.ui-widget-header');copyCss('.ui-'+input.id+'-widget-header a','.ui-widget-header a');copyCss('.ui-'+input.id+'-state-default, .ui-'+input.id+'-widget-content .ui-'+input.id+'-state-default, .ui-'+input.id+'-widget-header .ui-'+input.id+'-state-default','.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default');copyCss('.ui-'+input.id+'-state-default a, .ui-'+input.id+'-state-default a:link, .ui-'+input.id+'-state-default a:visited','.ui-state-default a, .ui-state-default a:link, .ui-state-default a:visited');copyCss('.ui-'+input.id+'-state-active, .ui-'+input.id+'-widget-content .ui-'+input.id+'-state-active, .ui-'+input.id+'-widget-header .ui-'+input.id+'-state-active','.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active');copyCss('.ui-'+input.id+'-state-active a, .ui-'+input.id+'-state-active a:link, .ui-'+input.id+'-state-active a:visited','.ui-state-active a, .ui-state-active a:link, .ui-state-active a:visited');copyCss('.ui-'+input.id+'-state-hover, .ui-'+input.id+'-widget-content .ui-'+input.id+'-state-hover, .ui-'+input.id+'-widget-header .ui-'+input.id+'-state-hover, .ui-'+input.id+'-state-focus, .ui-'+input.id+'-widget-content .ui-'+input.id+'-state-focus, .ui-'+input.id+'-widget-header .ui-'+input.id+'-state-focus','.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus');copyCss('.ui-'+input.id+'-state-hover a, .ui-'+input.id+'-state-hover a:hover','.ui-state-hover a, .ui-state-hover a:hover');copyCss('.ui-'+input.id+'-icon','.ui-icon');}