# react-text-trim

> Customizable text trimmer

[![NPM](https://img.shields.io/npm/v/react-text-trim.svg)](https://www.npmjs.com/package/react-text-trim) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Live Demo [here](https://nadavshaar.github.io/react-text-trim/)

![trimmer](https://user-images.githubusercontent.com/8030614/95021848-3b90f880-067c-11eb-9ced-f72de8c2430e.gif)


## Install

```bash
npm install --save react-text-trim
```

## Usage

```jsx
<TextTrim 
    refId="TextTrim"
    text="Lorem ipsum dolor sit amet, consecter adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    minLines={2}
    maxLines={5}
    showMoreLabel="Show More"
    showLessLabel="Show Less"
    delimiter="..."
    fontSize={14}
    lineHeight={16}
    containerStyle={{}}
    textWrapperStyle={{}}
    buttonStyle={{}}
/>
```

## Props

| name | type | description | default value |
|---|---|---|---|
| refId* | string | unique id for the component | --- |
| text | string | the text to trim | --- |
| minLines | number | the number of lines to show when trimmed | 3 |
| maxLines | number | the number of lines to display when text is not trimmed, if the text is longer it will be scrollable, to disable this prop and display the all text just pass 0 | 0 |
| showMoreLabel | string | the label for the toggle element when text is trimmed | "Show More" |
| showLessLabel | string | the label for the toggle element when text is not trimmed | "Show Less" |
| delimiter | string | the suffix for the text | "..." |
| fontSize | number | the font size of text (in pixels) | 13 |
| lineHeight | number | the height of each line (in pixels) | 16 |
| containerStyle | object | styles for the container element | --- |
| textWrapperStyle | object | styles for the text wrapping container element | --- |
| buttonStyle | object | styles for the toggle element | --- |

## License

 © [MIT](https://github.com/NadavShaar/react-text-trim/blob/master/LICENSE)
