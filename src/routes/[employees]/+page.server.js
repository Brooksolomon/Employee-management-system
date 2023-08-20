import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
export const load = async({params}) =>{
    const getemp =async()=>{
        const emp = await prisma.staff.findUnique({
            where:{
                empId:Number(params.employees)
            }
        })
        if(!emp)
        {
            throw err(404)
        }
        return emp
    }
    return {
        emp:getemp()
    }
}
export const actions  = {
    updateEMP : async ({request,params}) => {
        const{Fname,Lname,sex,skill,skillType,school,schoolAddress,skillLevel} = Object.fromEntries(await request.formData())
        console.log(params.employees)
        try{
            await prisma.staff.update({
                where:
                {
                    empId:Number(params.employees)
                },
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

            })
        }catch(err)
        {
            console.log(err)
            return
        }
        return 200
    }
}