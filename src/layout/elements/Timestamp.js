import React from "react";

const Timestamp = ({ extraClassNamesSpaceSeparated, children }) => (
    <div className={"timestamp " + (extraClassNamesSpaceSeparated || '')}>{children}</div>
)

export default Timestamp