import * as React from "react"
import { useState } from "react"
import ReactJson from 'react-json-view'
import Switch from "react-switch"

const TOGGLE_TYPES = ["release", "context"]
const OPERATIONS_TYPES = ["eq", "ne", "gt", "ge", "lt", "le"]

const DefaultPage = () => {
  const [data,setData] = useState({
      toggles:[]
  });
  const [processData,setProcessData] = useState();
  const changeData = async (field, value) => {
    const result = {...data, [field]: value }
    setData(result)
    setProcessData({
      toggles: result.toggles
      .map(toggle => {

        const mappedToggle = {
          name: toggle.name,
          type: toggle.type,
          conditions: toggle.type=== TOGGLE_TYPES[1]? toggle.conditions.filter(condition => condition.field && condition.value) : undefined,
          value: toggle.type=== TOGGLE_TYPES[0]? toggle.value : undefined,
        }
        return JSON.parse(JSON.stringify(mappedToggle))
      }).filter(toggle => 
        toggle.name 
        && (
          toggle.type ===TOGGLE_TYPES[0] || toggle.conditions.length > 0))
    })
  }
  const updateToggle = async (index, field, value) =>
    changeData("toggles", data.toggles.map((toggle, indexToChange) => index === indexToChange ? {...toggle, [field]: value } : toggle ))
  const updateCondition = async (toggleIndex, conditions, index, value) =>
    updateToggle(toggleIndex, "conditions", conditions.map((condition, indexToChange) => index === indexToChange ? value : condition))
  return (<>
  
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>State</th>
                <th><div className="actions">
                    Actions
                    <button class="button button--primary" onClick={() => changeData("toggles", [...data.toggles, {
                      name: undefined,
                      type: TOGGLE_TYPES[0],
                      conditions: [],
                      value: false,
                    }])}>Add</button>
                </div></th>
            </tr>
        </thead>
        <tbody>
          {
            data.toggles.map( (toggle, index) =>(
              <tr key={`toggle_${index}`}>
                <td >
                  <input type="text" placeholder="Enter Name" value={ toggle.name } onChange={(event) => updateToggle(index, "name", event.target.value)} required/>
                </td>
                <td ><select
                        class="button button--secondary"
                        onChange={event => updateToggle(index,"type", event.target.value)}
                        value={toggle.type}
                        required>
                    {
                        TOGGLE_TYPES.map(type => 
                            <option key={`toggleType`}>{type}</option>
                        )
                    }
                    </select>
                </td>
                <td>{toggle.type === TOGGLE_TYPES[0] 
                    ? (<Switch
                        checked={toggle.value}
                        onChange={(checked) => updateToggle(index,"value", checked)}/>) 
                    : toggle.conditions.map((condition, indexCondition) => (<>
                          <input type="text" placeholder="Enter field" value={ condition.field } onChange={(event) => updateCondition(index, toggle.conditions, indexCondition, {...condition, field: event.target.value})} />
                          <select
                              onChange={event => updateCondition(index, toggle.conditions, indexCondition, {...condition, operation: event.target.value})}
                              value={condition.operation} 
                              required>
                          {
                              OPERATIONS_TYPES.map(type => 
                                  <option key={`OperationType`}>{type}</option>
                              )
                          }
                          </select>
                          <input type="text" placeholder="Enter value" value={ condition.value } onChange={(event) => updateCondition(index, toggle.conditions, indexCondition, {...condition, value: event.target.value})} />
                          <button class="button button--primary" onClick={() => updateToggle(index, "conditions", toggle.conditions.filter((_, indexDelete) => indexCondition !== indexDelete))}>Delete</button>
                        </>))
                      }
                </td>
                <td>
                    <div className="actions">

                      {toggle.type === TOGGLE_TYPES[1] && <button class="button button--primary" onClick={() => updateToggle(index,"conditions", [...toggle.conditions, {
                        field: undefined,
                        value:undefined,
                        operation: OPERATIONS_TYPES[0]
                      }]) }>Add Condition</button> }
                      <button class="button button--primary" onClick={() => changeData("toggles", data.toggles.filter((_, indexDelete) => index !== indexDelete))}>Delete</button>
                    </div>
                </td>
              </tr>
            ))
          }
        </tbody>
    </table>
    <ReactJson src={processData} name={false} />
  </>)
}

export default function generator(){
  return (
      <DefaultPage />
  );
} 
