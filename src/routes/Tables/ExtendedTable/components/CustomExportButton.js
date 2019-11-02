import React from 'react';
import PropTypes from 'prop-types';
import {
    Button
} from "../../../../commons/components/airDashboard";

export const CustomExportCSV = ({children, onExport, ...props}) => {
    return (
        <Button
            { ...props }
            onClick={() => { onExport() }}
        >
            { children }
        </Button>
    );
}

CustomExportCSV.propTypes = {
    size: PropTypes.string,
    outline: PropTypes.bool,
    onExport: PropTypes.func,
    children: PropTypes.node
}

CustomExportCSV.defaultProps = {
    size: 'sm',
    outline: true
}