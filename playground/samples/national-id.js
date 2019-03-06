export default {
	schema: {
		identityAttribute: true,
		identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
		title: 'National ID',
		description: 'Please provide a valid national identification document.',
		type: 'object',
		properties: {
			front: {
				title: 'Front image',
				type: 'object',
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
			back: {
				title: 'Back image',
				type: 'object',
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
			issued: {
				title: 'Issue Date',
				type: 'string',
				format: 'date',
			},
			expires: {
				title: 'Expiry Date',
				type: 'string',
				format: 'date',
			},
			selfie: {
				title: 'Selfie',
				description:
					"Take a selfie, making sure the image is clear, and your face isn't covered by any items, such as glasses.",
				type: 'object',
				properties: {
					image: {
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
				required: ['image'],
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
		required: ['front', 'issued'],
	},
	uiSchema: {
		'ui:order': ['front', 'back', 'issued', 'expires', 'selfie', 'extra'],
		country: {
			'ui:label': false,
		},
		selfie: {
			image: {
				'ui:label': false,
			},
		},
		extra: {
			'ui:hidden': true,
		},
	},
	formData: {},
};
