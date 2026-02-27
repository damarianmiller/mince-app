import type { HeadingProps, HeadingLevel, SizeScale } from '@/Components/UI/Typessss';
import styles from './Heading.module.css';

// Default size for each heading level
const levelSizeScaleMap: Record<HeadingLevel, SizeScale> = {
    1: 'xxxl',
    2: 'xxl',
    3: 'xl',
    4: 'l',
    5: 'm',
    6: 's',
};

export const Heading = ({
    level = 1,
    size,
    color = 'default',
    weight = 'bold',
    align = 'center',
    truncate = false,
    italic = false,

    className,
    children,
    ...headingProps
}: HeadingProps) => {
    const Element = ("h" + level) as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    const resolvedSize = size ?? levelSizeScaleMap[level];

    return (
        <Element
            className={[
                styles.heading,
                styles[resolvedSize],
                styles["color-" + color],
                styles[weight],
                styles[align],
                truncate ? styles.truncate : '',
                italic ? styles.italic : '',
                className ?? '',
            ].join(' ')}
            {...headingProps}
        >
            {children}
        </Element>
    );
};