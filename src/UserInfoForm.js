// import { withEditableUsers } from "./withEditableUsers";
import { withEditableResource } from "./withEditableResources";

export const UserInfoForm = withEditableResource(({user, onChangeUser, onSaveUser, onResetUser}) => {
    const {name, age, hairColor} = user || {};
    return user ? (
        <>
        <input value={name} onChange={e => onChangeUser({name:e.target.value})} />
        <input value={age} onChange={e => onChangeUser({age:e.target.value})} />
        <input value={hairColor} onChange={e => onChangeUser({hairColor:e.target.value})} />
        <button onClick={onSaveUser}>Save</button>
        <button onClick={onResetUser}>Reset</button>
        </>
    ) : <p>Loading...</p>;
}, 'http://localhost:8080/users/123','user');