export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'p';

export type TypographyAlign = 'inherit' | 'left' | 'center' | 'right';

export interface TypographyProps {
    variant: TypographyVariant;
    align?: TypographyAlign;
    bold?: boolean;
    grey?: boolean;
    children?: React.ReactNode;
    customClass?: string;
}