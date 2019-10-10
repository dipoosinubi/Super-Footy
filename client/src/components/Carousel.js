import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const styling = {
    carousel:{
        height: "10px"
    }
}
const items = [
  {
    src: 'https://images.unsplash.com/photo-1540753003857-32db1552eead?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    altText: '',
    id: "image",
    caption: '',
    header: '',
    key: '1',
    height: "10px"
  },
  {
    src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    altText: '',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: 'https://images.unsplash.com/photo-1542683305-710078a12f73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    altText: '',
    caption: '',
    header: '',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items}  style={styling.carousel} />;

export default Example;

