module.exports = {
	schema: {
		type: 'array',
		title: 'Multiple Images',
		items: {
			type: 'object',
			format: 'file',
			properties: {
				mimeType: {
					type: 'string',
					enum: ['image/jpeg', 'image/png', 'application/pdf'],
				},
				size: {
					type: 'integer',
					maximum: 5000000,
				},
				content: {
					type: 'string',
				},
			},
			required: ['mimeType', 'size', 'content'],
		},
		"minItems": 1,
		"noFill": true
	},
	formData: undefined,
	uiSchema: {},
};
