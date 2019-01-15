import React, { Component } from "react";
import PropTypes from "prop-types";

import { dataURItoBlob, shouldRender, setState } from "react-jsonschema-form/lib/utils";
import { Button, Input, Typography, List, Grid } from "@material-ui/core";
import AttachFileIcon from '@material-ui/icons/AttachFile';

function addNameToDataURL(dataURL, name) {
  return dataURL.replace(";base64", `;name=${name};base64`);
}

function processFile(file) {
  const { name, size, type } = file;
  return new Promise((resolve, reject) => {
    const reader = new window.FileReader();
    reader.onerror = reject;
    reader.onload = event => {
      resolve({
        dataURL: addNameToDataURL(event.target.result, name),
        name,
        size,
        type,
      });
    };
    reader.readAsDataURL(file);
  });
}

function processFiles(files) {
  return Promise.all([].map.call(files, processFile));
}

function FilesInfo(props) {
  const { filesInfo } = props;
  if (filesInfo.length === 0) {
    return null;
  }
  return (
    <List className="file-info">
      {filesInfo.map((fileInfo, key) => {
        const { name, size, type } = fileInfo;
        return (
            <Grid key={key} container alignItems="center">
              <AttachFileIcon fontSize="small" color="secondary" />
              <Typography  variant="subtitle1" color="secondary">
                {name} &nbsp; ({type}, {size} bytes)
              </Typography>
            </Grid>
        );
      })}
    </List>
  );
}

function extractFileInfo(dataURLs) {
  return dataURLs
    .filter(dataURL => typeof dataURL !== "undefined")
    .map(dataURL => {
      const { blob, name } = dataURItoBlob(dataURL);
      return {
        name: name,
        size: blob.size,
        type: blob.type,
      };
    });
}

class FileWidget extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    const values = Array.isArray(value) ? value : [value];
    this.state = { values, filesInfo: extractFileInfo(values) };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldRender(this, nextProps, nextState);
  }

  onChange = event => {
    const { multiple, onChange } = this.props;
    processFiles(event.target.files).then(filesInfo => {
      const state = {
        values: filesInfo.map(fileInfo => fileInfo.dataURL),
        filesInfo,
      };
      setState(this, state, () => {
        if (multiple) {
          onChange(state.values);
        } else {
          onChange(state.values[0]);
        }
      });
    });
  };

  render() {
    const { multiple, id, readonly, disabled, autofocus } = this.props;
    const { filesInfo } = this.state;
    return (
      <div>
          <Input
            ref={ref => (this.inputRef = ref)}
            id={id}
            type="file"
            disabled={readonly || disabled}
            onChange={this.onChange}
            defaultValue=""
            autoFocus={autofocus}
            multiple={multiple}
            style={{display:'none'}}
          />
          <label htmlFor={id}>
            <Button variant="outlined" color="primary" component="span">
              Upload
            </Button>
          </label>
          <br/>
          <FilesInfo filesInfo={filesInfo} />
      </div>
    );
  }
}

FileWidget.defaultProps = {
  autofocus: false,
};


  FileWidget.propTypes = {
    multiple: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    autofocus: PropTypes.bool,
  };

export default FileWidget;
