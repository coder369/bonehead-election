import React, {ChangeEvent, useState} from "react";

import {NewVoter} from "../../models/Voter";
import {useHistory} from "react-router-dom";

export const INITIAL_VOTER_FORM = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    birthdate: "",
    email: "",
    phone: "",
}

export type VoterFormProps = {
    buttonText: string;
    onSubmitVoter: (newVoter: NewVoter) => void;
}

export function VoterForm(props: VoterFormProps) {
    const history = useHistory();

    const [voterForm, setVoterForm] = useState({
        ...INITIAL_VOTER_FORM
    })

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setVoterForm({
            ...voterForm,
            [e.target.name]:
                e.target.type === "number" ? Number(e.target.value) : e.target.value,
        });
    };

    const submitVoter = () => {
        props.onSubmitVoter({
            ...voterForm,
        });

        history.push("/");
    };

    return (
        <form>
            <div>
                <label htmlFor={"firstName-input"}>First Name</label>
                <input type={"text"}
                       id={"firstName-input"}
                       name={"firstName"}
                       value={voterForm.firstName}
                       onChange={change}
                />
            </div>
            <div>
                <label htmlFor={"lastName-input"}>Last Name</label>
                <input type={"text"}
                       id={"lastName-input"}
                       name={"lastName"}
                       value={voterForm.lastName}
                       onChange={change}
                />
            </div>
            <div>
                <label htmlFor={"address-input"}>Address</label>
                <input type={"text"}
                       id={"address-input"}
                       name={"address"}
                       value={voterForm.address}
                       onChange={change}
                />
            </div>
            <div>
                <label htmlFor={"city-input"}>City</label>
                <input type={"text"}
                       id={"city-input"}
                       name={"city"}
                       value={voterForm.city}
                       onChange={change}
                />
            </div>
            <div>
                <label htmlFor={"state-input"}>State</label>
                <input type={"text"}
                       id={"state-input"}
                       name={"state"}
                       value={voterForm.state}
                       onChange={change}
                />
            </div>
            <div>
                <label htmlFor={"zip-input"}>Zip</label>
                <input type={"text"}
                       id={"zip-input"}
                       name={"zip"}
                       value={voterForm.zip}
                       onChange={change}
                />
            </div>
            <div>
                <label htmlFor={"birthdate-input"}>Birth Date</label>
                <input type={"text"}
                       id={"birthdate-input"}
                       name={"birthdate"}
                       value={voterForm.birthdate}
                       onChange={change}
                />
            </div>
            <div>
                <label htmlFor={"email-input"}>Email</label>
                <input type={"text"}
                       id={"email-input"}
                       name={"email"}
                       value={voterForm.email}
                       onChange={change}
                />
            </div>
            <div>
                <label htmlFor={"phone-input"}>Phone</label>
                <input type={"text"}
                       id={"phone-input"}
                       name={"phone"}
                       value={voterForm.phone}
                       onChange={change}
                />
            </div>

            <button className="register-button" type="button" onClick={submitVoter}>
                {props.buttonText}
            </button>
        </form>
    );
}