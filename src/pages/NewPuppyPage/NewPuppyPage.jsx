import { useState, useRef, useEffect } from "react";

export default function NewPuppyPage(props) {
	const [invalidForm, setValidForm] = useState(true);
	const [formData, setFormData] = useState({
		name: '',
		breed: 'Mixed',
		age: '0',
	});

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity()
			? setValidForm(false)
			: setValidForm(true);
	}, [formData]);

	const handleSubmit = e => {
		e.preventDefault();
		props.handleAddPuppy(formData);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

    return (
        <>
        <h1>New Puppy Page</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Breed</label>
                <input 
                    name="breed"
                    value={ formData.breed}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Age</label>
                <input 
                    name="age"
                    value={ formData.age }
                    onChange={handleChange}
                />
            </div>
            <button type="submit" disabled={invalidForm}>
                ADD PUPPY
            </button>
        </form>
        </>
    );
   }