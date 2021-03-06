export namespace CreatePost {
  export interface Form {
    city: string
    description: string
  }

  export interface State {
    form: {
      model: Form
      dirty: boolean
      status: string
      errors: {}
    }
  }
}
