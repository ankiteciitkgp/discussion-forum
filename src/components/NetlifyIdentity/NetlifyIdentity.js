import React, { Component }  from 'react';

function initNetlifyIdentity() {
    console.log("initialized netlify identity");

    const script = document.createElement("script");

    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.async = true;

    document.body.appendChild(script);
        
}

class NetlifyIdentity extends Component {

    componentDidMount() {
        initNetlifyIdentity();
    }

    render() {
        return (<div></div>)
    }
}

export{NetlifyIdentity}