import React from 'react';

export default function Avatar({image, isNew}) {   //()안에 props라고 넣어줘도 됨
    return (
        <div className='avatar'>
            <img 
                className='photo'
                src={image}     //위에 props라고 넣어줬을때 props.image로 바꿔줘야함
                alt="avatar" 
            />
            { isNew && <span className='new'>new</span> } 
        </div>
    );
}

