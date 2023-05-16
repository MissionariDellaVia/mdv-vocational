import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class MarkdownRender extends Component {
  constructor(props) {
    super(props)

    this.state = { file: null }
  }

  componentDidMount() {
    fetch(this.props.mdFile).then((response) => response.text()).then((text) => {
      this.setState({ file: text })
    })
  }

  render() {
    return (
      <div className="markdown">
        <ReactMarkdown source={this.state.file} escapeHtml={false} />
      </div>
    )
  }
}

export default MarkdownRender