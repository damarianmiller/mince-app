import type { ColumnProps } from '@/Components/UI/Typessss';
import styles from './layout.module.css';

export const Column = <T extends React.ElementType = 'div'>({
    as,
    spacing = 'm',
    mainAxis = 'start',
    crossAxis = 'stretch',
    wrap = false,
    fullWidth = false,
    fullHeight = false,

    className,
    children,
    ...columnProps
}: ColumnProps<T>) => {
    const Element = as || 'div';
    return (
        <Element
            className={[
                styles.flex,
                styles.column,
                styles["spacing-" + spacing],
                styles["align-" + crossAxis],
                styles["justify-" + mainAxis],
                wrap ? styles.wrap : styles.nowrap,
                fullWidth ? styles.fullWidth : '',
                fullHeight ? styles.fullHeight : '',
                className ?? '',
            ].join(' ')}
            {...columnProps}
        >
            {children}
        </Element>
    );
};