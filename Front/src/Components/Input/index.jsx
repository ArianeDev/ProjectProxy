import './style.sass';

export function Input({ type, placeholder, atributo, setFunction, disabled }) {

	return type === 'select' ? (
		<div className="selectInputWrapper">
			<select
				value={atributo}
				onChange={(e) => setFunction(e.target.value)}
				className="selectInput"
				required
			>
				<option value="" disabled>Select an option</option>
				<option value="">algums</option>
			</select>
		</div>
	) : (
		<div className="textInputWrapper">
			<input
				type={type}
				value={atributo}
				placeholder={placeholder}
				onChange={(e) => setFunction(e.target.value)}
				className="textInput"
				disabled={disabled}
				required
			/>
		</div>
	);
}