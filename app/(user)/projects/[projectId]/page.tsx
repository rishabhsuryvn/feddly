import { db } from "@/db"
import { projects as dbProjects } from "@/db/schema"
import { eq } from "drizzle-orm"
import { ChevronLeft, Globe } from "lucide-react"
import Link from "next/link"
import Table from "@/components/Table"
const page = async({params}:{
    params:{
        projectId:string
    }
})  =>{
    if (!params.projectId) return (<div>Invalid Project Id</div>)
    
    const projects = await db.query.projects.findMany({
        where: (eq(dbProjects.id, parseInt(params.projectId))),
        with : {
            feedbacks: true
        }
    })

    const project = projects[0]
  
    return (
        <div>
            <div>
                <Link href="/dashboard" className="flex items-center text-indigo-700 mb-5">
                <ChevronLeft className="h-5 w-5 mr-1 " />
                <span className="text-lg">Back to projects</span>
                </Link>
                
            </div>
            <div className="flex justify-between items-start">
            <div className="proj-info">
          <h1 className="text-3xl font-bold mb-3">{project.name}</h1>
          <h2 className="text-primary-background text-xl mb-2">{project.description}</h2>
          </div>
          {project.url ? <Link href={project.url} className="underline text-indigo-700 flex items-center">
          <Globe className="h-5 w-5 mr-1"/> 
        <span className="text-lg">Visit Site</span> </Link> : null}
        </div>
        <div>
            <Table data={project.feedbacks} />
        </div>
        </div>
    )
}
export default page