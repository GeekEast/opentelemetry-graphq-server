import { Arg, Query, Resolver } from "type-graphql"
import { Inject, Service } from "typedi"

import { ProjectService } from "../service/project.service"

@Service()
@Resolver()
export class ProjectResolver {
  @Inject()
  projectService: ProjectService

  @Query(() => Boolean, { name: "ORGExistUser" })
  async existUser(@Arg("filter") existUserDto: string): Promise<boolean> {
    return this.projectService.existUser(existUserDto)
  }
}
