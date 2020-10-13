import { OrxeInputField } from '../';
import {
  toHaveClass,toHaveAttribute,toHaveValue,toBeChecked,toHaveStyle
} from '@testing-library/jest-dom/matchers'

expect.extend({ toHaveClass,toHaveAttribute,toHaveValue,toBeChecked ,toHaveStyle})

describe('orxe-input-field', () => {
  let inputField;
  beforeEach(async function() {
    OrxeInputField;
    inputField = (await document.body.appendChild(document.createElement('orxe-input-field'))) as OrxeInputField;
  });

  afterEach(async function() {
    await inputField.remove();
  });

  function getByTestId(id: string): HTMLElement {
    return inputField.shadowRoot.querySelector(`[data-testid=${id}]`);
  }

  it('should check default value for properties for radio button card', () => {
    // expect(inputField.).toBeFalsy();
    expect(inputField.radioLable).toEqual('');
    // expect(inputField.radioValue).toEqual('');
  });

});