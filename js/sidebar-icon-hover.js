const defaultColor = '4d4d4d'
const pink = 'FFC0CB'

iconHover = (e) => {
  let icon = e.querySelector('img')
  icon.setAttribute('src', icon.src.replace(defaultColor, pink))
}

const iconUnhover = (e) => {
  let icon = e.querySelector('img')
  icon.setAttribute('src', icon.src.replace(pink, defaultColor))
}
