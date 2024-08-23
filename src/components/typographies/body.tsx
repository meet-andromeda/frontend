import { Typography } from '@mui/material';
import React from 'react';

interface BodyProps {
  text: React.ReactNode;
  variant: 'medium' | 'regular' | 'description' | 'underline';
  onClick?: () => void;
  className?: string;
  color?: string;
  containsHtml?: boolean;
}

const themeVariantsByVariant = {
  medium: 'bodyMedium',
  regular: 'bodyRegular',
  description: 'bodyDescription',
  underline: 'bodyUnderline',
} as const;

function Body({
  text,
  variant,
  onClick,
  className,
  color,
  containsHtml = false,
}: BodyProps): JSX.Element {
  if (containsHtml && typeof text === 'string') {
    return (
      <Typography
        sx={{ color }}
        className={className}
        variant={themeVariantsByVariant[variant]}
        onClick={onClick}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }

  return (
    <Typography
      sx={{ color }}
      className={className}
      variant={themeVariantsByVariant[variant]}
      onClick={onClick}
    >
      {text}
    </Typography>
  );
}

export default Body;
