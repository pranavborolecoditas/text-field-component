import { OrxeInputField } from '../';
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);
describe('orxe-input-field-axe', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
    let InputField;
    beforeEach(async () => {
        OrxeInputField;
        document.body.appendChild(document.createElement('InputField'));
        InputField = document.querySelector('InputField');
    });
    afterEach(() => {
        InputField.remove();
    });
    it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
        const result = await axe(InputField);
        expect(result).toHaveNoViolations();
    });
});
