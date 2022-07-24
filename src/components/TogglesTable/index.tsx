import * as React from "react"
import Switch from "react-switch"
import { uuid } from "@site/src/helpers/uuid";
import "./index.css";

export const TOGGLE_TYPES = ["release", "context"]
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

export const ToggleTable = ({data, changeData}: any) => {
  const updateToggle = async (index, field, value) =>
    changeData("toggles", data.toggles.map((toggle: any, indexToChange: number) => index === indexToChange ? {...toggle, [field]: value } : toggle ))
  const updateCondition = async (toggleIndex, conditions, index, value) =>
    updateToggle(toggleIndex, "conditions", conditions.map((condition: any, indexToChange: any) => index === indexToChange ? value : condition))
  return (
    <table className="table">
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
                    <button className="button button--primary" onClick={() => changeData("toggles", [...data.toggles, {
                      name: undefined,
                      type: TOGGLE_TYPES[0],
                      conditions: [],
                      value: false,
                      key: uuid()
                    }])}>
                      <i className="fa fa-plus fa-lg"></i>
                    </button>
                </div></th>
            </tr>
        </thead>
        <tbody>
          {
            data.toggles.map( (toggle: any, index: number) =>(
              <tr key={`toggle_${toggle.key}`}>
                <td >
                  <input type="text" placeholder="Name" value={ toggle.name } onChange={(event) => updateToggle(index, "name", event.target.value)} required/>
                </td>
                <td ><select
                        className="button button--secondary"
                        onChange={event => updateToggle(index,"type", event.target.value)}
                        value={toggle.type}
                        required>
                    {
                        TOGGLE_TYPES.map((type, indexType) => 
                            <option key={`toggleType_${toggle.key}_${indexType}`}>{type}</option>
                        )
                    }
                    </select>
                </td>
                <td>{toggle.type === TOGGLE_TYPES[0] 
                    ? (<Switch
                        className="switch"
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
                            width: 150
                          }} type="text" placeholder="Field" value={ condition.field } onChange={(event) => updateCondition(index, toggle.conditions, indexCondition, {...condition, field: event.target.value})} />
                          <select style={{
                            width: 155
                          }} 
                              className="button button--secondary"
                              onChange={event => updateCondition(index, toggle.conditions, indexCondition, {...condition, operation: event.target.value})}
                              value={condition.operation} 
                              required>
                          {
                              OPERATIONS_TYPES.map((type, indexType) => 
                                  <option key={`OperationTypetoggleType_${toggle.key}_${indexType}`} value={type.value}>{type.name}</option>
                              )
                          }
                          </select>
                          <input  style={{
                            width: 150
                          }} type="text" placeholder="Value" value={ condition.value } onChange={(event) => updateCondition(index, toggle.conditions, indexCondition, {...condition, value: event.target.value})} />
                          <button className="button button--primary" onClick={() => updateToggle(index, "conditions", toggle.conditions.filter((_, indexDelete) => indexCondition !== indexDelete))}>
                            <i className="fa-regular fa-trash-can fa-lg"></i>
                          </button>
                          </div></div>
                        </>))
                      }
                </td>
                <td>
                    <div className="actions">

                      {toggle.type === TOGGLE_TYPES[1] && <button className="button button--primary" onClick={() => updateToggle(index,"conditions", [...toggle.conditions, {
                        field: undefined,
                        value:undefined,
                        operation: OPERATIONS_TYPES[0].value
                      }]) }>
                      <i className="fa fa-plus fa-lg"></i>
                      </button> }
                      <button className="button button--primary" onClick={() => changeData("toggles", data.toggles.filter((_, indexDelete) => index !== indexDelete))}>
                        <i className="fa-regular fa-trash-can fa-lg"></i>
                      </button>
                    </div>
                </td>
              </tr>
            ))
          }
        </tbody>
    </table>)
}
