export const ADD = 'ADD';
export const add = () => {
  return {
    type: ADD
  }
}

// 하위에서 add함수를 실행할 수 있게 만들어서 보내준다