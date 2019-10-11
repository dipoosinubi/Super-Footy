import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const styling = {
    carousel:{
        height: "10px"
    }
}
const items = [
  {
    src: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.photobackgroundhd.com%2Fwp-content%2Fuploads%2F2018%2F09%2FCristiano-Ronaldo-High-Quality-Wallpapers.jpg&f=1&nofb=1',
    altText: '',
    id: "image",
    caption: '',
    header: '',
    key: '1',
  },
  {
    src:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Flongwallpapers.com%2FDesktop-Wallpaper%2Fadidas-soccer-wallpaper-high-quality-resolution-For-Desktop-Wallpaper.jpg&f=1&nofb=1',
    altText: '',
    caption: '',
    header: '',
    key: '2'
  },
  {
   
    src: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Ffc_barcelona_football_club_team-2560x1440.jpg&f=1&nofb=1',
    altText: '',
    caption: '',
    header: '',
    key: '3'
  },
  {
     src:'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1223157.jpg&f=1&nofb=1',
     altText: '',
     caption: '',
     header: '',
    key: '4'
  },
];

const Example = () => <UncontrolledCarousel items={items}  style={styling.carousel} />;

export default Example;

