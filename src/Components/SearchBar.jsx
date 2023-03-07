import SearchIcon from '@mui/icons-material/Search';
import { hover } from '@testing-library/user-event/dist/hover';
import { Dropdown } from 'react-bootstrap';


function SearchBar(){


    return(



        <div className="d-flex bg-white align-items-center m-0 p-0" style={{width:"40%"}}>


<input  className='border-0 form-control' placeholder="Search for Products,Brands and more"></input>

<Dropdown className='dropdown'>
    <Dropdown.Toggle variant="white" className='border-0'>
    <SearchIcon/>
    </Dropdown.Toggle>

<Dropdown.Menu>

<Dropdown.Item>CHAITHU</Dropdown.Item>
<Dropdown.Item>MR INVINCIBLE</Dropdown.Item>
<Dropdown.Item>TONY STARK</Dropdown.Item>

</Dropdown.Menu>
    
    </Dropdown>
</div>

      
    )
}
export default SearchBar

