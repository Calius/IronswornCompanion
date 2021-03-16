import React, { Component } from "react";
import OracleRoller from "./oracleRoller";
class OracleEditor extends Component {
  state = {};
  componentDidUpdate() {
    let el = document.getElementById("tableEditor");
    el.setSelectionRange(
      this.props.oracles.editOracleCursorPosition,
      this.props.oracles.editOracleCursorPosition
    );
  }
  render() {
    return (
      <React.Fragment>
        <h1>Oracles</h1>
        <div className="row">
          <div className="col">
            <h3>New Oracle Table</h3>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="btn btn-dark btn-tag">Table Name</label>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Table Name"
                aria-label="Name"
                aria-describedby="basic-addon2"
                value={this.props.oracles.newOracleTableName}
                onChange={(e) => this.props.onNewOracleTableNameChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => this.props.onAddOracleTable()}
            >
              <i className="fas fa-plus" aria-hidden="true"></i>
              &nbsp;Add Oracle Table
            </button>
          </div>
        </div>
        <div className="row">
          <div id="oracle_editor" className="col-5">
            <h3>
              <i class="fa fa-table" aria-hidden="true"></i> Edit Oracle Table
            </h3>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="btn btn-dark btn-tag">Select Table</label>
              </div>

              <select
                className="form-control"
                value={this.props.selectedOracleTable}
                onChange={(e) => this.props.onSelectedOracleTableChange(e)}
              >
                <option val="">Select Table</option>
                {this.props.oracles.OracleTableNames.map((o) => (
                  <option
                    key={this.props.oracles.OracleTableNames.indexOf(o)}
                    value={o}
                  >
                    {o}
                  </option>
                ))}
              </select>
            </div>
            {/* <div contenteditable="true"></div> */}
            <textarea
              id="tableEditor"
              wrap="off"
              value={this.props.oracles.getOracleTablePrompts(
                this.props.selectedOracleTable
              )}
              onChange={(e) => this.props.onOracleTablePromptsChange(e)}
            ></textarea>
            {this.props.oracles.isCore(this.props.selectedOracleTable) ? (
              <React.Fragment></React.Fragment>
            ) : (
              <React.Fragment>
                <div className="row">
                  <div className="col">
                    <div
                      id="locationDeleteBtn"
                      className={`mt-2 ${this.state.deleteButtonClass}`}
                      onClick={() =>
                        this.props.onDeleteOracleTable(
                          this.props.selectedOracleTable
                        )
                      }
                    >
                      <button className="btn btn-danger">
                        <i className="fas fa-times"></i> Delete Table
                      </button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
          <div className="col-7">
            <h3>
              <i class="ra ra-crystal-ball" aria-hidden="true"></i> Ask the
              Oracle
            </h3>
            {this.props.oracles.tables.map((o) => (
              <OracleRoller tableName={o.title} oracles={this.props.oracles} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OracleEditor;