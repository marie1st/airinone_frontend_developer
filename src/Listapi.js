import React from 'react';
const Listapi = (props) => {
    const { repos } = props;
    if (!repos || repos.length ===0) return <p>NULL DATABASE, sorry</p>;
    return (
            <p>wanna do it on new year {repos}</p>
    )
};

export default Listapi;