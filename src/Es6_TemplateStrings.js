/* Initial Javascript */
let template = [
  '<div class="Alert">',
    '<p>Foo</p>',
  '</div>'
].join('');

console.log(template);

/* Template String Alternative */
let templateStr = `
  <div class="Alert">,
    <p>Foo</p>,
  </div>
`;

console.log(templateStr);

/* Template Strings and Values */
let name = 'Foo';

let templateStrName = `
  <div>
    <h1>Hello!</h1>
    <p>My name is: ${name}</p>
  </div>
`;
console.log(templateStrName);
console.log(templateStrName.trim()); // to remove whitespace before string

