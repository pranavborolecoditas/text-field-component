import { html, customElement, LitElement } from 'lit-element';
import styles from './input-field-css';

@customElement('orxe-input-field')
export default class OrxeInputField extends LitElement {
  fieldId: string;
  fieldName: string;
  fieldDisplayName: string;
  fieldPlaceholder: string;
  shownValue: string;
  errorMessage: string;
  isError: boolean;
  disabled: boolean;
  type: string;

  static get properties() {
    return {
      fieldId: { type: String },
      fieldName: { type: String },
      fieldDisplayName: { type: String },
      shownValue: { type: String },
      type: { type: String },
      fieldPlaceholder: { type: String },
      errorMessage: { type: String },
      isError: { type: Boolean },
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.fieldDisplayName = 'Text filed';
    this.fieldId = 'text-filed';
    this.fieldName = 'text-filed';
    this.fieldPlaceholder = 'Text filed';
    this.shownValue = '';
    this.isError = false;
    this.errorMessage = '';
    this.disabled = false;
    this.type = 'text';
  }

  render() {
    const className = !this.isError ? 'textfield': 'textfield error';
    return html`
      <div class="container">
        <div class="${className}">
          <input type="${this.type}" class="cmp-txt--r" id="${this.fieldId}"
            @input=${this.inputHandler}  
            ?disabled="${this.disabled}"
            @focusout="${this.inputFocusHandler}"
            name="${this.fieldName}" placeholder="${this.fieldDisplayName}">
          <label id="text-field-label" class="body--r">${this.fieldDisplayName}</label>
          <div class="error-message">${this.isError ? this.errorMessage: ''}</div>
        </div>
      </div>
    `;
  }

  inputHandler(event) { 
    this.isError = false;
    this.errorMessage = '';
    this.dispatchEvent(
      new CustomEvent("val-change", {
        detail: { value: event.composedPath()[0].value }
      })
    );
  }

  inputFocusHandler(event) { 
    if (event.composedPath()[0].value === null || event.composedPath()[0].value === '') {
      this.isError = true;
      this.errorMessage = '*This field is required';
    } else {
      this.isError = false;
      this.errorMessage = '';
    }
  }

  static styles = styles;
}
