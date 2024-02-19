import { useState, useCallback, SyntheticEvent, ChangeEvent, FormEvent } from 'react';



export function useForm<T>(initialState:T, handleSubmit: (state:T)=>void) {
   const [formData, setFormData] = useState(initialState);

   const onSubmit = useCallback((e:FormEvent) => {
      e.preventDefault();

      if (handleSubmit) {
         const pureFormData = { ...formData };
         handleSubmit(pureFormData);
         setFormData({ ...formData});
      }
   }, [formData, handleSubmit]);

   const onChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name;
      const value = e.target.value;
      setFormData({ ...formData, [name]: value });
   }, [formData]);

   const onReset=useCallback((e:SyntheticEvent)=>{
      e.preventDefault();
      setFormData(initialState);
   },[initialState]);

   return { formData, setFormData, onSubmit, onChange,onReset};
}