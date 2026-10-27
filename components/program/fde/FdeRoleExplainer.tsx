"use client";

import { useState } from "react";

export type RoleOption = { key: string; label: string };
type Row = { label: string; fde: string } & Record<string, string>;

const defaultRoles: RoleOption[] = [
  { key: "swe", label: "Software engineer" },
  { key: "mle", label: "ML engineer" },
  { key: "sa", label: "Solutions architect" }
];

/** FDE vs other roles. Desktop shows every column; mobile compares one role against FDE at a time. */
export function FdeRoleExplainer({ rows, roles = defaultRoles, label = "How the FDE role compares" }: { rows: Row[]; roles?: RoleOption[]; label?: string }) {
  const [pick, setPick] = useState<string>(roles[0].key);
  return (
    <div className="fx-roles" data-pick={pick}>
      <div className="fx-roles-toggle" role="group" aria-label="Compare FDE with">
        <span>Compare FDE with</span>
        {roles.map((role) => (
          <button key={role.key} type="button" aria-pressed={pick === role.key} onClick={() => setPick(role.key)}>{role.label}</button>
        ))}
      </div>
      <div className="fx-roles-table" role="table" aria-label={label}>
        <div className="fx-roles-row fx-roles-head" role="row">
          <span role="columnheader"><span className="fx-sr">Dimension</span></span>
          {roles.map((role) => <span role="columnheader" key={role.key} data-col={role.key}>{role.label}</span>)}
          <span role="columnheader" data-col="fde" className="fx-roles-fde">Forward deployed engineer</span>
        </div>
        {rows.map((row) => (
          <div className="fx-roles-row" role="row" key={row.label}>
            <span role="rowheader">{row.label}</span>
            {roles.map((role) => <span role="cell" key={role.key} data-col={role.key}>{row[role.key]}</span>)}
            <span role="cell" data-col="fde" className="fx-roles-fde">{row.fde}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
