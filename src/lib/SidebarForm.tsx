import React, {ReactElement} from "react";
import {
    AppBarComponent,
    AppBarColor,
    SidebarComponent,
    SidebarType,
    SidebarPosition
} from "@syncfusion/ej2-react-navigations";
import {ButtonComponent} from "@syncfusion/ej2-react-buttons";
import Form, {FormProps} from "./Form";
import styles from './SidebarForm.module.scss';

interface SidebarFormProps {
    /**
     * Title
     * @example 'Filters'
     */
    title: string;
    /**
     * Close button icon
     * If not defined, the button is not displayed
     * @default fa-solid fa-xmark (Font Awesome)
     */
    closeIcon?: string;
    /**
     * Set sidebar open or closed
     */
    isOpen: boolean;
    /**
     * Sidebar props
     */
    sidebar: {
        /**
         * Target element
         * @example '#app'
         */
        target: string;
        /**
         * Sidebar type
         * @see SidebarType
         * @default Push
         */
        type?: SidebarType;
        /**
         * Sidebar width
         * @default 325
         */
        width?: number;
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
    }
    /**
     * AppBar color mode
     * @see AppBarColor
     * @default Primary
     */
    titleBarColorMode?: AppBarColor;
    /**
     * Form props
     * @see FormProps
     */
    form: FormProps;
    children: ReactElement;
}

export default function SidebarForm(
    {
        title,
        closeIcon = 'fa-solid fa-xmark',
        isOpen,
        sidebar: {
            target,
            type = 'Push',
            width = 325,
            position = 'Right',
            enableGestures = false,
            onOpen,
            onClose,
        },
        titleBarColorMode = 'Primary',
        form: {
            submitButton,
            resetButton,
            formWithSubmit,
            onSubmit,
            onReset
        },
        children
    }: SidebarFormProps): ReactElement {
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
            {/* Form content */}
            <div className={styles.sidebarContent}>
                <Form
                    submitButton={submitButton}
                    resetButton={resetButton}
                    formWithSubmit={formWithSubmit}
                    onSubmit={onSubmit}
                    onReset={onReset}
                >
                    {children}
                </Form>
            </div>
        </SidebarComponent>
    )
}