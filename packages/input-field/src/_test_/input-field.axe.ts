import { OrxeInputField } from '../index';
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';

expect.extend(toHaveNoViolations);

describe('orxe-input-filed-axe', () => {
  let inputField;

  beforeEach(function() {
    OrxeInputField;
    document.body.appendChild(document.createElement('orxe-input-filed'));
    inputField = document.querySelector('orxe-input-filed') as OrxeInputField;
  });

  afterEach(function() {
    inputField.remove();
  });

  it('should support all WCAG Accessibility Rules. when component is rendered', async () => {
    // pass the HTML element into the axe function.
    const results = await axe(inputField);
    expect(results).toHaveNoViolations();
  });

});
