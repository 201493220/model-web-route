export const chooseTheme = function(themeVal) {
  var itemPath = '/static/theme/' + themeVal + '.css'
  var _theme = document.getElementById('gn_head_theme_id')
  if (_theme) {
    _theme.href = itemPath
  } else {
    var head = document.getElementsByTagName('head')[0]
    var link = document.createElement('link')
    link.href = itemPath
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.id = 'gn_head_theme_id'
    head.appendChild(link)
  }
}
