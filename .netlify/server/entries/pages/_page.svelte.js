import { c as create_ssr_component, e as escape, b as add_attribute, d as compute_slots, v as validate_component, f as each, a as subscribe, n as noop } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { A as Avatar } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
function createDataTableStore(source, options = {}) {
  const modifiedList = source.map((rowObj) => ({ ...rowObj, dataTableChecked: false }));
  const { subscribe: subscribe2, set, update } = writable({
    source,
    base: modifiedList,
    filtered: modifiedList,
    sortState: { lastKey: "", asc: true },
    selection: [],
    search: options.search ?? "",
    sort: options.sort ?? "",
    pagination: options.pagination
  });
  return {
    subscribe: subscribe2,
    set,
    /** Sets a new data source while maintaining the state of the original source */
    updateSource: (data) => update((model) => {
      model.source = data;
      model.base = data.map((row, i) => {
        return { ...row, dataTableChecked: model.base[i]?.dataTableChecked ?? false };
      });
      return { ...model, filtered: model.base };
    }),
    /** Triggered by the "select all" checkbox to toggle all row selection. */
    selectAll: (checked) => {
      update((model) => {
        model.base.forEach((row) => {
          row.dataTableChecked = checked;
          return row;
        });
        return model;
      });
    },
    /** Allows you to dynamically pre-select rows on-demand. */
    select: (key, valuesArr) => {
      update((model) => {
        model.filtered.map((row) => {
          if (valuesArr.includes(row[key]))
            row.dataTableChecked = true;
          return row;
        });
        return model;
      });
    },
    /** Listens for clicks to a table heading with `data-sort` attribute. Updates `$dataTableModel.sort`. */
    sort: (event) => {
      update((model) => {
        if (!(event.target instanceof Element))
          return model;
        const newSortKey = event.target.getAttribute("data-sort");
        if (newSortKey !== "" && newSortKey === model.sortState.lastKey)
          model.sortState.asc = !model.sortState.asc;
        model.sortState.lastKey = newSortKey;
        model.sort = newSortKey ?? "";
        return model;
      });
    }
  };
}
function dataTableHandler(model) {
  searchHandler(model);
  selectionHandler(model);
  sortHandler(model);
  paginationHandler(model);
}
function searchHandler(store) {
  store.filtered = store.base.filter((rowObj) => {
    const formattedSearchTerm = store.search?.toLowerCase() || "";
    return Object.values(rowObj).join(" ").toLowerCase().includes(formattedSearchTerm);
  });
}
function selectionHandler(store) {
  store.selection = store.base.filter((row) => row.dataTableChecked === true);
}
function sortHandler(store) {
  if (!store.sort)
    return;
  store.sortState.asc ? sortOrder("asc", store) : sortOrder("dsc", store);
}
function sortOrder(order, store) {
  const key = store.sort;
  store.filtered = store.base.sort((x, y) => {
    if (order === "dsc")
      [x, y] = [y, x];
    if (typeof x[key] === "string" && typeof y[key] === "string") {
      return String(x[key]).localeCompare(String(y[key]));
    } else {
      const a = x[key];
      const b = y[key];
      return a < b ? -1 : a > b ? 1 : 0;
    }
  });
}
function paginationHandler(store) {
  if (store.pagination) {
    const filtered = store.base.slice(
      store.pagination.offset * store.pagination.limit,
      // start
      store.pagination.offset * store.pagination.limit + store.pagination.limit
      // end
    );
    if (store.search !== "") {
      store.filtered = store.filtered.slice(0, store.pagination.limit);
      store.pagination.size = store.filtered.length;
      store.pagination.offset = 0;
    } else {
      store.filtered = filtered;
      store.pagination.size = store.base.length;
    }
  }
}
function tableSourceMapper(source, keys) {
  return source.map((row) => {
    const mappedRow = {};
    keys.forEach((key) => mappedRow[key] = row[key]);
    return mappedRow;
  });
}
function tableSourceValues(source) {
  return source.map((row) => Object.values(row));
}
function tableMapperValues(source, keys) {
  return tableSourceValues(tableSourceMapper(source, keys));
}
const cBase = "flex flex-col";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
    $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0)
    $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0)
    $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
    $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
    $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="app-bar" role="toolbar"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}> <div class="${"app-bar-row-main " + escape(classesRowMain, true)}"> ${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>  ${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sizebadge.svelte-skuja3{font-size:20px}h3.svelte-skuja3{font-size:30px}h1.svelte-skuja3{font-size:40px;margin-bottom:10px;margin-left:20px;margin-top:20px;margin-right:10px}h2.svelte-skuja3{margin-left:100px;margin-top:50px;margin-bottom:50px;font-size:30px}.input.svelte-skuja3{outline:none;height:40px;margin-bottom:20px;padding:20px}.inputx.svelte-skuja3{height:60px;margin-bottom:40px;margin-right:60px;margin-left:20px;border-radius:30px;background-color:#37446b;padding-left:10px}.inputx.svelte-skuja3:focus{outline:2px solid #0fba81}.insertbutton.svelte-skuja3{margin-left:60px;width:450px;height:60px;border:3px solid #0fba81;border-radius:45px;transition:all 0.3s;cursor:pointer;font-size:1em;font-weight:450;font-family:'Montserrat', sans-serif}.insertbutton.svelte-skuja3:hover{background:#0fba81;color:white}.deleteButton.svelte-skuja3{width:80px;border:3px solid #FFCCCB;margin-left:0;margin-top:10px}.deleteButton.svelte-skuja3:hover{background:#F74F4F;color:white}.editButton.svelte-skuja3{width:80px;border:3px solid #ADD8E6;margin-left:0;margin-top:10px}.editButton.svelte-skuja3:hover{background:#1986F4}.mygrid.svelte-skuja3{display:grid;grid-template-columns:auto auto auto }.inputGrid.svelte-skuja3{display:grid;grid-template-columns:auto auto}html.svelte-skuja3{-webkit-tap-highlight-color:rgba(128, 128, 128, 0.5)}.breadcrumb.svelte-skuja3{margin-left:600px;margin-bottom:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dataTableStore;
  let Employees;
  let $dataTableStore, $$unsubscribe_dataTableStore = noop, $$subscribe_dataTableStore = () => ($$unsubscribe_dataTableStore(), $$unsubscribe_dataTableStore = subscribe(dataTableStore, ($$value) => $dataTableStore = $$value), dataTableStore);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ Employees } = data);
  $$subscribe_dataTableStore(dataTableStore = createDataTableStore(
    // Pass your source data here:
    Employees,
    // Provide optional settings:
    {
      // The current search term.
      search: "",
      // The current sort key.
      sort: "",
      // Paginator component settings.
      pagination: {
        offset: 0,
        limit: 100,
        size: 0,
        amounts: [1, 2, 5, 10]
      }
    }
  ));
  {
    dataTableStore.subscribe((model) => dataTableHandler(model));
  }
  ({
    // A list of heading labels.
    head: [
      "First name",
      "Last name",
      "Sex",
      "Skill",
      "Skill type",
      "School",
      "School Address",
      "Skill level"
    ],
    // The data visibly shown in your table body UI.
    body: tableMapperValues(Employees, [
      "FirstName",
      "LastName",
      "Sex",
      "Skill",
      "SkillType",
      "School",
      "SchoolAdd",
      "SkillLevel"
    ]),
    // Optional: The data returned when interactive is enabled and a row is clicked.
    meta: tableMapperValues(Employees, ["position", "name", "symbol", "weight"])
  });
  {
    dataTableStore.updateSource(Employees);
  }
  $$unsubscribe_dataTableStore();
  return `<html lang="en" class="svelte-skuja3"><head data-svelte-h="svelte-1q9bh0a"><title>Employee managment system</title></head> <body><nav data-svelte-h="svelte-1fxx828"><img src="hilcoe-Logo.png" width="90px" alt="logo" class="logo"> <ol class="breadcrumb svelte-skuja3"><li class="crumb"><a href="/" class="btn btn-sm variant-soft-primary">Staff</a></li> <li class="crumb-separator" aria-hidden>›</li></ol></nav> <div class="mygrid svelte-skuja3"><form id="formId" method="POST" action="?/createEMP" data-svelte-h="svelte-44sahy"><h1 class="svelte-skuja3">Employee managment system</h1> <h2 class="svelte-skuja3">Add a new Employee</h2> <div class="inputGrid svelte-skuja3"><input type="text" required class="inputx svelte-skuja3" placeholder="  First Name" name="Fname"> <input type="text" required class="inputx svelte-skuja3" placeholder="  Last Name" name="Lname"> <input type="text" required class="inputx svelte-skuja3" placeholder="  Sex" name="sex"> <input type="text" required class="inputx svelte-skuja3" placeholder="  Skill" name="skill"> <input type="text" required class="inputx svelte-skuja3" placeholder="  Skill type" name="skillType"> <input type="text" required class="inputx svelte-skuja3" placeholder="  School " name="school"> <input type="text" required class="inputx svelte-skuja3" placeholder="  School Adress" name="schoolAddress"> <input type="number" required class="inputx svelte-skuja3" placeholder="  Skill level" name="skillLevel"></div> <button type="submit" class="insertbutton btn svelte-skuja3">Insert</button></form> <form>${validate_component(AppBar, "AppBar").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 class="svelte-skuja3">Staff <span class="badge variant-filled-secondary sizebadge svelte-skuja3">${escape($dataTableStore.filtered.length)}</span></h3>`;
    }
  })} <div class="card variant-glass card-header"><input type="search" placeholder="Search..." class="input svelte-skuja3"${add_attribute("value", $dataTableStore.search, 0)}></div> <div class="table-container"><table class="table table-hover"><thead data-svelte-h="svelte-h2hcny"><tr><th>user</th> <th>Id</th> <th>First name</th> <th>Last name</th> <th>Sex</th> <th>Skill</th> <th>SkillType</th> <th>School</th> <th>School address</th> <th>Skill level</th></tr></thead> <tbody>${each($dataTableStore.filtered, (employee, rowIndex) => {
    return `<tr><td>${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        initials: employee.FirstName[0] + employee.LastName[0],
        background: "bg-primary-500"
      },
      {},
      {}
    )}</td> <td><br>${escape(employee.empId)}</td> <td><br>${escape(employee.FirstName)}</td> <td><br>${escape(employee.LastName)}</td> <td><br>${escape(employee.Sex)}</td> <td><br>${escape(employee.Skill)}</td> <td><br>${escape(employee.SkillType)}</td> <td><br>${escape(employee.School)}</td> <td><br>${escape(employee.SchoolAdd)}</td> <td><br>${escape(employee.SkillLevel)}</td> <td><a href="${"/" + escape(employee.empId, true)}"><button type="submit" class="editButton btn svelte-skuja3" data-svelte-h="svelte-9861ws">Edit</button> </a></td> <td><form action="${"?/deleteEMP=" + escape(employee.empId, true)}" method="POST" name="empId"><button type="submit" class="deleteButton btn svelte-skuja3" data-svelte-h="svelte-qdonso">Delete</button> </form></td> </tr>`;
  })}</tbody></table></div></form> <img src="doc.png" alt="doctor"></div></body> </html>`;
});
export {
  Page as default
};
