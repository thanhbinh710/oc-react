var oc=oc||{};oc.components=oc.components||{};oc.components['d0e5c0bf94b2941db814fc0aac2e4ceaae2e30ea']=function(model){
  var modelHTML =  model.__html ? model.__html : '';
  var staticPath = model.reactComponent.props._staticPath;
  var props = JSON.stringify(model.reactComponent.props);
  var randomId = Math.random() * 10000000;
  var reactRootId = "oc-reactRoot-oc-react-" + randomId;
  return '<div id="'+ reactRootId +'" class="oc-reactRoot-oc-react">' + modelHTML + '</div>' +
    '<style>.oc__oc-react-styles-css__special__1jAml6AD{background:#db7093;color:#fff}</style>' +
    '<script>' +
    'window.oc = window.oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    'oc.events.fire(\'oc:cssDidMount\', \'.oc__oc-react-styles-css__special__1jAml6AD{background:#db7093;color:#fff}\');' +
      'oc.requireSeries([{"global":["Object","assign"],"url":"https://unpkg.com/es6-object-assign@1.1.0/dist/object-assign-auto.min.js","name":"Object.assign"},{"global":"PropTypes","url":"https://unpkg.com/prop-types@15.7.2/prop-types.min.js","name":"prop-types"},{"global":"React","url":"https://unpkg.com/react@16.8.5/umd/react.production.min.js","name":"react"},{"global":"ReactDOM","url":"https://unpkg.com/react-dom@16.8.5/umd/react-dom.production.min.js","name":"react-dom"}], function(){' +
        'oc.require(' +
          '["oc", "reactComponents", "b791749cafea4d13c94b72357963b9842168a715"],' + 
          '"' + staticPath + 'react-component.js",' +
          'function(ReactComponent){' +
            'var targetNode = document.getElementById("'+ reactRootId +'");' +
            'targetNode.setAttribute("id","");' +
            'ReactDOM.hydrate(React.createElement(ReactComponent,' +  props + '),targetNode);' +
          '}' +
        ');' +
      '});' +
    '});' +
  '</script>'
}