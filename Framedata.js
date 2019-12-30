import React from 'react';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';

class Framedata extends React.Component {
    render() {
        return (
        <Image source={{uri: 'https://i.ibb.co/Wv8RdGp/Bez-tytu-u.png' }}
        />
      );
    }
}

export default withNavigation(Framedata);