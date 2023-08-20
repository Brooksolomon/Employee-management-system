<script>
    // import Employees from '../[employees].`+page.svelte';

    export let data
    $:({emp} = data)
    import { Avatar } from '@skeletonlabs/skeleton';

</script>

<nav>
  <img src="hilcoe-Logo.png" width="90px" alt="logo" class="logo">
  

					
</nav>


<form id="formId" method="POST"  action="?/updateEMP" >
    <h1>Employee managment system</h1>
      <h2>Edit employee</h2> 
      <ol class="breadcrumb">
        <li class="crumb">
          <a href="/" class="btn btn-sm variant-soft-primary">Staff</a>
        </li>
        <li class="crumb-separator" aria-hidden>&rsaquo;</li>
        <a href="/elements/breadcrumbs">
          <Avatar initials={emp.FirstName[0] + emp.LastName[0]} background="bg-primary-500" width="w-8" />
        </a>
      </ol>
        <div class="inputGrid"> 
       <input type="text" required class="inputx" placeholder="First Name"  name=Fname value={emp.FirstName} id="Fname">  
      <input type="text" required class="inputx" placeholder="Last Name" name =Lname value={emp.LastName}>
      <input type="text" required class="inputx" placeholder="Sex" name=sex value={emp.Sex}>
      <input type="text" required class="inputx" placeholder="Skill" name=skill value={emp.Skill}>
      <input type="text" required class="inputx" placeholder="Skill type"  name=skillType value={emp.SkillType}>
      <input type="text" required class="inputx" placeholder="School" name=school value={emp.School}>
      <input type="text" required class="inputx" placeholder="School Adress" name=schoolAddress value={emp.SchoolAdd}>
      <input type="number" required class="inputx" placeholder="Skill level"  name = skillLevel value={emp.SkillLevel}>
      </div>   
      <div class="butcrew"> 
      <button type="submit" class = "editbutton" >Update</button>
      <a href="/.."><button  class = "editbutton" >Go back</button></a>
    </div>
  </form>  

    




  <style>
    .butcrew{
      margin-left: 350px;
    }
    h1{
      font-size: 50px;
      text-align: center;
    }
    h2{
      font-size: 30px;
      text-align: center;
      margin-bottom: 50px;
      margin-top: 50px;
    }
    .inputx{
      height: 50px;
      margin-bottom: 40px;
      margin-right: 60px;
      margin-left:20px;
      border-radius:30px;
      background-color: #37446b;
      padding-left: 10px;
      padding-top: 30px;
      padding-bottom: 30px;
      width: 700;
    }
    .editbutton {
      margin-left: 70px;
      width: 450px;
      height: 60px;
      border:3px solid #90EE90;
      border-radius: 45px;
      transition: all 0.3s;
      cursor: pointer;
      font-size: 1em;
      font-weight: 450;
      font-family: 'Montserrat', sans-serif;
    }
    
    .editbutton:hover {
      background: #34F741;
      color: white;
    }

    

    .inputGrid
    {
      display: grid;
      grid-template-columns: auto auto;
    }
    .breadcrumb
    {
      margin-bottom: 20px;
      margin-left: 20px;
    }


  


    </style>
     