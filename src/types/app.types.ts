export interface IUser {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
  }


export interface ITodo {
  userId?: number,
  id?: number,
  title: string,
  completed: boolean
}

export interface TodoProps extends ITodo{
  userClicked: Function
}
