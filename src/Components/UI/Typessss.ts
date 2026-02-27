export const sizeMap: Record<SizeScale, number> = {
	xxs: 10,
	xs: 12,
	s: 14,
	m: 16,
	l: 20,
	xl: 24,
	xxl: 28,
	xxxl: 32,
};

// ---- Polymorphic Primitive ----
export type PolymorphicProps<T extends React.ElementType, OwnProps = {}> = {
	as?: T;
	children?: React.ReactNode;
} & OwnProps & Omit<React.ComponentPropsWithRef<T>, keyof OwnProps | 'as' | 'children'>;

// ---- Layout tokens ----
export type SizeScale = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
export type Align   = 'start' | 'center' | 'end' | 'stretch';
export type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

// ---- Wrapper Props ----
export type WrapperProps = {
	wrap?: boolean;
	mainAxis: Justify;
	crossAxis: Align;
	gap?: SizeScale;
	fullWidth?: boolean;
	fullHeight?: boolean;
}
// ---- Row and Column Types ----
export type RowProps<T extends React.ElementType = 'div'> = PolymorphicProps<T, WrapperProps>;
export type ColumnProps<T extends React.ElementType = 'div'> = PolymorphicProps<T, WrapperProps>;

// ---- Icon Props ----
export type IconColor = TextColor | 'current';
export type IconsProps = {
  name: any;
  size?: SizeScale;
  color?: IconColor;
  strokeWidth?: number;
};

export type IconProps = PolymorphicProps<'svg', IconsProps>;

// ---- Text Props ----
export type TextColor  = 'default' | 'muted' | 'subtle' | 'primary' | 'danger' | 'success' | 'warning' | 'inverse';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextAlign  = 'left' | 'center' | 'right';
export type TextElementProps = {
	size?: SizeScale;
	color?: TextColor;
	weight?: TextWeight;
	align?: TextAlign;
	truncate?: boolean;
	italic?: boolean;
}
export type TextProps<T extends React.ElementType = 'p'> = PolymorphicProps<T, TextElementProps>;

// ---- Heading Props ----
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingsProps = {
  level?:   HeadingLevel;
  size?:    SizeScale;
  color?:   TextColor;
  weight?:  TextWeight;
  align?:   TextAlign;
  truncate?: boolean;
  italic?:  boolean;
};
export type HeadingProps = PolymorphicProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', HeadingsProps>;

// ---- Button Props ----
export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'destructive';
export type ButtonsProps = {
	size?: SizeScale;
	href?: string;
	variant?: ButtonVariant;
	loading?: boolean;
	icon?: any;
	iconOnly?: boolean;
	fullWidth?: boolean;
};
export type ButtonProps<T extends React.ElementType = 'button'> = PolymorphicProps<T, ButtonsProps>;


export type DesignProps = {
	size?: SizeScale;
	color?: Color
}