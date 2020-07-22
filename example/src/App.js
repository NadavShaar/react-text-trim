import React, { Component } from 'react';
import TextTrim from 'react-text-trim';
import 'react-text-trim/dist/index.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      recalculating: false, 
      minLines: 2, 
      maxLines: 0,
      showMoreLabel: 'Show More',
      showLessLabel: 'Show Less',
      delimiter: '...',
      fontSize: 14,
      lineHeight: 16,
      text: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
    this.sidebarRef = React.createRef();
  }

  componentDidMount() {
    var _this = this;
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutationRecord) {
        _this.setState({
          recalculating: true
        });
      });    
    });

    let target = this.sidebarRef.current;
    observer.observe(target, { attributes : true, attributeFilter : ['style'] });
  }

  render() {
    let { minLines, maxLines, showMoreLabel, showLessLabel, delimiter, fontSize, lineHeight, text } = this.state;
    return (
      <div style={{display: 'inline-flex', flexDirection: 'column', textAlign: 'left', padding: 20, borderRadius: 8, boxShadow: 'rgb(0 0 0 / 0.3) 1px 2px 3px 3px', backgroundColor: '#8d5185', backgroundImage: 'linear-gradient(315deg, #493f61 0%, #7892d8 74%)'}}>
        <span className="title">react-text-trim</span>
        <div 
          ref={this.sidebarRef} 
          style={{
          minHeight: 170,
          padding: 20,
          width: 240,
          minWidth: 240,
          resize: 'horizontal',
          overflow: 'auto',
          display: 'inline-block',
          borderRadius: 4,
          boxShadow: 'inset rgb(0 0 0 / 0.2) 1px 1px 2px 1px',
          background: '#fff'
        }}>
          <TextTrim 
            refId="TextTruncator"
            text={text}
            minLines={minLines}
            maxLines={maxLines}
            showMoreLabel={showMoreLabel}
            showLessLabel={showLessLabel}
            delimiter={delimiter}
            fontSize={fontSize}
            lineHeight={lineHeight}
          />
        </div>
        <span className="hint">Hint: the container is resizable.</span>
        <label htmlFor="fontSize">Font-size</label>
        <input name="fontSize" type="number" value={fontSize} onChange={e => this.setState({fontSize: e.target.value * 1})} />
        <label htmlFor="lineHeight">Line-height</label>
        <input name="lineHeight" type="number" value={lineHeight} onChange={e => this.setState({lineHeight: e.target.value * 1})} />
        <label htmlFor="minLines">Min-lines</label>
        <input name="minLines" type="number" value={minLines} onChange={e => this.setState({minLines: e.target.value * 1})} />
        <label htmlFor="maxLines">Max-lines (0 = no limit)</label>
        <input name="maxLines" type="number" value={maxLines} onChange={e => this.setState({maxLines: e.target.value * 1})} />
        <label htmlFor="showMoreLabel">Show more label</label>
        <input name="showMoreLabel" type="text" value={showMoreLabel} onChange={e => this.setState({showMoreLabel: e.target.value})} />
        <label htmlFor="showLessLabel">Show less label</label>
        <input name="showLessLabel" type="text" value={showLessLabel} onChange={e => this.setState({showLessLabel: e.target.value})} />
        <label htmlFor="delimiter">Delimiter</label>
        <input name="delimiter" type="text" value={delimiter} onChange={e => this.setState({delimiter: e.target.value})} />
        <label htmlFor="text">Text</label>
        <textarea name="text" type="text" value={text} onChange={e => this.setState({text: e.target.value})} />
      </div>
    );
  }
}

export default App
