import React from "react";
import './button.css'
export default function Button({label})
{
    return <div data-testid="button"className="button-style">{label}</div>
    //data is the special attribute used in html 
}
export function Button2({label})
{
    return <div data-testid="button1"className="button-style3">{label}</div>
}


