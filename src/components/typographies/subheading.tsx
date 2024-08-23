import { Typography } from '@mui/material';
import React from 'react';

interface SubheadingProps {
  text: string | JSX.Element;
  variant: 'regular' | 'medium';
  color?: string;
  className?: string;
  containsHtml?: boolean;
}

const themeVariantsByVariants = {
  regular: 'subheadingRegular',
  medium: 'subheadingSecondary',
} as const;

function Subheading({
  text,
  variant,
  color,
  className,
  containsHtml = false,
}: SubheadingProps): JSX.Element {
  if (containsHtml && typeof text === 'string') {
    return (
      <Typography
        className={className}
        variant={themeVariantsByVariants[variant]}
        sx={{ color }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }

  return (
    <Typography
      className={className}
      variant={themeVariantsByVariants[variant]}
      sx={{ color }}
    >
      {text}
    </Typography>
  );
}

export default Subheading;
