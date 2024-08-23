import { Typography } from '@mui/material';
import React from 'react';

const themeVariantsByVariant = {
  bold: 'subtitleBold',
  medium: 'subtitleMedium',
  regular: 'subtitleRegular',
} as const;

interface SubtitleProps {
  text: string;
  variant: 'bold' | 'medium' | 'regular';
  className?: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  containsHtml?: boolean;
}

function Subtitle({
  text,
  variant,
  className,
  align = 'inherit',
  containsHtml = false,
}: SubtitleProps): JSX.Element {
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

export default Subtitle;
