import type { ButtonProps } from '@/Components/UI/Types';
import styles from './Button.module.css';
import { Icon } from '@/Components/UI/Icon';

export const Button = <T extends React.ElementType = 'button'>({
    as,
    href,
    variant = 'solid',
    size = 'm',
    color = "current",
    weight = "normal",

    fullWidth = false,
    loading = false,
    disabled = false,
    iconOnly = false,
    icon,

    className,
    children,
    ...buttonProps
}: ButtonProps<T>) => {
    const Element = as || (href ? 'a' : 'button');
    return (
        <Element
            href={href}
            disabled={!href ? disabled || loading : undefined}
            className={[
                styles.button,
                styles[variant],
                styles[size],
                iconOnly ? styles.iconOnly : '',
                fullWidth ? styles.fullWidth : '',
                loading ? styles.loading : '',
                className ?? '',
            ].join(' ')}
            {...buttonProps}
        >
            {!loading && icon && <Icon name={icon} size={size} color={color} weight={weight} />}
            {loading && <Icon className={styles.spinner} name="loader-circle" size={size} color={color} weight={weight} />}
            {!iconOnly && children}
        </Element>
    );
};