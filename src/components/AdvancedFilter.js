import {InputLabel, MenuItem, Select, Button, ListItemIcon, Checkbox, Container, ListItemText, FormControlLabel } from '@mui/material';
import { useState } from 'react';

const categories = [
    {value:'mmorpg', text: "MMORPG"},
    {value:'shooter', text: "Shooter"},
    {value:'moba', text: "MOBA"},
    {value:'anime', text: "Anime"},
    {value:'battle-royale', text: "Battle Royale"},
    {value:'strategy', text: "Strategy"},
    {value:'fantasy', text: "Fantasy"},
    {value:'sci-fi', text: "Sci-Fi"},
    {value:'card_games', text: "Card Games"},
    {value:'racing', text: "Racing"},
    {value:'fighting', text: "Fighting"},
    {value:'social', text: "Social"},
    {value:'sports', text: "Sports"}
]
const platforms = [
    {value:'pc', text: "PC (Windows)"},
    {value: 'browser', text: "Navegador"}
]
export const AdvancedFilter = (props) => {
    const [category, setCategory] = useState([]);
    const [platform, setPlatform] = useState('');
    
    function handleChange(key, value){
        if(key === 'category'){
            setCategory(value);
        }
        if(key === 'platform'){
            setPlatform(value);
        }
   };
   function handleChangeCategory(checked, value){
   console.log(checked, value)
    if(checked){
        setCategory([
        ...category,
        value
        ]);
    }else{
        const cat = category.filter(item => item !== value)
        //filtra tudo que nao for value
        setCategory(cat);
    }
    console.log(category)

   };
    const isChecked = (value) => category.some(item => item === value);
   
    return (
        <>
            <Container>
                <InputLabel>Category</InputLabel>
                    {categories.map((category => 
                        <FormControlLabel
                        label={category.text}
                        onChange={(e) => handleChangeCategory(e.target.checked, category.value)}
                        control={<Checkbox checked={isChecked(category.value)} color="secondary"/>}
                        />
                    ))} 
            </Container>

            <Container>
                <InputLabel>Platform</InputLabel>
                <Select
                    value={platform}
                    label="platform"
                    onChange={(e)=> handleChange('platform', e.target.value)}
                    sx={{width: '200px'}}
                >
                    {platforms.map((platform) => (
                        <MenuItem value={platform.value}>{platform.text}</MenuItem>
                    ))}
                </Select>      
            </Container>
            <Container>
                <Button variant="contained" sx={{marginTop: '10px', marginBottom: '10px'}} onClick={() => props.submitFilter(category, platform)}>RECOMENDAR</Button>
            </Container>
                   
        </>
    )
}