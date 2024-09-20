import React from 'react';
import Avatar from './Avatar';

export default function Profile({name, title, image, isNew}) {   //()안에 props라고 넣어줘도 됨
    return (
        <div className='profile'>
            <Avatar image={image} isNew={isNew}/>
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

