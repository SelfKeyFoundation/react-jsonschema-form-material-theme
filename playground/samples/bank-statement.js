export default {
	schema: {
		identityAttribute: true,
		identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
		title: 'Bank Statement',
		description: 'Please provide a copy of a recent bank statement. No older than 6 months.',
		type: 'object',
		properties: {
			images: {
				title: 'Multiple Images',
				type: 'array',
				items: {
					type: 'object',
					title: 'Image',
					format: 'file',
					properties: {
						mimeType: {
							type: 'string',
							enum: ['image/jpeg', 'image/png', 'application/pdf'],
						},
						size: {
							type: 'integer',
							maximum: 50000000,
						},
						content: {
							type: 'string',
						},
					},
					required: ['mimeType', 'size', 'content'],
				},
			},
			issued: {
				title: 'Issue Date',
				type: 'string',
				format: 'date',
			},
			extra: {
				title: 'Extra Images',
				description: 'Please add any extra images that are relevant',
				type: 'array',
				items: {
					type: 'object',
					title: 'Image',
					format: 'file',
					properties: {
						mimeType: {
							type: 'string',
							enum: ['image/jpeg', 'image/png', 'application/pdf'],
						},
						size: {
							type: 'integer',
							maximum: 50000000,
						},
						content: {
							type: 'string',
						},
					},
					required: ['mimeType', 'size', 'content'],
				},
			},
		},
		required: ['images', 'issued'],
	},
	uiSchema: {
		'ui:order': ['images', 'issued', 'extra'],
		images: {
			'ui:label': false,
		},
		extra: {
			'ui:hidden': true,
		},
	},
	formData: {},
};
