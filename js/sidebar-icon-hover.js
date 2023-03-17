const colors = {
  default: '4D4D4D',
  pink: 'FFC0CB',
};

const getIconFromEvent = (e) => {
  return e.srcElement.nodeName === "IMG" ? e.srcElement : e.srcElement.querySelector('img');
};

const updateIconColor = (icon, fromColor, toColor) => {
  return icon.setAttribute('src', icon.src.replace(fromColor, toColor));
};

const handleIconHover = (e) => {
  const icon = getIconFromEvent(e);
  if(!icon) return;

  switch(e.type) {
    case 'mouseover':
      updateIconColor(icon, colors.default, colors.pink);
      break;
    case 'mouseout':
      updateIconColor(icon, colors.pink, colors.default);
      break;
    default:
      break;
  };
}