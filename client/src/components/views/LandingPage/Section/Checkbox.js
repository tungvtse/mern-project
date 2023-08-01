import React, { useState } from "react";
import { Checkbox, Collapse } from "antd";
import { continents } from "./Data";
const { Panel } = Collapse





function CheckBox(props) {

    const [Checked, SetChecked] = useState([])

    const renderCheckBoxList = () => props.list && props.list.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox style={{ marginLeft: '10px' }}
                onChange={() => {
                    handleToggle(value._id)
                }}
                type="checkbox"
                checked={Checked.indexOf(value._id) === -1 ? false : true}
            />
            <span>  {value.name}</span>
        </React.Fragment>

    ))

    const handleToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];
        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        SetChecked(newChecked)
        props.handleFilters(newChecked)
    }


    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header="Continents" key="1">
                    {renderCheckBoxList()}
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox;