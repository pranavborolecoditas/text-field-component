## ORXE-input-field

Input field component in orxe is use as input filed with validation and beautiful UI experince.

### Usage

Angular/javascript

```
<Default>
<orxe-input-field></orxe-input-field>

<For disable input>
<orxe-input-field disabled="true"></orxe-input-field>

<For Custom Error message>
<orxe-input-field isError="true" errorMessage="Error message"></orxe-input-field>

```


## Attributes

| Attribute        | Description              | Type   |
| ---------------- | ------------------------ | ------ |
| fieldDisplayName | Field label              | string | 
| fieldId          | Id param                 | string | 
| fieldName        | Name param               | string |
| fieldPlaceholder | Placeholder              | string |
| isError          | true if custumize error message | boolean| 
| errorMessage     | Error message            | string | 
| disabled         | Use for disabled         | boolean| 
| type             |  text or number or email | string | 
