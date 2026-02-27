import type { TextProps } from '@/Components/UI/Typessss';
import styles from './text.module.css';

export const Text = <T extends React.ElementType = 'p'>({
    as,
    size = 'm',
    color = 'default',
    weight = 'normal',
    align = 'left',
    truncate = false,
    italic = false,

    className,
    children,
    ...textProps
}: TextProps<T>) => {
    const Element = as || 'p';
    return (
        <Element
            className={[
                styles.text,
                styles[size],
                styles["color-" + color],
                styles[weight],
                styles[align],
                truncate ? styles.truncate : '',
                italic ? styles.italic : '',
                className ?? '',
            ].join(' ')}
            {...textProps}
        >
            {children}
        </Element>
    );
};