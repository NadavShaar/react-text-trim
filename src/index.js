import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextTrim extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      resultText: '', // the final text to display
      displayFullText: false, // whether to display the truncated text or the full text
      hasMore: false // whether the text has more than the requested lines and therefore should be truncated
    };
  }

  componentDidMount() {
      const { refId } = this.props;
      const { displayFullText } = this.state;

      // getting the container
      this.container = this.refs[refId];
      // getting the element that the text should be injected to
      this.element = this.refs[`${refId}-text-wrapper`];
      // getting the element's top padding to add to the max height when calculating number of rows in full text mode
      this.elementOffsetTop = (parseInt(this.element.style.paddingTop) || 0);
      // getting the element's top and bottom padding to add to the max height when calculating number of rows in truncated text mode
      this.elementOffsetHeight = this.elementOffsetTop + (parseInt(this.element.style.paddingBottom) || 0);
      // getting the container's top padding to add to the max height when calculating number of rows in full text mode
      this.containerOffsetTop = (parseInt(this.container.style.paddingTop) || 0);
      // getting the container's top and bottom padding to add to the max height when calculating number of rows in truncated text mode
      this.containerOffsetHeight = this.containerOffsetTop + (parseInt(this.container.style.paddingBottom) || 0);
      
      // initially calculate the text truncation
      this.truncateText(displayFullText);
  }

  componentWillReceiveProps(newProps) {
    // const { text, minLines, showMoreLabel } = this.props;
    const { displayFullText } = this.state;
    if(newProps !== this.props) {
      setTimeout(() => {
        // updating the element's top padding to add to the max height when calculating number of rows in full text mode
        this.elementOffsetTop = (parseInt(this.element.style.paddingTop) || 0);
        // updating the element's top and bottom padding to add to the max height when calculating number of rows in truncated text mode
        this.elementOffsetHeight = this.elementOffsetTop + (parseInt(this.element.style.paddingBottom) || 0);
        // updating the container's top padding to add to the max height when calculating number of rows in full text mode
        this.containerOffsetTop = (parseInt(this.container.style.paddingTop) || 0);
        // updating the container's top and bottom padding to add to the max height when calculating number of rows in truncated text mode
        this.containerOffsetHeight = this.containerOffsetTop + (parseInt(this.container.style.paddingBottom) || 0);
        
        // recalculate the text truncation
        this.truncateText(displayFullText);
      }, 0)
    }
  }

  truncateText(showFullText) {
    const { 
      text, 
      minLines, 
      showLessLabel,
      showMoreLabel, 
      delimiter,
      fontSize, 
      lineHeight
    } = this.props;

    // no text to calculate
    if(!text) return this.setState({resultText: text, displayFullText: true, hasMore: false});

    // if requested to display the full text, return the original text and stop
    if(showFullText) return this.setState({resultText: text + ' ', displayFullText: true, hasMore: true});
    
    // getting the text for the button (more / less)
    var buttonText = showFullText ? showLessLabel : showMoreLabel;

    // creating an element for the calculations purpose
    var el = document.createElement('span');
    // getting the element's width for calculations purpose, subtracting any left and right padding from both container and text wrapper elements
    var elementWidth = this.container.offsetWidth - (parseInt(this.element.style.paddingLeft) || 0) - (parseInt(this.element.style.paddingRight) || 0) - (parseInt(this.container.style.paddingLeft) || 0) - (parseInt(this.container.style.paddingRight) || 0);
    // setting the element's necessary styles
    el.setAttribute("style", `width: ${elementWidth}px; font-size: ${fontSize}px; line-height: ${lineHeight}px; position: fixed; top: -10000px;`);
    // pushing the element into the DOM (out of view!)
    document.querySelector('body').appendChild(el);

    // breaking the text into words
    var wordsArray = text.split(' ');
    // "truncatedText" will store the truncated text
    var truncatedText = '';

    // iterating the "wordsArray"
    for(var i=0; i < wordsArray.length; i++) { 
      // adding a word
      truncatedText = el.innerHTML + ' ' + wordsArray[i]; 
      // adding the delimiter an extra space and the text of the button
      el.innerHTML = truncatedText + delimiter + ' ' + buttonText;
      // testing wether the current text is causing the element's height to exceed the number of 
      // rows that should be displayed as determined by the "minLines" prop,
      // when it does, that mean that the current word and the words after it should be truncated
      if(el.clientHeight > (lineHeight * minLines)) {
        // trimming the extra space at the end, removing the current word and adding the delimiter with an extra space
        truncatedText = truncatedText.substring(0, truncatedText.lastIndexOf(' ')).trim() + delimiter + ' ';
        // updating the state with the result
        this.setState({resultText: truncatedText, displayFullText: false, hasMore: true});
        // removing the element from the DOM
        return document.querySelector('body').removeChild(el);
      }
      // updating the element with the accumulated text
      el.innerHTML = truncatedText;
    };
    // removing the element from the DOM
    document.querySelector('body').removeChild(el);
    // the text doesn't long enough to be truncated
    return this.setState({resultText: text, displayFullText: false, hasMore: false});
  }

  render(){
    const { 
        refId, 
        minLines,
        maxLines,
        showMoreLabel, 
        showLessLabel, 
        fontSize, 
        lineHeight, 
        containerStyle, 
        textWrapperStyle, 
        buttonStyle
    } = this.props;

    const { 
        displayFullText, 
        resultText, 
        hasMore 
    } = this.state;

    // getting the text for the button (more / less)
    const buttonText = displayFullText ? showLessLabel : showMoreLabel;

    // STYLES
    // ===============================================================================================
    // NOTE-1: line height should only be set using the "lineHeight" prop
    // NOTE-2: font size should only be set using the "fontSize" prop

                                                    // styles to apply a vertical scrolling if there are more lines than what was defined by the "maxLines" prop
                                                    // if "maxLines" was set to 0 (default) there will be no scroll
    const containerHiddenStyles =  displayFullText  ? { ...containerStyle, overflow: 'auto', maxHeight: maxLines ? (maxLines * lineHeight + (this.elementOffsetTop || 0) + (this.containerOffsetTop || 0)) : 'unset' }  
                                                    // styles to hide the overflowing text that is caused by a quick resizing of the container
                                                    : { ...containerStyle, overflow: 'hidden', maxHeight: minLines ? (minLines * lineHeight + (this.elementOffsetHeight || 0) + (this.containerOffsetHeight || 0)) : 'unset' };
    const textWrapperStyles = {lineHeight: `${lineHeight}px`, fontSize: fontSize, color: '#4d5f75', ...textWrapperStyle};
    const buttonStyles = {color: '#0288d1', textDecoration: 'underline', cursor: 'pointer', whiteSpace: 'nowrap', ...buttonStyle, fontSize: fontSize, lineHeight: `${lineHeight}px`};
    // ===============================================================================================

    return ( 
      <div ref={refId} style={containerHiddenStyles}>
        <div ref={`${refId}-text-wrapper`} style={textWrapperStyles}>
          {resultText}
          {
            hasMore ?
              <span
                onClick={() => this.truncateText(!displayFullText)} 
                style={buttonStyles}
              >
                {buttonText}
              </span>
              : null
          }
        </div> 
      </div> 
    );
  }
};

TextTrim.propTypes = {
  refId: PropTypes.string.isRequired,
  text: PropTypes.string,
  minLines: PropTypes.number,
  maxLines: PropTypes.number,
  showMoreLabel: PropTypes.string,
  showLessLabel: PropTypes.string,
  delimiter: PropTypes.string,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  containerStyle: PropTypes.object, 
  textWrapperStyle: PropTypes.object, 
  buttonStyle: PropTypes.object
}

TextTrim.defaultProps = {
  minLines: 3,
  maxLines: 0,
  showMoreLabel: 'Show More',
  showLessLabel: 'Show Less',
  delimiter: '...',
  fontSize: 13,
  lineHeight: 16,
  containerStyle: {}, 
  textWrapperStyle: {}, 
  buttonStyle: {}
}

export default TextTrim;