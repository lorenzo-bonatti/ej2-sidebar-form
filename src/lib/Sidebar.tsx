import React, {ReactElement} from "react";
import {
    AppBarComponent,
    AppBarColor,
    SidebarComponent,
    SidebarType,
    SidebarPosition
} from "@syncfusion/ej2-react-navigations";
import {ButtonComponent} from "@syncfusion/ej2-react-buttons";
import styles from './Sidebar.module.scss';

export interface SidebarProps {
    /**
     * Target element
     * @example '#app'
     */
    target: string;
    /**
     * Title
     * @example 'Filters'
     */
    title: string;
    /**
     * AppBar color mode
     * @see AppBarColor
     * @default Primary
     */
    titleBarColorMode?: AppBarColor;
    /**
     * Close button icon
     * If not defined, the button is not displayed
     * @default fa-solid fa-xmark (Font Awesome)
     */
    closeIcon?: string;
    /**
     * Sidebar width
     * @default 325
     */
    width?: string | number;
    /**
     * Set sidebar open or closed
     */
    isOpen: boolean;
    /**
     * Sidebar type
     * @see SidebarType
     * @default Push
     */
    type?: SidebarType;
    /**
     * Sidebar position
     * @see SidebarPosition
     * @default Right
     */
    position?: SidebarPosition;
    /**
     * Enable sidebar gestures
     * @default false
     */
    enableGestures?: boolean;
    /**
     * Callback when sidebar is opened
     * @default undefined
     */
    onOpen?: () => void;
    /**
     * Callback when sidebar is closed
     * @default undefined
     */
    onClose?: () => void;
    children?: ReactElement;
}

export default function Sidebar(
    {
        target,
        title,
        titleBarColorMode = 'Primary',
        closeIcon = 'fa-solid fa-xmark',
        width = 325,
        isOpen,
        type = 'Push',
        position = 'Right',
        enableGestures = false,
        onOpen,
        onClose,
        children
    }: SidebarProps): ReactElement {
    return (
        <SidebarComponent
            target={target}
            width={width}
            type={type}
            position={position}
            isOpen={isOpen}
            enableGestures={enableGestures}
            open={onOpen}
            close={onClose}
        >
            <div className={styles.container}>
                {/* Title bar */}
                <AppBarComponent isSticky colorMode={titleBarColorMode}>
                    {/* Title */}
                    <span>{title}</span>
                    <div className="e-appbar-spacer"/>
                    {
                        // Close button
                        closeIcon && <ButtonComponent
                            iconCss={closeIcon}
                            cssClass={titleBarColorMode === 'Primary' ? 'e-primary' : 'e-flat'}
                            onClick={onClose}
                        />
                    }
                </AppBarComponent>
                {/* Sidebar content */}
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </SidebarComponent>
    )
}