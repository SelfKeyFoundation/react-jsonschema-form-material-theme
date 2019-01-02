import React, { Component } from "react";
import { render } from "react-dom";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";

import { shouldRender } from "react-jsonschema-form/lib/utils";
import { samples } from "./samples/index";

import withTheme from "react-jsonschema-form/lib/components/withTheme";

import theme from '../src/index';

const Form = withTheme('MyTheme', { widgets: theme.widgets, templates: theme.templates })

// Import a few CodeMirror themes; these are used to match alternative
// bootstrap ones.
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/blackboard.css";
import "codemirror/theme/mbo.css";
import "codemirror/theme/ttcn.css";
import "codemirror/theme/solarized.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/eclipse.css";
import { Grid, List, ListItem } from "@material-ui/core";
import { SelfkeyDarkTheme } from "selfkey-ui";


const log = type => console.log.bind(console, type);
const fromJson = json => JSON.parse(json);
const toJson = val => JSON.stringify(val, null, 2);
const liveValidateSchema = { type: "boolean", title: "Live validation" };
const cmOptions = {
  theme: "default",
  height: "auto",
  viewportMargin: Infinity,
  mode: {
    name: "javascript",
    json: true,
    statementIndent: 2,
  },
  lineNumbers: true,
  lineWrapping: true,
  indentWithTabs: false,
  tabSize: 2,
};

class GeoPosition extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.formData };
  }


  onChange(name) {
    return event => {
      this.setState({ [name]: parseFloat(event.target.value) });
      setImmediate(() => this.props.onChange(this.state));
    };
  }

  render() {
    const { lat, lon } = this.state;
    return (
      <div className="geo">
        <h3>Hey, I'm a custom component</h3>
        <p>
          I'm registered as <code>geo</code> and referenced in
          <code>uiSchema</code> as the <code>ui:field</code> to use for this
          schema.
        </p>
        <div className="row">
          <div className="col-sm-6">
            <label>Latitude</label>
            <input
              className="form-control"
              type="number"
              value={lat}
              step="0.00001"
              onChange={this.onChange("lat")}
            />
          </div>
          <div className="col-sm-6">
            <label>Longitude</label>
            <input
              className="form-control"
              type="number"
              value={lon}
              step="0.00001"
              onChange={this.onChange("lon")}
            />
          </div>
        </div>
      </div>
    );
  }
}

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { valid: true, code: props.code };
  }

  componentWillReceiveProps(props) {
    this.setState({ valid: true, code: props.code });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldRender(this, nextProps, nextState);
  }

  onCodeChange = (editor, metadata, code) => {
    this.setState({ valid: true, code });
    setImmediate(() => {
      try {
        this.props.onChange(fromJson(this.state.code));
      } catch (err) {
        this.setState({ valid: false, code });
      }
    });
  };

  render() {
    const { title, theme } = this.props;
    const icon = this.state.valid ? "ok" : "remove";
    const cls = this.state.valid ? "valid" : "invalid";
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <span className={`${cls} glyphicon glyphicon-${icon}`} />
          {" " + title}
        </div>
        <CodeMirror
          value={this.state.code}
          onChange={this.onCodeChange}
          autoCursor={false}
          options={Object.assign({}, cmOptions, { theme })}
        />
      </div>
    );
  }
}

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = { current: "Simple" };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldRender(this, nextProps, nextState);
  }

  onLabelClick = label => {
    return event => {
      event.preventDefault();
      this.setState({ current: label });
      setImmediate(() => this.props.onSelected(samples[label]));
    };
  };

  render() {
    const flexContainer = {
      display: 'flex',
      flexDirection: 'row',
      padding: 0,
    };
    
    return (
      
      <List style={flexContainer}>
        {Object.keys(samples).map((label, i) => {
          return (
            <ListItem
              key={i}
              role="presentation"
              className={this.state.current === label ? "active" : ""}>
              <a href="#" onClick={this.onLabelClick(label)}>
                {label}
              </a>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

class CopyLink extends Component {
  onCopyClick = event => {
    this.input.select();
    document.execCommand("copy");
  };

  render() {
    const { shareURL, onShare } = this.props;
    if (!shareURL) {
      return (
        <button className="btn btn-default" type="button" onClick={onShare}>
          Share
        </button>
      );
    }
    return (
      <div className="input-group">
        <input
          type="text"
          ref={input => (this.input = input)}
          className="form-control"
          defaultValue={shareURL}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="button"
            onClick={this.onCopyClick}>
            <i className="glyphicon glyphicon-copy" />
          </button>
        </span>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    // initialize state with Simple data sample
    const { schema, uiSchema, formData, validate } = samples.Simple;
    this.state = {
      form: false,
      schema,
      uiSchema,
      formData,
      validate,
      editor: "default",
      theme: "default",
      liveValidate: true,
      shareURL: null,
    };
  }

  componentDidMount() {
    const hash = document.location.hash.match(/#(.*)/);
    if (hash && typeof hash[1] === "string" && hash[1].length > 0) {
      try {
        this.load(JSON.parse(atob(hash[1])));
      } catch (err) {
        alert("Unable to load form setup data.");
      }
    } else {
      this.load(samples.Simple);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldRender(this, nextProps, nextState);
  }

  load = data => {
    // force resetting form component instance
    this.setState({ form: false }, _ =>
      this.setState({
        ...data,
        form: true,
        templates: data.templates,
      })
    );
  };

  onSchemaEdited = schema => this.setState({ schema, shareURL: null });

  onUISchemaEdited = uiSchema => this.setState({ uiSchema, shareURL: null });

  onFormDataEdited = formData => this.setState({ formData, shareURL: null });

  onThemeSelected = (theme, { stylesheet, editor }) => {
    this.setState({ theme, editor: editor ? editor : "default" });
    setImmediate(() => {
      // Side effect!
      document.getElementById("theme").setAttribute("href", stylesheet);
    });
  };

  setLiveValidate = ({ formData }) => this.setState({ liveValidate: formData });

  onFormDataChange = ({ formData }) =>
    this.setState({ formData, shareURL: null });

  onShare = () => {
    const { formData, schema, uiSchema } = this.state;
    const {
      location: { origin, pathname },
    } = document;
    try {
      const hash = btoa(JSON.stringify({ formData, schema, uiSchema }));
      this.setState({ shareURL: `${origin}${pathname}#${hash}` });
    } catch (err) {
      this.setState({ shareURL: null });
    }
  };

  render() {
    const {
      schema,
      uiSchema,
      formData,
      liveValidate,
      validate,
      theme,
      editor,
      templates,
      transformErrors,
    } = this.state;

    const flexGrow = {
      flexGrow: 1
    };

    return (
      <div style={flexGrow}>
        <Grid container direction='column' spacing={32}>
          <Grid item xs={12}>
            <h1>react-jsonschema-form</h1>
            <div className="row">
              <div className="col-sm-8">
                <Selector onSelected={this.load} />
              </div>
              <div className="col-sm-2">
                <Form
                  idPrefix="live-validate"
                  schema={liveValidateSchema}
                  formData={liveValidate}
                  onChange={this.setLiveValidate}>
                  <div />
                </Form>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction='row' spacing={32}>
              <Grid item xs={8}>
                <Grid container direction='column' spacing={32}>
                  <Grid item>
                    <Editor
                      title="JSONSchema"
                      theme={editor}
                      code={toJson(schema)}
                      onChange={this.onSchemaEdited}
                    />
                  </Grid>
                  <Grid item>
                    <Grid container direction='row'>
                      <Grid item xs={6}>
                        <Editor
                          title="UISchema"
                          theme={editor}
                          code={toJson(uiSchema)}
                          onChange={this.onUISchemaEdited}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Editor
                          title="formData"
                          theme={editor}
                          code={toJson(formData)}
                          onChange={this.onFormDataEdited}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                {this.state.form && (
                  <SelfkeyDarkTheme>
                    <Form
                      templates={templates}
                      liveValidate={liveValidate}
                      schema={schema}
                      uiSchema={uiSchema}
                      formData={formData}
                      onChange={this.onFormDataChange}
                      onSubmit={({ formData }) =>
                        console.log("submitted formData", formData)
                      }
                      fields={{ geo: GeoPosition }}
                      validate={validate}
                      onBlur={(id, value) =>
                        console.log(`Touched ${id} with value ${value}`)
                      }
                      onFocus={(id, value) =>
                        console.log(`Focused ${id} with value ${value}`)
                      }
                      transformErrors={transformErrors}
                      onError={log("errors")}>
                      <div className="row">
                        <div className="col-sm-3">
                          <button className="btn btn-primary" type="submit">
                            Submit
                          </button>
                        </div>
                        <div className="col-sm-9 text-right">
                          <CopyLink
                            shareURL={this.state.shareURL}
                            onShare={this.onShare}
                          />
                        </div>
                      </div>
                    </Form>
                  </SelfkeyDarkTheme>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
