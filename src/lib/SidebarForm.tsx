import React, {ReactElement} from "react";
import Sidebar, {SidebarProps} from "./Sidebar";
import Form, {FormProps} from "./Form";

interface SidebarFormProps {
    /**
     * Sidebar props
     * @see SidebarProps
     */
    sidebar: SidebarProps
    /**
     * Form props
     * @see FormProps
     */
    form: FormProps;
    children: ReactElement;
}

export default function SidebarForm(
    {
        sidebar: {
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
        },
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
        <Sidebar
            target={target}
            title={title}
            titleBarColorMode={titleBarColorMode}
            closeIcon={closeIcon}
            width={width}
            isOpen={isOpen}
            type={type}
            position={position}
            enableGestures={enableGestures}
            onOpen={onOpen}
            onClose={onClose}
        >
            <Form
                submitButton={submitButton}
                resetButton={resetButton}
                formWithSubmit={formWithSubmit}
                onSubmit={onSubmit}
                onReset={onReset}
            >
                {children}
            </Form>
        </Sidebar>
    )
}