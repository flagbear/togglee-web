import * as React from "react"
import { useState } from "react"
import ReactJson from 'react-json-view'
import Switch from "react-switch"
import "./index.css";

const TOGGLE_TYPES = ["release", "context"]
const OPERATIONS_TYPES = [{
  name: "equal",
  value: "eq"
},{
  name: "not equal",
  value: "ne"
},{
  name: "bigger",
  value: "gt"
},{
  name: "bigger equal",
  value: "ge"
},{
  name: "lower",
  value: "lt"
},{
  name: "lower equal",
  value: "le"
}]

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
  return (
  <div style={{
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'stretch',
  }}>
    <table class="table">
        <thead>
            <tr>
                <th style={{
                  width: '20vw'
                }}>Name</th>
                <th style={{
                  width: '10vw'
                }}>Type</th>
                <th style={{
                  width: '50vw'
                }}>State</th>
                <th style={{
                  width: '15vw'
                }}><div className="actions">
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
                  <input type="text" placeholder="Name" value={ toggle.name } onChange={(event) => updateToggle(index, "name", event.target.value)} required/>
                </td>
                <td ><select
                        class="button button--secondary"
                        onChange={event => updateToggle(index,"type", event.target.value)}
                        value={toggle.type}
                        required>
                    {
                        TOGGLE_TYPES.map((type, indexType) => 
                            <option key={`toggleType_${toggle.name}_${index}_${indexType}`}>{type}</option>
                        )
                    }
                    </select>
                </td>
                <td>{toggle.type === TOGGLE_TYPES[0] 
                    ? (<Switch
                        checked={toggle.value}
                        onChange={(checked) => updateToggle(index,"value", checked)}/>) 
                    : toggle.conditions.map((condition, indexCondition) => (<>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column', 
                            alignContent: 'stretch',
                          }}>
                            <div>
                            <input style={{
                            width: 100
                          }} type="text" placeholder="Field" value={ condition.field } onChange={(event) => updateCondition(index, toggle.conditions, indexCondition, {...condition, field: event.target.value})} />
                          <select style={{
                            width: 170
                          }} 
                              class="button button--secondary"
                              onChange={event => updateCondition(index, toggle.conditions, indexCondition, {...condition, operation: event.target.value})}
                              value={condition.operation} 
                              required>
                          {
                              OPERATIONS_TYPES.map((type, indexType) => 
                                  <option key={`OperationTypetoggleType_${toggle.name}_${index}_${indexType}`} value={type.value}>{type.name}</option>
                              )
                          }
                          </select>
                          <input  style={{
                            width: 100
                          }} type="text" placeholder="Value" value={ condition.value } onChange={(event) => updateCondition(index, toggle.conditions, indexCondition, {...condition, value: event.target.value})} />
                          <button class="button button--primary" onClick={() => updateToggle(index, "conditions", toggle.conditions.filter((_, indexDelete) => indexCondition !== indexDelete))}>Delete</button>
                          </div></div>
                        </>))
                      }
                </td>
                <td>
                    <div className="actions">

                      {toggle.type === TOGGLE_TYPES[1] && <button class="button button--primary" onClick={() => updateToggle(index,"conditions", [...toggle.conditions, {
                        field: undefined,
                        value:undefined,
                        operation: OPERATIONS_TYPES[0].value
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
  </div>)
}

export default function generator(){
  return (<DefaultPage />);
} 
