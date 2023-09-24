import { BtnSearch, FormSearch, StyledInput } from "./SearchBox.styled"

export const SearchBox = ({onSubmit})=>{
   return(
   <FormSearch onSubmit={onSubmit}>
         <StyledInput
            name="search"
            required
            autoFocus />
         <BtnSearch type="submit">Search</BtnSearch>
      </FormSearch>
   )
}