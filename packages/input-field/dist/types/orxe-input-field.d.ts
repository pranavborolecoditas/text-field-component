import { LitElement } from 'lit-element';
export default class OrxeInputField extends LitElement {
    fieldId: string;
    fieldName: string;
    fieldDisplayName: string;
    fieldPlaceholder: string;
    shownValue: string;
    errorMessage: string;
    isError: boolean;
    static get properties(): {
        fieldId: {
            type: StringConstructor;
        };
        fieldName: {
            type: StringConstructor;
        };
        fieldDisplayName: {
            type: StringConstructor;
        };
        shownValue: {
            type: StringConstructor;
        };
        fieldPlaceholder: {
            type: StringConstructor;
        };
        errorMessage: {
            type: StringConstructor;
        };
        isError: {
            type: BooleanConstructor;
        };
    };
    constructor();
    render(): import("lit-element").TemplateResult;
    updateShownValue(e: any): void;
    static styles: any;
}
