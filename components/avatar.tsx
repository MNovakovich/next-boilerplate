import React from 'react'
import { IAuthor } from '../interfaces'

type AuthorProps = {
  author: IAuthor
}

const Avatar:React.FC<AuthorProps> = ({ author }:AuthorProps) => {
  const name =
    author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name

  return (
    <div className="flex items-center">
     { author.avatar && author.avatar.url &&
      <img
        src={author.avatar.url} /* eslint */
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
     }
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar;