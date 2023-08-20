 <script> 

import { onMount } from 'svelte';
						
    let criteria;


    import { Avatar } from '@skeletonlabs/skeleton';
    import { Table } from '@skeletonlabs/skeleton';
    import { tableMapperValues } from '@skeletonlabs/skeleton';
    import { AppBar } from '@skeletonlabs/skeleton';
    
    import {
      // Utilities
      createDataTableStore,
      dataTableHandler,
      // Svelte Actions
      tableInteraction,
      tableA11y
    } from '@skeletonlabs/skeleton';

    
$: dataTableStore = createDataTableStore(
	// Pass your source data here:
	Employees,
	// Provide optional settings:
	{
		// The current search term.
		search: '',
		// The current sort key.
		sort: '',
		// Paginator component settings.
		pagination: { offset: 0, limit: 100, size: 0, amounts: [1, 2, 5, 10] }
	}
);

// This automatically handles search, sort, etc when the model updates.
$ :dataTableStore.subscribe((model) => dataTableHandler(model));

				
let x=[];
export let data 
$:({Employees} = data)



 
   
  $:  tableSimple = {
	// A list of heading labels.
	head: ['First name', 'Last name', 'Sex','Skill','Skill type','School','School Address','Skill level'],
	// The data visibly shown in your table body UI.
	body: tableMapperValues(Employees, ['FirstName', 'LastName', 'Sex','Skill','SkillType','School','SchoolAdd','SkillLevel']),
	// Optional: The data returned when interactive is enabled and a row is clicked.
	meta: tableMapperValues(Employees, ['position', 'name', 'symbol', 'weight']),
};




//Get form element
function submitForm(event){
   //Preventing page refresh
   event.preventDefault();
}

$:dataTableStore.updateSource(Employees)
//Calling a function during form submission.
</script>
    <html lang="en">
    <head>
        <title>Employee managment system</title>
    </head>
    
    
    <body>
      


      <nav>
        <img src="hilcoe-Logo.png" width="90px" alt="logo" class="logo">
        
<ol class="breadcrumb">
	<li class="crumb">
		<a href="/" class="btn btn-sm variant-soft-primary">Staff</a>
	</li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>

</ol>
					
      </nav>
        
        <div class="mygrid">
        <form id="formId" method="POST"  action="?/createEMP" >
          <h1>Employee managment system</h1>
            <h2>Add a new Employee</h2> 
               <div class="inputGrid"> 
            <input type="text" required class="inputx" placeholder="  First Name"  name=Fname>
            <input type="text" required class="inputx" placeholder="  Last Name" name =Lname>
            <input type="text" required class="inputx" placeholder="  Sex"  name=sex>
            <input type="text" required class="inputx" placeholder="  Skill" name=skill>
            <input type="text" required class="inputx" placeholder="  Skill type" name=skillType>
            <input type="text" required class="inputx" placeholder="  School " name=school>
            <input type="text" required class="inputx" placeholder="  School Adress" name=schoolAddress>
            <input type="number" required class="inputx" placeholder="  Skill level" name = skillLevel>
            </div>    
            <button type="submit" class="insertbutton btn">Insert</button> 
         </form>  

        <form>
          
          <AppBar ><h3>Staff <span class="badge variant-filled-secondary sizebadge">{$dataTableStore.filtered.length}</span></h3></AppBar>
              <div class="card variant-glass card-header" >
              <input bind:value={$dataTableStore.search} type="search" placeholder="Search..."  class="input"/>
            </div>
            
              <div class="table-container">
                <table class="table table-hover">
              
                  <thead>
                    <tr>
                      <th>user</th>
                      <th>Id</th>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Sex</th>
                      <th>Skill</th>
                      <th>SkillType</th>
                      <th>School</th>
                      <th>School address</th>
                      <th>Skill level</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {#each $dataTableStore.filtered as employee, rowIndex}
                      <tr>
                      <td><Avatar initials={employee.FirstName[0] + employee.LastName[0]} background="bg-primary-500" /></td>
                      <td><br>{employee.empId}</td>  
                      <td><br>{employee.FirstName}</td>
                      <td><br>{employee.LastName}</td>
                      <td><br>{employee.Sex}</td>
                      <td><br>{employee.Skill}</td>
                      <td><br>{employee.SkillType}</td>
                      <td><br>{employee.School}</td>
                      <td><br>{employee.SchoolAdd}</td>
                      <td><br>{employee.SkillLevel}</td>
                        <td>
                          <a href = "/{employee.empId}"><button type="submit" class="editButton  btn" >Edit</button> </a>
                         </td>
                         <td>
                           <form action="?/deleteEMP={employee.empId}" method="POST" name="empId" >
                           <button type="submit" class="deleteButton btn">Delete</button>
                         </form>
                       </td>
                      </tr>
                      
                    {/each}
                  </tbody>
                </table>
            </div>
        </form>
        <img src="doc.png" alt="doctor">
        </div>
    </body>
    </html>
    <style>
      .sizebadge{
        font-size: 20px;
      }
      h3{
      font-size: 30px;  
      }
h1{
  font-size: 40px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-top :20px;
  margin-right: 10px;
  background: transparent;
}
h2{
  margin-left: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 30px;
  background: transparent;
}


		.input{
      outline: none;
      height: 40px;
      margin-bottom: 20px;
      padding:20px;
      background: transparent;
    }
    .inputx{
      
      height: 60px;
      margin-bottom: 40px;
      margin-right: 60px;
      margin-left:20px;
      border-radius:30px;
      background-color: #37446b;
      padding-left: 10px;
    }
    .inputx:focus{
      outline: 2px solid #0fba81;
    }
    .insertbutton {
      margin-left: 60px;
      width: 450px;
      height: 60px;
      border:3px solid #0fba81;
      border-radius: 45px;
      transition: all 0.3s;
      cursor: pointer;
      font-size: 1em;
      font-weight: 450;
      font-family: 'Montserrat', sans-serif;
    }
    
    .insertbutton:hover {
      background: #0fba81;
      color: white;
    }
    .deleteButton{
      width: 80px;
      border:3px solid #FFCCCB;
      margin-left: 0;
      margin-top: 10px;
    }
    .deleteButton:hover{
      background: #F74F4F;
      color: white;
    }
    .editButton{
      width: 80px;
      border: 3px solid #ADD8E6;
      margin-left: 0;
      margin-top: 10px;
    }
    .editButton:hover{
      background: #1986F4;
    }
    
    .mygrid
    {
    display: grid;
    grid-template-columns: auto auto auto ;
    background: transparent;
    }
    
    .inputGrid
    {
      display: grid;
      grid-template-columns: auto auto;
      background: transparent;
    }
    html { -webkit-tap-highlight-color: rgba(128, 128, 128, 0.5);}
    .breadcrumb{
      margin-left: 600px;
      margin-bottom: 20px;
    }
    
    </style>
