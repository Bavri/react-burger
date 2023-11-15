
export const PATH='https://norma.nomoreparties.space/api';
export const API = `${PATH}/ingredients`;
export const APIORDER = `${PATH}/orders`;
export const checkResponse =(response)=>{
   return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
};

export const getListIngredientsApi =  async (getData,error,url=API) => {
   await fetch(url)
      .then(response =>checkResponse(response))
      .then(response => getData(response))
      .catch(() => {
         error();
      });
};

