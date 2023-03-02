import React, {ReactElement} from "react";
import {ButtonComponent} from "@syncfusion/ej2-react-buttons";
import styles from './Form.module.scss';

export interface FormProps {
    /**
     * Submit button settings
     */
    submitButton: {
        /**
         * Button text
         */
        content: string;
        /**
         * Button icon
         * @default undefined
         */
        iconCss?: string;
    },
    /**
     * Reset button settings
     * If not defined, the reset button is not displayed
     * @default undefined
     */
    resetButton?: {
        /**
         * Button text
         * @default undefined
         */
        content?: string;
        /**
         * Button icon
         * @default undefined
         */
        iconCss?: string;
    }
    /**
     * Enable form submit
     * When false, the callback fires only with button click
     * @default false
     */
    formWithSubmit?: boolean;
    /**
     * Callback when form is submitted
     */
    onSubmit: () => void;
    /**
     * Callback when reset button is clicked
     * If not defined, the reset button is not displayed
     * @default undefined
     */
    onReset?: () => void;
    children?: ReactElement;
}

export default function Form(
    {
        submitButton,
        resetButton,
        formWithSubmit = false,
        onSubmit,
        onReset,
        children
    }: FormProps): ReactElement {

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Callback
        onSubmit();
    }

    return (
        <form onSubmit={submit} className={styles.formContainer}>
            {/* Content */}
            {children}
            {/* Action buttons */}
            <div className={styles.formButtons}>
                {
                    // Reset
                    (resetButton && onReset) && <ButtonComponent
                        type='button'
                        content={resetButton?.content}
                        iconCss={resetButton?.iconCss}
                        onClick={onReset}
                    />
                }
                {/* Submit */}
                <ButtonComponent
                    type={formWithSubmit ? 'submit' : 'button'}
                    content={submitButton.content}
                    iconCss={submitButton.iconCss}
                    isPrimary={true}
                    onClick={formWithSubmit ? onSubmit : undefined}
                />
            </div>
        </form>
    )
}