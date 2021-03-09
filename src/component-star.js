import _ from "lodash";

class Star extends React.Component {
	getElementStyle = className => {
		const dashicons = {
			outline: 'dashicons dashicons-star-empty',
			colored: 'dashicons dashicons-star-filled custom-color',
			full: 'dashicons dashicons-star-filled',
		};

		let style = _.chain( className )
			.split( ' ' )
			.last()
			.replace( 'is-style-', '' );

		if ( 'undefined' === typeof dashicons[ style ] ) style = 'full';
		return dashicons[ style ];
	}

	render() {
		const { count, className, setAttributes } = this.props;
		const elementStyle = this.getElementStyle( className );
		setAttributes( { elementStyle: elementStyle } );

		const stars = [];
		for (let i = 0; i < count; i++ ) {
			stars.push( <span key={ i } className={ elementStyle } /> );
		}

		return (
			<div className='star-rating-wrapper'>
				{ stars }
			</div>
		);
	}
}

export default Star;