import React from 'react';
import { Button } from 'react-bootstrap';

export default class ScriptContainer extends React.Component {
  constructor(props)
  {
    super(props);

    let width = "100%";
    let height = "300px";
    let docString = "<body><h1>Add HTML to docString Please</h1></body>";
    let scrolling = "no";
    if (props.width)
      width = props.width;
    if (props.height)
      height = props.height;
    if (props.docString)
      docString = props.docString;
    if (props.scrolling)
      scrolling = "yes";
    this.state = {
      toggle: false,
      width,
      height,
      scrolling,
      docString
    };
  }

  submitRemoveit() {
    this.setState({toggle: false});
    let ifr = document.getElementById("iframeResult");
    if (ifr)
      ifr.remove();
  }

  submitTryit() {
    this.setState({toggle: true});
    let ifr = document.createElement("iframe");
    ifr.setAttribute("frameborder", "0");
    ifr.setAttribute("scrolling", `${this.state.scrolling}`);
    ifr.setAttribute("style", `width: ${this.state.width}; height: ${this.state.height};`);
    ifr.setAttribute("id", "iframeResult");
    ifr.setAttribute("name", "iframeResult");
    document.getElementById("iframewrapper").innerHTML = "";
    document.getElementById("iframewrapper").appendChild(ifr);

    let ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
    ifrw.document.open();
    ifrw.document.write(this.state.docString);
    ifrw.document.close();
  }

  render()
  {
    let params = {};
    if (this.state.toggle)
    {
      params = {
        style : "danger",
        click : this.submitRemoveit.bind(this),
        text : "Remove"
      }
    }
    else {
      params = {
        style : "info",
        click : this.submitTryit.bind(this),
        text: "Execute"
      }
    }
    return (
        <div id="iframeContainer">
          <Button bsStyle={params.style} onClick={params.click} >
            {params.text}
          </Button>
        <div id="iframewrapper"> </div>
      </div>);
  }
}