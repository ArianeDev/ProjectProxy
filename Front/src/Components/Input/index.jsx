import './style.sass';

export function Input({ type, placeholder, atributo, setFunction, disabled, options = [] }) {
	if (type === 'select') {
		return (
			<div className="selectInputWrapper">
				<select
					value={atributo}
					onChange={(e) => setFunction(e.target.value)}
					className="selectInput"
					disabled={disabled}
					required
				>
					{options.map((opt, i) => (
						<option key={i} value={opt.value}>{opt.label}</option>
					))}
				</select>
			</div>
		);
	}

	if (type === 'checkbox') {
		return (
			<div className="checkboxInputWrapper">
				<input
					type="checkbox"
					checked={atributo}
					onChange={(e) => setFunction(e.target.checked)}
					className="checkboxInput"
				/>
			</div>
		);
	}

	if (type === 'textarea') {
        return (
            <div className="textareaInputWrapper">
                <textarea
                    value={atributo}
                    placeholder={placeholder}
                    onChange={(e) => setFunction(e.target.value)}
                    className="textareaInput"
                    disabled={disabled}
                    required
                    rows={5}
                />
            </div>
        );
    }

	return (
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
