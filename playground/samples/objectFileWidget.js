module.exports = {
  schema: {
    type: "object",
    title: "Image",
    format: "file",
    properties: {
      mimeType: {
        type: "string",
        enum: ["image/jpg", "image/png", "application/pdf"],
      },
      size: {
        type: "integer",
        maximum: 5000000,
      },
      content: {
        type: "string",
      },
    },
    required: ["mimeType", "size", "content"],
  },
  formData: {},
  uiSchema: {},
};
