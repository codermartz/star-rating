import Star from './component-star';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, RangeControl } = wp.components;

registerBlockType( 'devton/star-rating', {
	title: __( 'Star Rating', 'star-rating' ),
	description: __( 'Rate content based on importance and usefulness', 'star-rating' ),
	category: 'widgets',
	icon: 'star-empty',
	keywords: [ 
		__( 'Star', 'star-rating' ),
		__( 'Rating', 'star-rating' ),
		__( 'Rate', 'star-rating' ),
	],
	styles: [
		{
			name: 'full',
			label: __( 'Full', 'star-rating' ),
			isDefault: true,
		},
		{
			name: 'outline',
			label: __( 'Outline', 'star-rating' ),
		},
		{
			name: 'colored',
			label: __( 'Colored', 'star-rating' ),
		}
	],
	attributes: {
		count: {
			type: 'integer',
			default: 5,
		},
		elementStyle: {
			type: 'string',
			default: '',
		}
	},
	edit: ( { attributes, setAttributes, className } ) => {
		return (
			<div className={ className }>
				<InspectorControls>
					<PanelBody
						title={ __( 'Star Rating Settings', 'star-rating' ) }
						initialOpen={ true }
					>
						<RangeControl
							label={ __( 'Number of stars', 'star-rating' ) }
							value={ attributes.count }
							onChange={ newValue => setAttributes( { count: newValue } ) }
							min={1}
							max={5}
						/>
					</PanelBody>
				</InspectorControls>
				<Star
					count={ attributes.count }
					className={ className }
					setAttributes={ setAttributes }
				/>
			</div>
		);
	},
	save: ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const stars = [];
		for (let i = 0; i < attributes.count; i++ ) {
			stars.push( <span key={ i } className={ attributes.elementStyle } /> );
		}

		return (
			<div { ...blockProps }>
				<div className='star-rating-wrapper'>
					{ stars }
				</div>
			</div>
		);
	},
} );