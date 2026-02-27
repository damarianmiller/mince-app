
export const strokeWidthMap: Record<Weights, number> = {
    thin: 1,
    light: 2,
    normal: 3,
    thick: 4,
    heavy: 5,
}
export const weightMap: Record<Weights, number> = {
    thin: 100,
    light: 300,
    normal: 400,
    thick: 600,
    heavy: 800,
}
export const sizeMap: Record<Sizes, number> = {
    xxs: 10,
    xs: 12,
    s: 14,
    m: 16,
    l: 20,
    xl: 24,
    xxl: 28,
}

type Sizes = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
type Colors = "primary" | "secondary" | "success" | "danger" | "warning" | "light" | "dark" | "current";
type Weights = "thin" | "light" | "normal" | "thick" | "heavy";
type Alignments = "left" | "center" | "right" | "justify";

type JustifyContent = "start" | "center" | "end" | "between" | "around" | "evenly";
type AlignItems = "start" | "center" | "end" | "stretch";
type Variants = "solid" | "outline" | "inline";
type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
type Icons = any; // Replace with actual icon names/types when available

export type PolymorphicProps<T extends React.ElementType, PassedProps = {}> = {
	as?: T;
	children?: React.ReactNode;
} & PassedProps & Omit<React.ComponentPropsWithRef<T>, keyof PassedProps | "as" | "children">;

type DesignProps = {
    size: Sizes;
    color: Colors;
    weight: Weights;
    align?: Alignments;
}

type ContainerProps = {
    wrap?: boolean;
    justifyContent: JustifyContent;
    alignItems: AlignItems;
    gap: Sizes;
    fullWidth?: boolean;
    fullHeight?: boolean;
}

// ---------- Wrapper Props ---------- \\
export type RowProps<T extends React.ElementType = "div"> = PolymorphicProps<T, ContainerProps>;
export type ColumnProps<T extends React.ElementType = "div"> = PolymorphicProps<T, ContainerProps>;

// ---------- Button Props  ---------- \\
type ButtonsProps = {
    href?: string;
    variant: Variants;


} & DesignProps & Icons;
export type ButtonProps<T extends React.ElementType = "button"> = PolymorphicProps<T, ButtonsProps>;




// ---------- Icon Props    ---------- \\
type IconsProps = {
    name: any;
} & DesignProps;
export type IconProps = PolymorphicProps<"svg", IconsProps>;
