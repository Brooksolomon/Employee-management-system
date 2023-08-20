import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { A as Avatar } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".butcrew.svelte-1b9fsg6{margin-left:350px}h1.svelte-1b9fsg6{font-size:50px;text-align:center}h2.svelte-1b9fsg6{font-size:30px;text-align:center;margin-bottom:50px;margin-top:50px}.inputx.svelte-1b9fsg6{height:50px;margin-bottom:40px;margin-right:60px;margin-left:20px;border-radius:30px;background-color:#37446b;padding-left:10px;padding-top:30px;padding-bottom:30px;width:700}.editbutton.svelte-1b9fsg6{margin-left:70px;width:450px;height:60px;border:3px solid #90EE90;border-radius:45px;transition:all 0.3s;cursor:pointer;font-size:1em;font-weight:450;font-family:'Montserrat', sans-serif}.editbutton.svelte-1b9fsg6:hover{background:#34F741;color:white}.inputGrid.svelte-1b9fsg6{display:grid;grid-template-columns:auto auto}.breadcrumb.svelte-1b9fsg6{margin-bottom:20px;margin-left:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let emp;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ emp } = data);
  return `<nav data-svelte-h="svelte-bcb17z"><img src="hilcoe-Logo.png" width="90px" alt="logo" class="logo"></nav> <form id="formId" method="POST" action="?/updateEMP"><h1 class="svelte-1b9fsg6" data-svelte-h="svelte-1en9o1l">Employee managment system</h1> <h2 class="svelte-1b9fsg6" data-svelte-h="svelte-2ux15e">Edit employee</h2> <ol class="breadcrumb svelte-1b9fsg6"><li class="crumb" data-svelte-h="svelte-g2evgh"><a href="/" class="btn btn-sm variant-soft-primary">Staff</a></li> <li class="crumb-separator" aria-hidden data-svelte-h="svelte-16i7nlm">›</li> <a href="/elements/breadcrumbs">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      initials: emp.FirstName[0] + emp.LastName[0],
      background: "bg-primary-500",
      width: "w-8"
    },
    {},
    {}
  )}</a></ol> <div class="inputGrid svelte-1b9fsg6"><input type="text" required class="inputx svelte-1b9fsg6" placeholder="First Name" name="Fname"${add_attribute("value", emp.FirstName, 0)} id="Fname"> <input type="text" required class="inputx svelte-1b9fsg6" placeholder="Last Name" name="Lname"${add_attribute("value", emp.LastName, 0)}> <input type="text" required class="inputx svelte-1b9fsg6" placeholder="Sex" name="sex"${add_attribute("value", emp.Sex, 0)}> <input type="text" required class="inputx svelte-1b9fsg6" placeholder="Skill" name="skill"${add_attribute("value", emp.Skill, 0)}> <input type="text" required class="inputx svelte-1b9fsg6" placeholder="Skill type" name="skillType"${add_attribute("value", emp.SkillType, 0)}> <input type="text" required class="inputx svelte-1b9fsg6" placeholder="School" name="school"${add_attribute("value", emp.School, 0)}> <input type="text" required class="inputx svelte-1b9fsg6" placeholder="School Adress" name="schoolAddress"${add_attribute("value", emp.SchoolAdd, 0)}> <input type="number" required class="inputx svelte-1b9fsg6" placeholder="Skill level" name="skillLevel"${add_attribute("value", emp.SkillLevel, 0)}></div> <div class="butcrew svelte-1b9fsg6" data-svelte-h="svelte-6oeq36"><button type="submit" class="editbutton svelte-1b9fsg6">Update</button> <a href="/.."><button class="editbutton svelte-1b9fsg6">Go back</button></a></div> </form>`;
});
export {
  Page as default
};
