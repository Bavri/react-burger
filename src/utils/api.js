
const PATH='https://norma.nomoreparties.space/api';
const API = `${PATH}/ingredients`;
const serverValid =(response)=>{
   return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
};

const getListIngredientsApi =  async (getData,error,url=API) => {
   await fetch(url)
      .then(response =>serverValid(response))
      .then(response => getData(response))
      .catch(() => {
         error();
      });
};

export {getListIngredientsApi};