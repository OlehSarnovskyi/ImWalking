export namespace Posts {
  export interface Form {
    city: string
    description: string
  }

  export interface PostsList {
    list: Post[]
  }

  export interface Post {
    readonly _id: string
    city: string
    date: Date
    description: string
    imageSrc?: string
  }

  export interface State {
    form: {
      model: Form
      dirty: boolean
      status: string
      errors: {}
    }
    posts: PostsList
  }
}
