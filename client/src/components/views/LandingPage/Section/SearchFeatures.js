import React, { useState } from 'react'
import { Input } from 'antd'
const { Search } = Input;
function SearchFeatures(props) {
    const [SearchTerm, setSearchTerm] = useState("");

    const onChangeSearch = (event) => {
        setSearchTerm(event.target.value)
        props.refreshFunction(event.target.value)
    }
    return (
        <div>
            <Search
                value={SearchTerm}
                onChange={onChangeSearch}
                placeholder="Search by typing..."
            />
        </div>
    )
}

export default SearchFeatures
