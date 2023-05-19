"use client";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from "@/redux/hooks";


interface MyProps{
  getData: (name: string) => Promise<string>;
}
export default function Main({getData}: MyProps) {
    const [id, setID] = useState('');

    const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
       
        console.log("id : ", id)

        fetchData();
  
        setID('');
  
      };

    async function fetchData() {
        const data_ = await getData(id);
        console.log("send.tsx : ", data_);
    }
    return (
        <Box>
            <Box component="form" noValidate onSubmit={handleEmailSubmit} sx={{ mt: 3 }}>
                <TextField id="ID" label="ID" name="ID" 
                value={id}  onChange={e => setID(e.target.value)} />
                <Button type="submit"> get a new password </Button>
            </Box>

            <Box component="form" noValidate onSubmit={handleEmailSubmit} sx={{ mt: 3 }}>
                <Button type="submit"> send again! </Button>
            </Box>
            <Link href="/login" variant="body2">
                go to login
            </Link>

        </Box>
        
       
      )
}