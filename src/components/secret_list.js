import React from 'react';
import auth from '../hoc/auth';

const SecretList= props => (
    <div>
        <h2 className='center-align'>It's a secret List</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus iure magni neque rerum tempora?</p>
        <li>This</li>
        <li>Is</li>
        <li>Secret</li>
        <li>Scottdemy</li>
        <li>Udemy</li>
        <li>Stephen Grider</li>
    </div>
);

export default auth(SecretList);