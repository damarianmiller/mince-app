import type { RowProps } from '@/Components/UI/Typessss';
import styles from './layout.module.css';

export const Row = <T extends React.ElementType = 'div'>({
    as,
    spacing = 'm',
    mainAxis = 'start',
    crossAxis = 'stretch',
    wrap = false,
    fullWidth = false,
    fullHeight = false,

    className,
    children,
    ...rowProps
}: RowProps<T>) => {
    const Element = as || 'div';
    return (
        <Element
            className={[
                styles.flex,
                styles.row,
                styles["spacing-" + spacing],
                styles["align-" + crossAxis],
                styles["justify-" + mainAxis],
                wrap ? styles.wrap : styles.nowrap,
                fullWidth ? styles.fullWidth : '',
                fullHeight ? styles.fullHeight : '',
                className ?? '',
            ].join(' ')}
            {...rowProps}
        >
            {children}
        </Element>
    );
};