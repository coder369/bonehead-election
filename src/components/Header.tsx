import React from "react";

import "./Header.css";

export type HeaderProps = {
    headerText?: string;
};

export function Header(props: HeaderProps) {
    return (
        <header className="boneheads-header">
            <h1>{props.headerText}</h1>
        </header>
    );
}

Header.defaultProps = {
    headerText: "The BoneHeads",
};
