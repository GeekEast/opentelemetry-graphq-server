import axios from "axios"
import { Service } from "typedi"

@Service()
export class ProjectService {
  async existUser(_existUserDto: string): Promise<boolean> {
    const { data } = await axios.get("http://localhost:9902/api/v1/project/123")
    return data
  }
}
