import {LitElement} from 'lit-element';

// import { axe, toHaveNoViolations }


describe('orxe-input-field-axe', () => {

  const ORXE_INPUT_FIELD = 'orxe-input-field';
  const ELEMENT_LABEL_ID = 'text-field-label';
  let inputFieldElement: LitElement;

  const getShadowRoot = (tagName: string) => {
    const crudTable = document.querySelector('.cmp-txt--r');
    const shadowRoot = crudTable.attachShadow({mode: 'open'});
    return shadowRoot;
  }

  beforeEach(async () => {
    inputFieldElement = window.document.createElement(ORXE_INPUT_FIELD) as LitElement;
      document.body.appendChild(inputFieldElement);
  });

  afterEach(() => {
    afterEach(() => {
      document.body.getElementsByTagName(ORXE_INPUT_FIELD)[0].remove();
   });
  });
  it('displays Label text', async () => {
    const dummyText = 'Name';
    inputFieldElement.setAttribute('fieldDisplayName', dummyText);
    await inputFieldElement.updateComplete;

    const renderedText = getShadowRoot("body--r").querySelector("#text-field-label").innerText;

    expect(renderedText).toEqual(dummyText);
});
});
