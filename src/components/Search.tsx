import React, { useState } from "react";

const Search = ({  }) => {
    const [search, setSearch] = useState("");

    const onInputChange = (value: React.SetStateAction<string>) => {
        setSearch(value);
    };
    return (
        <input
            type="text"
            className="form-control"
            style={{ width: "240px" }}
            placeholder="Search"
            value={search}
            onChange={e => onInputChange(e.target.value)}
        />
    );
};

export default Search;