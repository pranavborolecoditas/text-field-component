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

  static get properties() {
    return {
      fieldId: { type: String },
      fieldName: { type: String },
      fieldDisplayName: { type: String },
      shownValue: { type: String },
      fieldPlaceholder: { type: String },
      errorMessage: { type: String },
      isError: { type: Boolean },
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
  }

  render() {
    const className = !this.isError ? 'textfield': 'textfield error';
    return html`
      <div class="container">
        <div class="${className}">
          <input type="text" class="cmp-txt--r" id="${this.fieldId}" 
            name="${this.fieldName}" placeholder="${this.fieldDisplayName}">
          <label id="text-field-label" class="body--r">${this.fieldDisplayName}</label>
          <div class="error-message">${this.isError ? this.errorMessage: ''}</div>
        </div>
      </div>
    `;
  }

  updateShownValue(e) {
    this.shownValue = e.srcElement.value;
  }

  static styles = styles;
}
