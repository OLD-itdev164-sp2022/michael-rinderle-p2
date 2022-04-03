import { Box, Flex } from 'rebass';

import PropTypes from 'prop-types';
import React from 'react';

export const BaseContainer = ({ children, flex = false, ...rest }) => {
    let Component = flex ? Flex : Box;
    return <Component {...rest}>{children}</Component>
}

BaseContainer.propTypes = {
    flex: PropTypes.bool,
    as: PropTypes.string,
    children: PropTypes.node.isRequired
}