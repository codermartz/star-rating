import Star from './component-star';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, RangeControl } = wp.components;

registerBlockType( 'devton/star-rating', {
	title: __( 'Star Rating', 'devton' ),
	description: __( 'Rate content based on importance and usefulness', 'devton' ),
	category: 'widgets',
	icon: 'star-empty',
	keywords: [ 
		__( 'Star', 'devton' ),
		__( 'Rating', 'devton' ),
		__( 'Rate', 'devton' ),
	],
	styles: [
		{
			name: 'full',
			label: __( 'Full', 'devton' ),
			isDefault: true,
		},
		{
			name: 'outline',
			label: __( 'Outline', 'devton' ),
		},
		{
			name: 'colored',
			label: __( 'Colored', 'devton' ),
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
						title={ __( 'Star Rating Settings', 'devton' ) }
						initialOpen={ true }
					>
						<RangeControl
							label={ __( 'Number of stars', 'devton' ) }
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