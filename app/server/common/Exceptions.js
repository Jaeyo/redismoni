

export class ObjectDoesNotExist extends Error {
  constructor() {
    super('object does not exist')
    this.status = 404
  }
}


export class BadRequest extends Error {
  constructor(msg = 'bad request') {
    super(msg)
    this.status = 400
  }
}
