import { useState, useCallback } from 'react';

export function useForm(initialState, handleSubmit) {
   const [formData, setFormData] = useState(initialState);

   const onSubmit = useCallback((e) => {
      e.preventDefault();

      if (handleSubmit) {
         const pureFormData = { ...formData };
         handleSubmit(pureFormData);
         setFormData({ ...formData});
      }
   }, [formData, handleSubmit]);

   const onChange = useCallback((e) => {
      const name = e.target.name;
      const value = e.target.value;
      setFormData({ ...formData, [name]: value });
   }, [formData]);

   const onReset=useCallback((e)=>{
      e.preventDefault();
      setFormData(initialState);
   },[initialState]);

   return { formData, setFormData, onSubmit, onChange,onReset};
}