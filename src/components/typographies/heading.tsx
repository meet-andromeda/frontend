import { Typography } from '@mui/material';
import React from 'react';

const themeVariantsByVariant = {
  primary: 'headingPrimary',
  secondary: 'headingSecondary',
  tertiary: 'headingTertiary',
} as const;

interface HeadingProps {
  text: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  containsHtml?: boolean;
}

function Heading({
  text,
  variant,
  className,
  align = 'inherit',
  containsHtml = false,
}: HeadingProps): JSX.Element {
  if (containsHtml && typeof text === 'string') {
    return (
      <Typography
        className={className}
        align={align}
        variant={themeVariantsByVariant[variant]}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }

  return (
    <Typography
      className={className}
      align={align}
      variant={themeVariantsByVariant[variant]}
    >
      {text}
    </Typography>
  );
}

export default Heading;
