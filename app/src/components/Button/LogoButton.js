import { IconButton } from './IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeConsumer } from 'styled-components';

export const LogoButton = props => (
    <ThemeConsumer>
        {theme => <IconButton icon={theme.icons.Music} {...props} />}
    </ThemeConsumer>
)

LogoButton.propTypes = {
    variant: PropTypes.string
}