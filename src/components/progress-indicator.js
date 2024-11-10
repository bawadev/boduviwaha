import React from 'react';
import { Progress, Tooltip } from 'theme-ui';


const ProgressIndicator = ({ max = 100, value = 0, tooltipLabel, styles = {} }) => (
  <Tooltip
    label={tooltipLabel || `${value} / ${max}`}
    sx={{
      fontSize: 1,
      color: 'white',
      bg: 'primary',
      px: 2,
      py: 1,
      borderRadius: '4px',
    }}
  >
    <Progress
      max={max}
      value={value}
      sx={{
        height: '8px',
        borderRadius: '4px',
        bg: 'muted',
        color: 'primary',
        ...styles,
      }}
    />
  </Tooltip>
);

export default ProgressIndicator;
