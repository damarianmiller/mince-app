import { DynamicIcon } from 'lucide-react/dynamic';
import { IconProps, sizeMap, strokeWidthMap } from '@/Components/UI/Types';
import styles from './Icon.module.css';

export const Icon = ({
    name,
    size = 'm',
    color = "current",
    weight = "normal",
    className
}: IconProps) => {
    return (
        <DynamicIcon
            name={name}
            size={sizeMap[size]}
            strokeWidth={strokeWidthMap[weight]}
            className={[
                styles["color-" + color],
                className ?? ''
            ].join(' ')}
        />
    );
};