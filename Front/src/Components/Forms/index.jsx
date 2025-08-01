import { Input } from "../Input";
import { Label } from "../Label";
import { Button } from "../Button";
import './style.sass';

export function Forms({ title, listForms, buttonTitle, method, methodFunction, error }) {
	return (
		<section className="container-forms">
			<h2>{title}</h2>
			{error && <p className="error">{error}</p>}
			
			<form onSubmit={methodFunction}>
				{listForms.map((item, key) => (
					<div className="container-input" key={key}>
						<Label text={item.nameLabel} />
						<Input 
							type={item.type} 
							atributo={item.atributo} 
							placeholder={item.placeholder} 
							setFunction={item.setFunction}
							disabled={item.disabled}
							options={item.options}
						/>
					</div>
				))}
				<Button text={buttonTitle} />
			</form>
		</section>
	);
}
