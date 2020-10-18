
interface IAvatar {
    url: string
}
export type IAuthor = {
    id?: number,
    firstName:string,
    lastName:string,
    name: string,
    avatar?: IAvatar
  }