import * as SvgIconsComponent from "../components/icons";

/*
Icons Component Map

@param {string} slug slug
@returns {*}
*/
export const getIconComponentByName = (name) => {
  const ComponentsMap = {
    facebook: SvgIconsComponent.Facebook,
    twitter: SvgIconsComponent.Twitter,
    instagram: SvgIconsComponent.Instagram,
    youtube: SvgIconsComponent.Youtube,
  };

  if (name in ComponentsMap) {
    const IconComponent = ComponentsMap[name];
    return <IconComponent />;
  } else {
    return null;
  }
};
