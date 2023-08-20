/** @type {import('./$types').Actions} */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


/** @type {import('./$types').PageServerLoad} */
export const load = async ()=>{
    // console.log(await prisma.staff.findMany())
    return {Employees : await prisma.staff.findMany()}
}
export const actions = {
    createEMP: async({request}) =>{
        let{Fname,Lname,sex,skill,skillType,school,schoolAddress,skillLevel} = Object.fromEntries(await request.formData()) 
        try {
            await prisma.staff.create({
                data:{
                          FirstName:Fname,
                          LastName:Lname,
                          Sex:sex,
                          Skill: skill,
                          SkillType: skillType,
                          School: school,
                          SchoolAdd: schoolAddress,
                          SkillLevel: Number(skillLevel)
                }
            });
        }
        catch(err)
        {
          console.log(err)
        }

        return 201
    },
    deleteEMP:async({url}) => {
        
        const empId  = url.search.split("=")[1]
        if (!empId){
            console.log("it doesnt exist",empId)
            return
        }
        try{
            await prisma.staff.delete(
                {
                    where:{
                        empId:Number(empId)
                    }
                }
            )
        }catch(err)
        {
            console.log(err)
        }
        return {
            status:300,
        }
    }
}



				