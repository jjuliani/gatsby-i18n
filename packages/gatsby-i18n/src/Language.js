import React, { Component } from 'react';
import { navigate, withPrefix } from 'gatsby';

import { I18nConsumer } from './I18nContext';

class Language extends Component {
  handleChangeLng = newLng => {
    const { originalPath } = this.props;
    //const newUrl = withPrefix(`/${newLng}${originalPath}`);
    const newUrl = `/${newLng}${originalPath}`;
    navigate(newUrl);
  };

  render() {
    const { availableLngs, children, lng } = this.props;
    return children({ lng, changeLng: this.handleChangeLng, availableLngs });
  }
}

export default props => (
  <I18nConsumer>
    {lngProps => <Language {...lngProps} {...props} />}
  </I18nConsumer>
);
