import React from "react";

const Label = ({ extraClassNamesSpaceSeparated, children }) => (
    <div className={"label " + (extraClassNamesSpaceSeparated || '')}>{children}</div>
)

export default Label